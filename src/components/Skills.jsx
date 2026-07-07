import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  CheckCircle2, 
  Code2, 
  Terminal, 
  Database,
  Cloud,
  Box,
  Cpu,
  BookOpen,
  Server
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaFigma, 
  FaDocker, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiVercel, 
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';

const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, to, from, duration]);

  return (
    <span ref={nodeRef} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
      {count}{suffix}
    </span>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "React", level: 90, icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-white" /> },
    { name: "JavaScript", level: 90, icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Tailwind", level: 95, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "HTML/CSS", level: 95, icon: <SiHtml5 className="text-[#E34F26]" /> },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", level: 85, icon: <SiExpress className="text-white" /> },
    { name: "REST APIs", level: 90, icon: <Cloud className="text-orange-400" /> },
    { name: "JWT", level: 80, icon: <LockIcon /> },
  ];

  function LockIcon() {
    return (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    );
  }

  const workWith = [
    "Responsive Web Design",
    "Full Stack Development",
    "REST API Integration",
    "Authentication",
    "Database Design",
    "Performance Optimization",
    "Git Collaboration",
    "Deployment"
  ];

  const tools = [
    { name: "React", icon: <FaReact />, color: "hover:shadow-[0_0_20px_#61DAFB] hover:text-[#61DAFB]" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "hover:shadow-[0_0_20px_#ffffff] hover:text-white" },
    { name: "Node", icon: <FaNodeJs />, color: "hover:shadow-[0_0_20px_#339933] hover:text-[#339933]" },
    { name: "MongoDB", icon: <SiMongodb />, color: "hover:shadow-[0_0_20px_#47A248] hover:text-[#47A248]" },
    { name: "Git", icon: <BiGitBranch />, color: "hover:shadow-[0_0_20px_#F05032] hover:text-[#F05032]" },
    { name: "GitHub", icon: <FaGithub />, color: "hover:shadow-[0_0_20px_#ffffff] hover:text-white" },
    { name: "VS Code", icon: <VscVscode />, color: "hover:shadow-[0_0_20px_#007ACC] hover:text-[#007ACC]" },
    { name: "Postman", icon: <SiPostman />, color: "hover:shadow-[0_0_20px_#FF6C37] hover:text-[#FF6C37]" },
    { name: "Figma", icon: <FaFigma />, color: "hover:shadow-[0_0_20px_#F24E1E] hover:text-[#F24E1E]" },
    { name: "Vercel", icon: <SiVercel />, color: "hover:shadow-[0_0_20px_#ffffff] hover:text-white" },
  ];

  const marqueeItems = [
    "React", "Next.js", "JavaScript", "Tailwind", "Node.js", 
    "Express", "MongoDB", "Git", "GitHub", "VS Code", "Postman"
  ];

  return (
    <section id="skills" className="py-24 w-full bg-black text-white relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 3. Tech Stack Marquee (Top) */}
      <div className="w-full flex overflow-hidden whitespace-nowrap bg-white/5 py-4 border-y border-white/10 mb-20 backdrop-blur-sm relative z-10">
        <div className="flex animate-marquee min-w-max">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="text-xl md:text-2xl font-black text-gray-400 uppercase tracking-widest">{item}</span>
              <span className="ml-12 text-red-500 text-xl">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-red-500"></span>
            <h2 className="text-red-500 font-semibold tracking-wider uppercase text-sm">My Arsenal</h2>
            <span className="h-px w-12 bg-red-500"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Expertise</span>
          </h3>
        </motion.div>

        {/* 5. Experience Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: "Projects Built", to: 20, suffix: "+" },
            { label: "Technologies", to: 10, suffix: "+" },
            { label: "Months Internship", to: 4, suffix: "" },
            { label: "Responsive Designs", to: 100, suffix: "%" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center"
            >
              <Counter to={stat.to} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Skills Cards & Checklists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* 2. Skill Categories (Left Side - 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Frontend Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Code2 size={150} />
              </div>
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Code2 className="text-red-500" /> Frontend Development
              </h4>
              <div className="space-y-6">
                {frontendSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2 font-medium text-gray-200">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-orange-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                        className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Server size={150} />
              </div>
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Server className="text-orange-500" /> Backend Development
              </h4>
              <div className="space-y-6">
                {backendSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2 font-medium text-gray-200">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-red-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                        className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - 5 cols */}
          <div className="lg:col-span-5 space-y-8 flex flex-col">
            
            {/* 4. What I Work With */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex-1"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Terminal className="text-red-500" /> What I Work With
              </h4>
              <ul className="space-y-4">
                {workWith.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 7. Learning Now */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-gradient-to-br from-red-600/10 to-orange-500/10 border-red-500/20"
            >
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-orange-500" /> Currently Exploring
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <FaAws className="text-[#FF9900] text-lg" /> AWS
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <FaDocker className="text-[#2496ED] text-lg" /> Docker
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <SiTypescript className="text-[#3178C6] text-lg" /> TypeScript
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Cpu className="text-red-400" size={18} /> System Design
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 6. Tool Ecosystem */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-2xl font-bold mb-10">Tool Ecosystem</h4>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`
                  w-16 h-16 md:w-20 md:h-20 rounded-full glass-card flex items-center justify-center text-3xl md:text-4xl text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:-translate-y-2 relative group cursor-pointer
                  ${tool.color}
                `}
              >
                {tool.icon}
                {/* Tooltip */}
                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-3 py-1 rounded text-xs font-bold text-white whitespace-nowrap pointer-events-none">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
