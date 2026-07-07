import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  Code2, 
  Server, 
  CheckCircle,
  Briefcase
} from 'lucide-react';

const About = () => {
  const highlights = [
    "Engineered secure, role-based authentication systems using JWT and Node.js",
    "Transformed intricate Figma designs into pixel-perfect, interactive user interfaces",
    "Developed scalable, real-time client projects as a MERN Stack Developer Intern",
    "Architected full-stack platforms utilizing MongoDB and REST API integrations",
    "Optimized application performance and component reusability within Next.js environments",
    "Leveraged Framer Motion and modern CSS to craft fluid, engaging web animations"
  ];

  const education = [
    {
      degree: "MERN Stack Development",
      institution: "KGiSL Micro College",
      period: "June 2025 - Dec 2025",
      type: "Certification"
    },
    {
      degree: "B.Sc Computer Science",
      institution: "Sri Ramakrishna Mission Vidlaya College Of Arts And Science",
      period: "2022 - 2025",
      type: "Degree"
    }
  ];

  return (
    <section id="about" className="py-24 w-full bg-black text-white overflow-hidden relative">
      {/* Background ambient glows */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-red-500"></span>
            <h2 className="text-red-500 font-semibold tracking-wider uppercase text-sm">About Me</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Digital Experiences</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Full-Stack Developer specializing in high-performance web applications and interactive user interfaces.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main About Text (Left Side - 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                As a MERN Stack Developer, I specialize in translating complex design concepts into highly interactive, scalable web applications. My approach focuses on bridging the gap between pixel-perfect aesthetics and robust backend architecture. During my tenure at Xplore Intellects, I engineered responsive, animated UI components and collaborated on real-time client projects, solidifying my expertise in Next.js, React, and seamless API integration.
              </p>
              <p>
                I thrive on solving architectural challenges and building intuitive user experiences, whether it involves developing secure role-based authentication systems like my HireHub job portal or crafting high-performance, dynamic interfaces using Tailwind CSS and Framer Motion for e-commerce and logistics platforms. Writing clean, maintainable code is central to my workflow, ensuring that every application I build is both accessible and designed to scale.
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="text-red-500" /> Professional Highlights
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-orange-500 mt-1 shrink-0" size={18} />
                    <span className="text-gray-300 text-sm leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Info Cards (Right Side - 5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Location Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/[0.07] transition-colors">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <MapPin size={120} />
              </div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-red-500/20 text-red-500 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Location</h4>
                  <p className="text-xl font-bold text-white">Coimbatore, India</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 relative z-10">
                Driven by continuous learning and the satisfaction of transforming Figma prototypes into fluid, cloud-ready digital products.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-500/20 text-orange-500 rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <h4 className="text-xl font-bold">Education Journey</h4>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Timeline dot */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-black bg-orange-500 absolute left-0 md:left-1/2 -translate-x-1/2 shadow shrink-0 z-10 group-hover:scale-125 transition-transform duration-300" />
                    
                    {/* Content Card */}
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] ml-10 md:ml-0 p-5 rounded-2xl bg-black/40 border border-white/5 group-hover:border-white/20 transition-colors">
                      <div className="text-xs font-bold text-orange-400 mb-1">{edu.period}</div>
                      <h5 className="font-bold text-white text-base mb-1 leading-snug">{edu.degree}</h5>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-red-600/20 to-orange-500/20 border border-red-500/30 backdrop-blur-sm">
              <p className="text-lg font-medium text-white mb-4 leading-snug">
                Let’s collaborate to engineer scalable, cutting-edge web applications that leave a lasting impact.
              </p>
              <button className="flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors group">
                Connect with me 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
