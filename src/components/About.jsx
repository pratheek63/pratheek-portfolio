import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl opacity-30 blur-lg" />
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-sm text-slate-300 space-y-4">
                  <p><span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span> {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">constructor</span>() {'{'}</p>
                  <p className="pl-8">this.name = <span className="text-green-400">'Pratheek H.S'</span>;</p>
                  <p className="pl-8">this.role = <span className="text-green-400">'Full-Stack Developer'</span>;</p>
                  <p className="pl-8">this.location = <span className="text-green-400">'Bidadi, Karnataka'</span>;</p>
                  <p className="pl-8">this.cgpa = <span className="text-orange-400">7.7</span>;</p>
                  <p className="pl-4">{'}'}</p>
                  <p className="pl-4"><span className="text-purple-400">sayHi</span>() {'{'}</p>
                  <p className="pl-8">console.log(<span className="text-green-400">'Thanks for visiting!'</span>);</p>
                  <p className="pl-4">{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a passionate <span className="text-sky-400 font-semibold">Full-Stack Developer</span> specializing in Java, Spring Boot, Microservices, and ReactJS. I enjoy the challenge of building robust backend systems and designing seamless, responsive frontend applications.
              </p>
              <p>
                My journey involves hands-on experience with <span className="text-sky-400">RESTful APIs</span>, layered architecture, and distributed microservices using Spring Cloud components.
              </p>
              <div className="flex items-center gap-4 mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <GraduationCap size={40} className="text-sky-500" />
                <div>
                  <h4 className="text-white font-bold">B.E in Computer Science</h4>
                  <p className="text-sm text-slate-400">Jnana Vikas Institute of Technology • Expected July 2025</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About