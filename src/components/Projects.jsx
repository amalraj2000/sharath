import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Layers, FileText, FolderOpen, Pause, Play, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const allPhotos = [
  { src: "/projects/p1-1.jpg", label: "Commercial Complex — Site View" },
  { src: "/projects/p1-2.jpg", label: "Commercial Complex — Structure" },
  { src: "/projects/p1-3.jpg", label: "Commercial Complex — Detail" },
  { src: "/projects/p2-1.jpg", label: "Residential Villa — Exterior" },
  { src: "/projects/p2-2.jpg", label: "Residential Villa — Render" },
  { src: "/projects/p2-3.jpg", label: "Residential Villa — Elevation" },
  { src: "/projects/p3-1.jpg", label: "Interior Design — Living Space" },
  { src: "/projects/p3-2.jpg", label: "Interior Design — Rendering" },
  { src: "/projects/p3-3.jpg", label: "Interior Design — Landscape" },
  { src: "/projects/p4-1.jpg", label: "Civil Structure — Elevation" },
  { src: "/projects/p4-2.jpg", label: "Civil Structure — Detailing" },
  { src: "/projects/p4-3.jpg", label: "Civil Structure — Drawing" },
];

const gridPhotos = allPhotos.slice(0, 6);
const sliderPhotos = allPhotos.slice(6);

// Lightbox
function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
      >
        <img src={photo.src} alt={photo.label} className="w-full max-h-[80vh] object-contain bg-concrete-900" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
          <p className="text-white font-semibold text-sm">{photo.label}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/50 hover:bg-safety-amber text-white rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold transition-colors"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const next = useCallback(() => setCurrent(c => (c + 1) % sliderPhotos.length), []);
  const prev = () => setCurrent(c => (c - 1 + sliderPhotos.length) % sliderPhotos.length);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(next, 3500);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, next]);

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-concrete-900 mb-2">Works Done</h2>
          <div className="h-1 w-20 bg-safety-amber rounded mb-4"></div>
          <p className="text-concrete-700 max-w-xl leading-relaxed">
            A collection of architectural visualizations, civil drafting work, and site management projects across Kerala.
          </p>
        </motion.div>

        {/* ── Part 1: 6-Photo Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-safety-amber/15 text-safety-amber text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Featured Projects
            </span>
            <div className="flex-1 h-px bg-concrete-200" />
          </div>

          {/* Grid: 1 large + 2 small on left, 3 stacked on right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-auto md:h-[480px]">
            {/* Large hero photo */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setLightbox(gridPhotos[0])}
              className="col-span-2 md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden cursor-zoom-in group shadow-md"
              style={{ minHeight: '220px' }}
            >
              <img
                src={gridPhotos[0].src}
                alt={gridPhotos[0].label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: '100%', minHeight: '220px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-sm drop-shadow">{gridPhotos[0].label}</p>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-safety-amber text-industrial-navy text-xs font-bold px-2.5 py-1 rounded shadow">Featured</span>
              </div>
            </motion.div>

            {/* 5 smaller photos */}
            {gridPhotos.slice(1).map((photo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightbox(photo)}
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group shadow-sm"
                style={{ minHeight: '140px' }}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ height: '100%', minHeight: '140px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                  {photo.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Part 2: Slider for remaining 6 ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-industrial-navy/10 text-industrial-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              More Works
            </span>
            <div className="flex-1 h-px bg-concrete-200" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Highlights on left */}
            <div className="space-y-4">
              {projectHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 p-4 bg-concrete-50 border border-concrete-200 rounded-xl hover:border-safety-amber/50 hover:shadow-md transition-all cursor-default"
                >
                  <div className="bg-safety-amber/10 p-2.5 rounded-lg h-fit">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-concrete-900 mb-1">{item.title}</h4>
                    <p className="text-concrete-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Download button */}
              <motion.a
                href="/plan.pdf"
                download="Sharath_Kumar_Project_Plans.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 inline-flex items-center justify-center gap-3 w-full bg-industrial-navy text-white font-bold px-6 py-4 rounded-xl hover:bg-concrete-800 transition-all shadow-lg shadow-industrial-navy/20 group"
              >
                <span className="bg-safety-amber/20 group-hover:bg-safety-amber/30 p-1.5 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-safety-amber" />
                </span>
                Download Project Plans
                <span className="ml-auto text-xs text-concrete-400 font-normal">PDF</span>
              </motion.a>
            </div>

            {/* Slider on right */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-industrial-navy">
              {/* Main slide */}
              <div className="relative h-64 md:h-80 overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={sliderPhotos[current].src}
                    alt={sliderPhotos[current].label}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => setLightbox(sliderPhotos[current])}
                  />
                </AnimatePresence>

                {/* Progress bars */}
                <div className="absolute top-3 left-3 right-3 flex gap-1 z-10">
                  {sliderPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className="flex-1 h-0.5 rounded-full overflow-hidden bg-white/30"
                    >
                      {idx === current && (
                        <motion.div
                          className="h-full bg-safety-amber"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: isPlaying ? 3.5 : 0, ease: 'linear' }}
                          key={`${current}-${isPlaying}`}
                        />
                      )}
                      {idx < current && <div className="h-full w-full bg-white/70" />}
                    </button>
                  ))}
                </div>

                {/* Gradient + label */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-16 z-10">
                  <p className="text-white font-semibold text-sm drop-shadow">{sliderPhotos[current].label}</p>
                  <p className="text-concrete-300 text-xs">{current + 1} / {sliderPhotos.length}</p>
                </div>

                {/* Play/pause */}
                <button
                  onClick={() => setIsPlaying(p => !p)}
                  className="absolute bottom-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-safety-amber text-white rounded-full p-2 transition-all"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                {/* Arrows */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-safety-amber text-white rounded-full p-2.5 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-safety-amber text-white rounded-full p-2.5 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="bg-industrial-navy px-3 py-3 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {sliderPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                      current === idx
                        ? 'border-safety-amber scale-105 shadow-lg shadow-safety-amber/30'
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </section>
  );
}
