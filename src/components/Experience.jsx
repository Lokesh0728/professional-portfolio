import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer (Paid Intern)",
      company: "Xorticantechlogic",
      period: "May 2026 – Present",
      type: "Work",
      icon: <Briefcase size={20} />,
      color: "from-green-500 to-emerald-400",
      iconBg: "bg-green-500/20 text-green-400 border-green-500/30",
      description: "Currently working as a Frontend Developer, contributing to modern web applications, building interactive user interfaces, and ensuring responsive, high-performance designs.",
      highlights: [
        "Developing scalable frontend architectures",
        "Collaborating on real-world client deliverables",
        "Optimizing UI/UX with modern CSS frameworks"
      ]
    },
    {
      role: "MERN Stack Developer Intern (Unpaid)",
      company: "Xplore Intellects Pvt Ltd",
      period: "Jan 2026 – Apr 2026 (3 Months)",
      type: "Internship",
      icon: <Briefcase size={20} />,
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      description: "Worked on real-time client projects focusing on seamless frontend experiences and robust backend connectivity.",
      highlights: [
        "Developed responsive and animated UI components using Next.js & React",
        "Collaborated with the team to build scalable web applications",
        "Gained hands-on experience in API integration and Git workflows"
      ]
    },
    {
      role: "MERN Stack Development Certification",
      company: "KGiSL Micro College",
      period: "June 2025 – Dec 2025",
      type: "Certification",
      icon: <Award size={20} />,
      color: "from-blue-500 to-cyan-400",
      iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      description: "Completed an intensive certification program focusing on the complete MERN stack ecosystem, preparing for production-grade full-stack development.",
      highlights: [
        "Mastered MongoDB, Express.js, React.js, and Node.js",
        "Built dynamic, responsive web applications from scratch",
        "Learned state management, API design, and deployment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 w-full bg-black text-white relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-red-500"></span>
            <h2 className="text-red-500 font-semibold tracking-wider uppercase text-sm">Journey</h2>
            <span className="h-px w-12 bg-red-500"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Experience</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            My career path, internships, and educational milestones that shaped my development expertise.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-red-500/20 before:via-orange-500/20 before:to-transparent">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0`}
            >
              
              {/* Timeline Icon */}
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full border-4 border-black 
                absolute left-0 md:left-1/2 -translate-x-1/2 shadow shrink-0 z-10 
                group-hover:scale-110 transition-transform duration-300
                ${exp.iconBg}
              `}>
                {exp.icon}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                
                {/* Subtle gradient hover effect inside card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 relative z-10">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${exp.color} text-black`}>
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {exp.role}
                  </h4>
                  <h5 className="text-lg font-medium text-gray-400 mb-6 flex items-center gap-2">
                    {exp.company}
                  </h5>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <ChevronRight className="shrink-0 mt-0.5 text-gray-600 group-hover:text-red-400 transition-colors" size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
