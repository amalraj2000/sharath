import { useState } from 'react';
import { projects } from '../data';
import { X, MapPin, Ruler, Calendar, DollarSign, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-concrete-900 mb-2">Featured Works</h2>
            <div className="h-1 w-20 bg-safety-amber rounded"></div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-industrial-navy text-white shadow-md' 
                    : 'bg-concrete-100 text-concrete-800 hover:bg-concrete-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className="group bg-concrete-50 rounded-xl overflow-hidden border border-concrete-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-industrial-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-industrial-navy rounded shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-concrete-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-concrete-800">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-safety-amber" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4 text-safety-amber" />
                      {project.scale}
                    </div>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-concrete-900 mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 text-concrete-800 text-sm space-y-1">
                      {project.responsibilities.slice(0, 2).map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto w-full py-3 bg-white border-2 border-industrial-navy text-industrial-navy font-semibold rounded hover:bg-industrial-navy hover:text-white transition-colors"
                  >
                    View Project Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-concrete-900/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col relative"
            >
              <div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-concrete-200 p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-concrete-900">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-concrete-100 rounded-full text-concrete-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8" />
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-industrial-navy mb-3">Project Overview</h4>
                      <ul className="list-disc pl-5 text-concrete-800 space-y-2">
                        {selectedProject.responsibilities.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-industrial-navy mb-3">Tools & Software</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool, idx) => (
                          <span key={idx} className="bg-concrete-100 text-concrete-900 px-3 py-1 rounded font-medium text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-concrete-50 p-6 rounded-lg border border-concrete-200 h-fit space-y-4">
                    <h4 className="text-lg font-bold text-industrial-navy border-b border-concrete-200 pb-2">Specifications</h4>
                    
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-safety-amber" />
                      <div>
                        <p className="text-xs text-concrete-800 uppercase font-bold">Budget</p>
                        <p className="font-semibold text-concrete-900">{selectedProject.specs.budget}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-safety-amber" />
                      <div>
                        <p className="text-xs text-concrete-800 uppercase font-bold">Duration</p>
                        <p className="font-semibold text-concrete-900">{selectedProject.specs.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-safety-amber shrink-0" />
                      <div>
                        <p className="text-xs text-concrete-800 uppercase font-bold">Materials</p>
                        <p className="font-semibold text-concrete-900 text-sm">{selectedProject.specs.materials}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
