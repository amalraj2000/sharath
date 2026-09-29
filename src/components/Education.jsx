import { education, certifications } from '../data';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Education Timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-industrial-navy p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-industrial-navy">Education</h3>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-concrete-200" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-14"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 top-4 w-5 h-5 rounded-full bg-safety-amber border-4 border-white shadow-md z-10" />

                    <motion.div
                      whileHover={{ x: 4 }}
                      className="bg-concrete-50 border border-concrete-200 rounded-xl p-5 hover:border-safety-amber/50 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="text-base font-bold text-concrete-900 leading-tight">{edu.degree}</h4>
                          <p className="text-industrial-navy font-semibold text-sm mt-0.5">{edu.institution}</p>
                        </div>
                        <span className="shrink-0 text-xs font-bold bg-safety-amber/10 text-safety-amber border border-safety-amber/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {edu.honors}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 pt-3 border-t border-concrete-200">
                        <MapPin className="w-3.5 h-3.5 text-safety-amber shrink-0" />
                        <span className="text-xs text-concrete-700 font-medium">{edu.location}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Certifications ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-industrial-navy p-2 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-industrial-navy">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-concrete-50 border border-concrete-200 rounded-xl p-5 flex items-center gap-4 hover:border-safety-amber transition-colors group cursor-default shadow-sm hover:shadow-md"
                >
                  <div className="bg-white p-3.5 rounded-xl border border-concrete-200 shrink-0 group-hover:bg-safety-amber/10 transition-colors">
                    <Award className="w-6 h-6 text-safety-amber" />
                  </div>
                  <div>
                    <h4 className="font-bold text-concrete-900">{cert.name}</h4>
                    <p className="text-concrete-700 text-sm mt-0.5 font-medium">{cert.year}</p>
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
