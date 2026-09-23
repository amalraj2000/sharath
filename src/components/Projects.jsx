import { useResumePDF } from '../hooks/useResumePDF';
import { FolderOpen, FileText, Upload, ExternalLink, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const projectHighlights = [
  {
    icon: <Layers className="w-6 h-6 text-safety-amber" />,
    title: "Architectural Visualizations",
    desc: "3D exterior & interior renders using SketchUp and Lumion for residential and commercial clients."
  },
  {
    icon: <FileText className="w-6 h-6 text-safety-amber" />,
    title: "Civil Drafting & Detailing",
    desc: "Precise 2D floor plans, elevation drawings, and structural layouts created with AutoCAD."
  },
  {
    icon: <FolderOpen className="w-6 h-6 text-safety-amber" />,
    title: "Site Management Projects",
    desc: "On-site execution oversight for a ₹45 Cr multi-story commercial complex in Calicut."
  }
];

export default function Projects() {
  const { viewPDF, pdfMeta, loading } = useResumePDF();

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-concrete-900 mb-2">Projects</h2>
          <div className="h-1 w-20 bg-safety-amber rounded"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-concrete-800 text-lg leading-relaxed">
              A collection of architectural visualizations, civil drafting work, and site management projects — spanning residential villas, commercial complexes, and structural detailing across Kerala.
            </p>

            <div className="space-y-4">
              {projectHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 p-4 bg-concrete-50 border border-concrete-200 rounded-xl hover:border-safety-amber/50 hover:shadow-md transition-all cursor-default"
                >
                  <div className="bg-safety-amber/10 p-2.5 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-concrete-900 mb-1">{item.title}</h4>
                    <p className="text-concrete-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — PDF Viewer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm">
              {/* Card */}
              <div className="bg-gradient-to-br from-industrial-navy to-concrete-800 rounded-2xl p-8 shadow-2xl text-center relative overflow-hidden">
                {/* Background decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-safety-amber/10 rounded-full pointer-events-none"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                  {/* File Icon */}
                  <div className="bg-safety-amber/10 border border-safety-amber/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FolderOpen className="w-10 h-10 text-safety-amber" />
                  </div>

                  <h3 className="text-white font-bold text-xl mb-2">Project Portfolio</h3>
                  <p className="text-concrete-300 text-sm mb-2 leading-relaxed">
                    View the complete portfolio — architectural renders, CAD drawings, and project documentation.
                  </p>

                  {/* PDF status */}
                  {!loading && (
                    <div className="mb-6 mt-4">
                      {pdfMeta ? (
                        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                          Portfolio PDF ready
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 bg-safety-amber/10 border border-safety-amber/30 text-safety-amber text-xs font-medium px-3 py-1.5 rounded-full">
                          <Upload className="w-3 h-3" />
                          PDF not uploaded yet
                        </div>
                      )}
                    </div>
                  )}

                  {/* View Projects Button */}
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={viewPDF}
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-safety-amber text-industrial-navy font-bold px-6 py-4 rounded-xl hover:bg-safety-amber/90 transition-all shadow-lg shadow-safety-amber/20 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Projects
                  </motion.button>

                  {pdfMeta && (
                    <p className="text-concrete-400 text-xs mt-3">
                      Updated {new Date(pdfMeta.date).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </p>
                  )}
                </div>
              </div>

              {/* Tip below card */}
              <p className="text-center text-concrete-600 text-xs mt-4 italic">
                Opens the project portfolio PDF in a new tab
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
