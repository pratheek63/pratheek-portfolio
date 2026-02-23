import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'System Monitoring Intern',
      company: 'WIINER Program',
      org: 'Rooman Technologies | IBM | Wadhwani Foundation | IIT Guwahati',
      points: ['Monitored system performance metrics', 'Supported cloud infrastructure management', 'Assisted in maintaining system stability'],
      align: 'left',
      color: 'bg-sky-500',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Varcons Technologies',
      org: 'Industry Experience',
      points: ['Worked on full-stack web development', 'Built and deployed web applications', 'Gained hands-on industry experience'],
      align: 'right',
      color: 'bg-indigo-500',
    },
  ]

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Experience & Internships
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-800" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:flex items-center justify-between ${exp.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`hidden md:block w-5/12 ${exp.align === 'right' ? 'text-right' : ''}`} />
              
              <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-4 border-slate-900 z-10`} />
              
              <div className={`ml-8 md:ml-0 md:w-5/12 bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-colors ${exp.align === 'right' ? 'md:text-right' : ''}`}>
                <span className={`${exp.color === 'bg-sky-500' ? 'text-sky-400' : 'text-indigo-400'} text-sm font-bold font-mono`}>
                  {exp.company}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                <p className="text-slate-400 text-sm mt-2 mb-4">{exp.org}</p>
                <ul className={`text-slate-400 text-sm space-y-2 ${exp.align === 'right' ? 'md:list-none' : 'list-disc list-inside'}`}>
                  {exp.points.map((point, i) => (
                    <li key={i} className={exp.align === 'right' ? "md:before:content-['•'] md:before:mr-2" : ''}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience