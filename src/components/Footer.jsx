import { HardHat } from 'lucide-react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-industrial-navy text-white pt-16 pb-8 border-t-4 border-safety-amber overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="text-safety-amber h-8 w-8" />
              <span className="font-bold text-xl tracking-tight">Sharath<span className="text-safety-amber">.PE</span></span>
            </div>
            <p className="text-concrete-200 text-sm mb-6 max-w-xs leading-relaxed">
              {personalInfo.headline}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 border-b border-concrete-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2">
              <li><motion.a whileHover={{ x: 5 }} href="#about" className="inline-block text-concrete-200 hover:text-safety-amber transition-colors text-sm">About</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#projects" className="inline-block text-concrete-200 hover:text-safety-amber transition-colors text-sm">Portfolio</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#skills" className="inline-block text-concrete-200 hover:text-safety-amber transition-colors text-sm">Skills</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#contact" className="inline-block text-concrete-200 hover:text-safety-amber transition-colors text-sm">Contact</motion.a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 border-b border-concrete-800 pb-2 inline-block">Professional Associations</h4>
            <ul className="space-y-2">
              <li className="text-concrete-200 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-amber"></span>
                American Society of Civil Engineers (ASCE)
              </li>
              <li className="text-concrete-200 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-amber"></span>
                National Society of Professional Engineers (NSPE)
              </li>
              <li className="text-concrete-200 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-amber"></span>
                U.S. Green Building Council (USGBC)
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-concrete-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-concrete-200 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="text-concrete-200 text-sm font-medium tracking-wide">
            Engineered with Precision & React
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
