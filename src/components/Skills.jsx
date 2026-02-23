import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Laptop, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} className="text-sky-500" />,
      title: 'Languages',
      skills: [
        { name: 'Java', icon: '☕' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'JavaScript', icon: '📜' },
      ],
    },
    {
      icon: <Server size={32} className="text-green-500" />,
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'Spring Cloud', icon: '☁️' },
        { name: 'Microservices', icon: '🏗️' },
        { name: 'Hibernate/JPA', icon: '🔄' },
      ],
    },
    {
      icon: <Laptop size={32} className="text-purple-500" />,
      title: 'Frontend',
      skills: [
        { name: 'ReactJS', icon: '⚛️' },
        { name: 'HTML5', icon: '📄' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'Bootstrap', icon: '🅱️' },
      ],
    },
    {
      icon: <Wrench size={32} className="text-yellow-500" />,
      title: 'Tools & DB',
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'Maven', icon: '📐' },
        { name: 'Postman', icon: '🚀' },
        { name: 'MySQL', icon: '🐬' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-400">Tools and technologies I use to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-sky-500/30 transition-all hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2 text-slate-400">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2">
                    <span>{skill.icon}</span> {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills