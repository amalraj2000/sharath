import { personalInfo } from '../data';
import { ArrowRight, Phone, Mail, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-concrete-100 via-concrete-50 to-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-safety-amber/10 text-safety-amber font-semibold text-sm mb-6 border border-safety-amber/20 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-safety-amber animate-pulse"></span>
              Diploma in Civil Engineering
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-concrete-900 tracking-tight leading-tight mb-4">
              Sharath Kumar V
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-industrial-navy to-concrete-800 mb-6">
              {personalInfo.title}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-concrete-800 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.summary}
            </motion.p>

            {/* Core Tool Badges */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-concrete-700 mr-2">Core Software:</span>
              {['SketchUp', 'Lumion', 'Photoshop', 'AutoCAD'].map((skill, idx) => (
                <span key={idx} className="bg-white border border-concrete-200 text-industrial-navy px-3 py-1 rounded-md text-sm font-semibold shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-safety-amber" />
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#projects" className="inline-flex items-center justify-center gap-2 bg-industrial-navy text-white px-7 py-3.5 rounded-lg hover:bg-concrete-800 transition-all shadow-md font-medium">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={`tel:${personalInfo.contact.phone}`} className="inline-flex items-center justify-center gap-2 bg-white text-concrete-900 border border-concrete-300 px-6 py-3.5 rounded-lg hover:border-safety-amber hover:text-safety-amber transition-all shadow-sm font-medium">
                <Phone className="w-4 h-4 text-safety-amber" />
                {personalInfo.contact.phone}
              </motion.a>
              
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={`mailto:${personalInfo.contact.email}`} className="inline-flex items-center justify-center gap-2 bg-white text-concrete-900 border border-concrete-300 px-6 py-3.5 rounded-lg hover:border-safety-amber hover:text-safety-amber transition-all shadow-sm font-medium">
                <Mail className="w-4 h-4 text-safety-amber" />
                Email Me
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-6 border-t border-concrete-200">
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-industrial-navy mb-0.5">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-concrete-700 font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo & Badge Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Backdrop Card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-safety-amber/20 to-industrial-navy/20 rounded-2xl blur-lg opacity-75 transform -rotate-1"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-concrete-200 overflow-hidden">
                <img 
                  src={personalInfo.photo} 
                  alt={personalInfo.name} 
                  className="w-full h-[440px] object-cover rounded-xl shadow-inner"
                />
                
                {/* Floating Badge 1 */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-lg border border-concrete-200 flex items-center gap-3">
                  <div className="bg-safety-amber/10 p-2 rounded-md">
                    <GraduationCap className="w-5 h-5 text-safety-amber" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-concrete-900">Diploma in Civil Eng.</p>
                    <p className="text-[11px] text-concrete-700 font-medium">Civil Engineering Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

