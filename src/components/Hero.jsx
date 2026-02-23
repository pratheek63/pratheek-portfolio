import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [delta, setDelta] = useState(100)

  const toRotate = ['Full-Stack Developer', 'Java Specialist', 'Microservices Architect', 'React Enthusiast']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(50)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(100)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-image-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-mono"
        >
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-white mb-2">Pratheek H.S</span>
          <span className="text-gradient font-mono text-3xl md:text-5xl lg:text-6xl block mt-4 h-16">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Building scalable microservices and dynamic web applications using modern Java technologies. Based in Bidadi, Karnataka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            View Projects
          </a>
          <a
            href="https://github.com/pratheek63"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-700 hover:border-sky-500 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <Github size={20} /> GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center gap-6 text-slate-400"
        >
          <a href="https://www.linkedin.com/in/pratheek-gowda3/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors text-2xl">
            <Linkedin size={28} />
          </a>
          <a href="mailto:gowdapratheek388@gmail.com" className="hover:text-sky-400 transition-colors text-2xl">
            <Mail size={28} />
          </a>
          <a href="tel:+916362969145" className="hover:text-sky-400 transition-colors text-2xl">
            <span className="text-2xl">📞</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}

export default Hero