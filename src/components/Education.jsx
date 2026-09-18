import { education, certifications } from '../data';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-20 bg-concrete-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-concrete-900 mb-2">Education & Certifications</h2>
          <div className="h-1 w-20 bg-safety-amber rounded"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-industrial-navy p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-industrial-navy">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-concrete-200">
              {education.map((edu, index) => (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  key={index} 
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-safety-amber text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </motion.div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-lg border border-concrete-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-concrete-900">{edu.degree}</h4>
                    </div>
                    <p className="text-industrial-navy font-medium text-sm mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-concrete-100">
                      <span className="text-xs font-semibold text-safety-amber bg-safety-amber/10 px-2 py-1 rounded">{edu.year}</span>
                      <span className="text-xs text-concrete-800 font-medium italic">{edu.honors}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-industrial-navy p-2 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-industrial-navy">Licenses & Certifications</h3>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  key={cert.id} 
                  className="bg-white p-6 rounded-lg border border-concrete-200 shadow-sm flex items-center gap-4 hover:border-safety-amber transition-colors group cursor-default"
                >
                  <div className="bg-concrete-50 p-4 rounded-full shrink-0 group-hover:bg-safety-amber/10 transition-colors">
                    <Award className="w-6 h-6 text-safety-amber" />
                  </div>
                  <div>
                    <h4 className="font-bold text-concrete-900 text-lg">{cert.name}</h4>
                    <p className="text-concrete-800 text-sm mt-1 font-medium">Acquired: {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
