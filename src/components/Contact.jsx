import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Network } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-concrete-900 mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-safety-amber rounded"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-industrial-navy mb-6">Contact Information</motion.h3>
            <motion.p variants={itemVariants} className="text-concrete-800 mb-8 leading-relaxed">
              Open to discussing architectural design projects, 3D visualization work, site management roles, or civil engineering opportunities in Kerala and beyond.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div variants={itemVariants} whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="bg-concrete-50 p-3 rounded-lg text-safety-amber group-hover:bg-safety-amber group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-concrete-900">Email</h4>
                  <a href={`mailto:${personalInfo.contact.email}`} className="text-concrete-800 hover:text-safety-amber transition-colors">
                    {personalInfo.contact.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="bg-concrete-50 p-3 rounded-lg text-safety-amber group-hover:bg-safety-amber group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-concrete-900">Phone</h4>
                  <a href={`tel:${personalInfo.contact.phone}`} className="text-concrete-800 hover:text-safety-amber transition-colors">
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="bg-concrete-50 p-3 rounded-lg text-safety-amber group-hover:bg-safety-amber group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-concrete-900">Location</h4>
                  <p className="text-concrete-800">{personalInfo.contact.location}</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="bg-concrete-50 p-3 rounded-lg text-safety-amber group-hover:bg-safety-amber group-hover:text-white transition-colors">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-concrete-900">LinkedIn</h4>
                  <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-concrete-800 hover:text-safety-amber transition-colors">
                    {personalInfo.contact.linkedin}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-concrete-50 p-8 rounded-xl border border-concrete-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-safety-amber/5 rounded-bl-full pointer-events-none"></div>
            
            <h3 className="text-2xl font-semibold text-industrial-navy mb-6 relative z-10">Send a Message</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-concrete-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-concrete-200 focus:outline-none focus:ring-2 focus:ring-safety-amber focus:border-transparent transition-shadow bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-concrete-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-concrete-200 focus:outline-none focus:ring-2 focus:ring-safety-amber focus:border-transparent transition-shadow bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-concrete-900 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-md border border-concrete-200 focus:outline-none focus:ring-2 focus:ring-safety-amber focus:border-transparent transition-shadow bg-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-concrete-900 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-md border border-concrete-200 focus:outline-none focus:ring-2 focus:ring-safety-amber focus:border-transparent transition-shadow bg-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-industrial-navy text-white font-semibold py-4 rounded-md hover:bg-concrete-800 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
