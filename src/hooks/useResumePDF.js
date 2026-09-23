import { useState, useEffect } from 'react';
import { getPDF, storePDF, deletePDF } from '../utils/resumeDB';

export function useResumePDF() {
  const [pdfMeta, setPdfMeta] = useState(null);  // { name, date }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPDF()
      .then((data) => {
        if (data) setPdfMeta({ name: data.name, date: data.date });
      })
      .finally(() => setLoading(false));
  }, []);

  const uploadPDF = async (file) => {
    await storePDF(file);
    setPdfMeta({ name: file.name, date: new Date().toISOString() });
  };

  const removePDF = async () => {
    await deletePDF();
    setPdfMeta(null);
  };

  const downloadPDF = async () => {
    const data = await getPDF();
    const a = document.createElement('a');
    if (data) {
      const url = URL.createObjectURL(data.blob);
      a.href = url;
      a.download = data.name || 'Sharath_Kumar_V_Projects.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } else {
      a.href = '/projects.pdf';
      a.download = 'Sharath_Kumar_V_Projects.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const viewPDF = async () => {
    const data = await getPDF();
    if (data) {
      const url = URL.createObjectURL(data.blob);
      window.open(url, '_blank');
      // Revoke after a delay to allow the tab to load
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } else {
      window.open('/projects.pdf', '_blank');
    }
  };

  return { pdfMeta, loading, uploadPDF, removePDF, downloadPDF, viewPDF };
}
