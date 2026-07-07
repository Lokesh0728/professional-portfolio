import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "HireHub",
      type: "Full Stack Platform",
      description: "A comprehensive job portal featuring role-based authentication for candidates and recruiters. Built with secure JWT sessions, protected middleware routes, and a dedicated dashboard for managing job postings efficiently.",
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      liveLink: "https://hire-hub-seven-beige.vercel.app/login",
      github: "https://github.com/Lokesh0728/HireHub", 
      featured: true
    },
    {
      title: "GLOshipping",
      type: "Logistics Application",
      description: "Developed responsive service pages featuring advanced UI animations and scalable architecture. Converted complex Figma designs into pixel-perfect, highly interactive user interfaces.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "",
      github: "#",
      featured: true
    },
    {
      title: "Custom Cigar & Tobacco",
      type: "Brand Landing Page",
      description: "A premium, sophisticated web presence for a custom cigar and tobacco blend lounge. Focuses on elegant typography, smooth layouts, and a refined digital brand presentation.",
      tech: ["HTML5", "JavaScript", "Tailwind CSS"],
      liveLink: "https://custom-cigar-and-tobbaco.vercel.app/",
      github: "https://github.com/Lokesh0728/custom-cigar-and-tobbaco",
      featured: false
    },
    {
      title: "Digital Marriage Invitation",
      type: "Personal Platform",
      description: "A beautifully crafted, modern digital marriage invitation platform. Designed to handle guest data dynamically while providing a flawless, responsive aesthetic across all devices.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://marriageinvitation-main-pxa8.vercel.app/",
      github: "https://github.com/Lokesh0728/marriageinvitation.main",
      featured: false
    },
    {
      title: "Trending Jewellers",
      type: "E-commerce Website",
      description: "Designed dynamic product pages with seamless REST API integrations for real-time filtering. Built interactive UI features including complex image hovers, dynamic sliders, and tabbed interfaces.",
      tech: ["React", "REST APIs", "Tailwind CSS"],
      liveLink: "",
      github: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 w-full bg-black text-white relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-red-500"></span>
            <h2 className="text-red-500 font-semibold tracking-wider uppercase text-sm">Portfolio</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Projects</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            A selection of my best work, spanning full-stack platforms, responsive web applications, and interactive user interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`
                group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl 
                bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 
                transition-all duration-500 overflow-hidden
                ${idx === 0 ? 'lg:col-span-2 lg:flex-row lg:items-center gap-12' : ''}
              `}
            >
              {/* Card Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/10 transition-colors duration-500 pointer-events-none" />

              {/* Top/Left Content */}
              <div className={`relative z-10 flex flex-col ${idx === 0 ? 'lg:w-1/2' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-red-400 text-sm font-bold tracking-widest uppercase mb-2 block">
                      {project.type}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>
                  <div className="p-3 bg-white/5 rounded-full text-gray-400 group-hover:text-white group-hover:bg-red-500/20 transition-all duration-300">
                    <Folder size={24} />
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Bottom/Right Content */}
              <div className={`relative z-10 flex flex-col justify-end ${idx === 0 ? 'lg:w-1/2 lg:pl-8 lg:border-l border-white/10' : 'mt-auto'}`}>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 pt-6 border-t border-white/10 mt-auto">
                  {project.liveLink ? (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-white hover:text-red-400 transition-colors group/link"
                    >
                      Live Preview 
                      <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-sm font-bold text-gray-600 flex items-center gap-2 cursor-not-allowed">
                      Offline / Confidential
                    </span>
                  )}
                  
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={18} />
                    Source
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href='https://github.com/Lokesh0728' className="px-8 py-4 bg-transparent border border-red-500/50 hover:bg-red-500/10 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            View My GitHub Profile
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
