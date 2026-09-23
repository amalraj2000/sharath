import { experience } from '../data';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-concrete-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-concrete-900 mb-2">Professional Experience</h2>
          <div className="h-1 w-20 bg-safety-amber rounded"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-concrete-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-concrete-100">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="bg-industrial-navy p-3 rounded-xl shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-concrete-900 mb-0.5">{job.role}</h3>
                      <p className="text-industrial-navy font-semibold text-base">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:text-right">
                    {job.type === "Current" && (
                      <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Current
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-sm text-concrete-700 font-medium">
                      <Calendar className="w-4 h-4 text-safety-amber" />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-concrete-700 font-medium">
                      <MapPin className="w-4 h-4 text-safety-amber" />
                      {job.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="p-6">
                <ul className="space-y-2.5">
                  {job.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 text-concrete-800 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-safety-amber shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
