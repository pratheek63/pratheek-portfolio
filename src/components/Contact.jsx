import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sky-900/50 to-indigo-900/50 rounded-3xl p-8 md:p-16 border border-white/10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start a project?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a
              href="mailto:gowdapratheek388@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-sky-50 transition-colors"
            >
              <Mail size={20} /> gowdapratheek388@gmail.com
            </a>
            <a
              href="tel:+916362969145"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              <Phone size={20} /> +91 6362969145
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/pratheek-gowda3/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-2xl transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/pratheek63" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-2xl transition-colors">
              <Github size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact