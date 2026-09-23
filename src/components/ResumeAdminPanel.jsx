import { useRef, useState } from 'react';
import { Upload, CheckCircle, FileText, Trash2, X, ShieldCheck } from 'lucide-react';
import { useResumePDF } from '../hooks/useResumePDF';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeAdminPanel() {
  const { pdfMeta, uploadPDF, removePDF } = useResumePDF();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef();

  const handleFile = async (file) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setError('Please select a valid PDF file.');
      return;
    }
    setUploading(true);
    setError('');
    try {
      await uploadPDF(file);
      setSuccess(`"${file.name}" uploaded successfully!`);
      setTimeout(() => setSuccess(''), 5000);
    } catch {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = async () => {
    await removePDF();
    setSuccess('PDF removed. Fallback file will be used.');
    setTimeout(() => setSuccess(''), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50 w-80"
    >
      <div className="bg-industrial-navy border-2 border-safety-amber rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-safety-amber/10 border-b border-safety-amber/30 px-5 py-3 flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-safety-amber" />
          <span className="text-white font-bold text-sm tracking-wide">Admin Panel</span>
          <span className="ml-auto text-[10px] text-concrete-400 font-medium bg-concrete-900/50 px-2 py-0.5 rounded-full">
            Private · Visible only to you
          </span>
        </div>

        <div className="p-5">
          {/* Section Title */}
          <h4 className="text-white font-semibold text-sm mb-1">Projects Portfolio PDF</h4>

          {/* Current File Status */}
          {pdfMeta ? (
            <div className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 mb-4">
              <FileText className="w-4 h-4 text-safety-amber shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-semibold truncate">{pdfMeta.name}</p>
                <p className="text-concrete-400 text-[10px] mt-0.5">
                  Updated {new Date(pdfMeta.date).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}
                </p>
              </div>
              <button
                onClick={handleRemove}
                title="Remove PDF"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <p className="text-concrete-400 text-xs mb-4 italic">
              No PDF uploaded yet — visitors will see a prompt when clicking <code className="text-safety-amber text-[10px]">View Projects</code>
            </p>
          )}

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              handleFile(e.dataTransfer.files[0]);
            }}
            onClick={() => inputRef.current.click()}
            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-200 ${
              dragging
                ? 'border-safety-amber bg-safety-amber/10 scale-105'
                : 'border-concrete-600 hover:border-safety-amber/70 hover:bg-white/5'
            }`}
          >
            <Upload className={`w-6 h-6 mx-auto mb-2 transition-colors ${dragging ? 'text-safety-amber' : 'text-concrete-400'}`} />
            <p className="text-white text-xs font-medium">
              {uploading ? 'Uploading...' : 'Drop PDF here'}
            </p>
            <p className="text-concrete-400 text-[10px] mt-1">
              or <span className="text-safety-amber font-semibold">click to browse</span>
            </p>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files[0])}
            />
          </div>

          {/* Feedback Messages */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex items-center gap-2 text-green-400 text-xs font-medium"
              >
                <CheckCircle className="w-4 h-4 shrink-0" />
                {success}
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex items-center gap-2 text-red-400 text-xs font-medium"
              >
                <X className="w-4 h-4 shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
