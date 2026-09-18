import { personalInfo } from '../data';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-concrete-100 to-concrete-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-3/4"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-safety-amber/10 text-safety-amber font-semibold text-sm mb-6 border border-safety-amber/20">
            <span className="flex h-2 w-2 rounded-full bg-safety-amber animate-pulse"></span>
            Available for New Projects
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-concrete-900 tracking-tight leading-tight mb-6">
            Designing Resilient <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-navy to-concrete-800">Infrastructure</span> for a <br className="hidden sm:block"/>
            Sustainable Future.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-concrete-800 mb-8 max-w-2xl leading-relaxed">
            {personalInfo.summary}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="inline-flex items-center justify-center gap-2 bg-industrial-navy text-white px-8 py-3.5 rounded-md hover:bg-concrete-800 transition-colors shadow-lg font-medium">
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="inline-flex items-center justify-center gap-2 bg-white text-concrete-900 border border-concrete-200 px-8 py-3.5 rounded-md hover:border-safety-amber hover:text-safety-amber transition-colors shadow-sm font-medium">
              <Download className="w-5 h-5" />
              Download CV/Resume
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-concrete-200">
            {personalInfo.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl font-bold text-industrial-navy mb-1">{stat.value}</span>
                <span className="text-sm text-concrete-800 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
