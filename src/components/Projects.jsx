import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, BookOpen, Users } from 'lucide-react'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'E-Commerce Microservices',
      description: 'A distributed system using Spring Boot Microservices. Features independent deployment, Eureka Service Discovery, API Gateway routing, and database-per-service pattern.',
      icon: <ShoppingCart size={48} className="text-slate-500/50" />,
      tags: ['Java', 'Spring Cloud', 'Microservices', 'MySQL'],
      isMain: true,
      links: { demo: '#', github: '#' },
    },
    {
      title: 'Blog Application',
      description: 'RESTful Blog platform with layered architecture. Implements CRUD operations, Pagination, Sorting, and Global Exception Handling using Spring Boot & Hibernate.',
      icon: <BookOpen size={48} className="text-slate-500/50" />,
      tags: ['Spring Boot', 'JPA', 'REST API'],
      isMain: false,
      links: { demo: '#', github: '#' },
    },
    {
      title: 'Social Media App',
      description: 'Interactive frontend platform enabling users to connect, post, share, and comment. Built with a focus on responsive design and ReactJS components.',
      icon: <Users size={48} className="text-slate-500/50" />,
      tags: ['ReactJS', 'HTML/CSS', 'JavaScript'],
      isMain: false,
      links: { demo: '#', github: '#' },
    },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">Real-world applications built with modern tech stacks</p>
          </div>
          <a
            href="https://github.com/pratheek63"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors mt-4 md:mt-0"
          >
            View GitHub <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'perspective(1000px) rotateX(2deg) rotateY(2deg)' : 'none',
                transition: 'transform 0.3s ease',
              }}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700"
            >
              {project.isMain && (
                <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  MAIN PROJECT
                </div>
              )}
              
              <div className="h-48 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.links.demo} className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-sky-400 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.links.github} className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-sky-400 transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-700 text-xs rounded text-sky-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects