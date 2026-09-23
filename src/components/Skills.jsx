import { skills } from '../data';
import { PenTool, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-concrete-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-concrete-900 mb-2">Skills & Competencies</h2>
          <div className="h-1 w-20 bg-safety-amber rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Software Proficiency */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-concrete-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-industrial-navy p-2 rounded-lg">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-industrial-navy">Software Proficiency</h3>
            </div>

            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-semibold text-concrete-900">{skill.name}</span>
                    <span className="text-concrete-700 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-concrete-100 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
                      className="bg-gradient-to-r from-safety-amber to-safety-amber/70 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Domain & Field Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-concrete-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-industrial-navy p-2 rounded-lg">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-industrial-navy">Field & Domain Skills</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-3"
            >
              {skills.domain.map((skill, index) => (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  key={index}
                  className="flex items-center gap-3 p-3 bg-concrete-50 rounded-lg border border-concrete-200 hover:border-safety-amber/50 transition-all cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-safety-amber shrink-0"></div>
                  <span className="font-medium text-concrete-900 text-sm">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
