import { personalInfo } from '../data';
import { Target, ShieldCheck, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-concrete-900 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-safety-amber rounded"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <h3 className="text-2xl font-semibold text-industrial-navy mb-4">Career Overview</h3>
            <p className="text-concrete-800 leading-relaxed mb-6">
              {personalInfo.about.overview}
            </p>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-concrete-50 p-6 rounded-lg border border-concrete-200 shadow-sm transition-all"
            >
              <h3 className="text-xl font-semibold text-industrial-navy mb-3">Engineering Philosophy</h3>
              <p className="text-concrete-800 leading-relaxed">
                {personalInfo.about.philosophy}
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6"
          >
            <motion.div variants={slideUp} whileHover={{ scale: 1.02 }} className="flex gap-4 p-6 bg-white border border-concrete-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-default">
              <div className="bg-safety-amber/10 p-3 rounded-full h-fit">
                <Target className="w-6 h-6 text-safety-amber" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-concrete-900 mb-2">Structural Integrity</h4>
                <p className="text-concrete-800">Prioritizing safety and resilience in every design, ensuring structures exceed code requirements.</p>
              </div>
            </motion.div>
            
            <motion.div variants={slideUp} whileHover={{ scale: 1.02 }} className="flex gap-4 p-6 bg-white border border-concrete-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-default">
              <div className="bg-industrial-navy/10 p-3 rounded-full h-fit">
                <ShieldCheck className="w-6 h-6 text-industrial-navy" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-concrete-900 mb-2">Safety Compliance</h4>
                <p className="text-concrete-800">Zero-compromise approach to site safety, maintaining immaculate incident records across projects.</p>
              </div>
            </motion.div>
            
            <motion.div variants={slideUp} whileHover={{ scale: 1.02 }} className="flex gap-4 p-6 bg-white border border-concrete-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-default">
              <div className="bg-green-100 p-3 rounded-full h-fit">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-concrete-900 mb-2">Sustainability</h4>
                <p className="text-concrete-800">Integrating eco-friendly materials and energy-efficient designs to minimize environmental impact.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
