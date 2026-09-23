import { personalInfo, competencies } from '../data';
import { Cpu, HardHat, BarChart2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryIcons = {
  "Engineering Software": <Cpu className="w-5 h-5 text-safety-amber" />,
  "Site Operations": <HardHat className="w-5 h-5 text-safety-amber" />,
  "Project Management": <BarChart2 className="w-5 h-5 text-safety-amber" />,
  "Standards & Codes": <BookOpen className="w-5 h-5 text-safety-amber" />
};

export default function About() {
  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
          >
            <h3 className="text-2xl font-semibold text-industrial-navy mb-4">Professional Overview</h3>
            <p className="text-concrete-800 leading-relaxed mb-6">
              {personalInfo.about.overview}
            </p>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-concrete-50 p-6 rounded-xl border border-concrete-200 shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-industrial-navy mb-2">My Approach</h3>
              <p className="text-concrete-800 leading-relaxed text-sm">
                {personalInfo.about.philosophy}
              </p>
            </motion.div>

            {/* Key Achievement Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Material Delay Reduction", value: "20%" },
                { label: "Material Waste Saved", value: "12%" },
                { label: "Team Managed", value: "120+ Labour" },
                { label: "Project Value", value: "₹45 Cr" }
              ].map((badge, idx) => (
                <div key={idx} className="bg-industrial-navy/5 border border-industrial-navy/20 rounded-lg px-4 py-2.5 text-center">
                  <p className="text-xl font-extrabold text-industrial-navy">{badge.value}</p>
                  <p className="text-xs text-concrete-700 font-medium mt-0.5">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Competencies Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-5"
          >
            {competencies.map((comp, idx) => (
              <motion.div
                key={idx}
                variants={slideUp}
                whileHover={{ scale: 1.01, x: 4 }}
                className="bg-white border border-concrete-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-safety-amber/10 p-2 rounded-lg">
                    {categoryIcons[comp.category]}
                  </div>
                  <h4 className="font-bold text-concrete-900 text-base">{comp.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {comp.items.map((item, i) => (
                    <span key={i} className="bg-concrete-50 border border-concrete-200 text-concrete-800 text-xs font-medium px-2.5 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
