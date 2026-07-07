import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock,
  Pause,
  Play,
  Volume2,
  VolumeX
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import heroVideo from '../assets/videos/hero-intro.mp4';
import resumePdf from '../assets/resume/Lokesh R.pdf';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Initially false, useEffect handles actual play state
  const [isMuted, setIsMuted] = useState(false); 
  const [isHireModalOpen, setIsHireModalOpen] = useState(false); 

  // Attempt to autoplay on mount and sync state
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay blocked by browser due to unmuted audio
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0; // Rewind if ended
        }
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        onEnded={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability if needed (optional) */}
      <div className="absolute inset-0 bg-black/10 sm:bg-transparent"></div>

      {/* Navbar overlay */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold tracking-tight">Lokesh R</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-gray-200 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-200 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-200 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-gray-200 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-gray-200 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-gray-200 transition-colors">Contact</a>
        </nav>
        <button 
          onClick={() => setIsHireModalOpen(true)}
          className="hidden md:block bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full font-medium transition-all"
        >
          Hire Me
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        {/* Social Icons (Desktop Left Side) */}
        <div className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-6">
          <a href="https://github.com/Lokesh0728" className="p-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lokesh015dev" className="p-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/lokeymr_cat?igsh=NGhsMGV4NW0wdjk5" className="p-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0 md:ml-32 max-w-2xl mt-12 md:mt-20 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-lg">
            Hi, I'm <span className="text-white">Lokesh,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 line-through decoration-transparent" style={{ WebkitTextStroke: '1px white' }}>
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 max-w-lg font-medium leading-relaxed drop-shadow-md border-t-4 md:border-t-0 md:border-l-4 border-white/50 pt-4 md:pt-0 pl-0 md:pl-4 bg-black/20 p-4 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl backdrop-blur-sm">
            I build modern, scalable web applications with React, Next.js, Node.js, APIs, and cloud-ready architecture.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center md:justify-start w-full">
            <a href="#projects" className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block text-center">
              View My Work
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-transparent border border-white/50 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full backdrop-blur-sm transition-all inline-block text-center">
              Contact Me
            </a>
            <a href={resumePdf} download="Lokesh_R_Resume.pdf" className="w-full sm:w-auto bg-transparent border border-white/50 hover:bg-white/10 text-white font-medium px-6 py-3.5 rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2 group cursor-pointer inline-flex">
              <Lock size={16} className="text-gray-300 group-hover:text-white transition-colors" />
              Download Resume
            </a>
          </div>

          {/* Mobile Social Icons */}
          <div className="flex md:hidden gap-6 mt-10">
            <a href="https://github.com/Lokesh0728" className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/lokesh015dev" className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <FaLinkedin size={22} />
            </a>
            <a href="https://www.instagram.com/lokeymr_cat?igsh=NGhsMGV4NW0wdjk5" className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons Container (Play/Pause & Mute/Unmute) */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-20 flex gap-3 md:gap-4">
        
        {/* Mute/Unmute Button */}
        <button 
          onClick={toggleMute}
          className="bg-gray-900/60 hover:bg-gray-800 backdrop-blur-md text-white p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center group border border-white/20"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 md:w-6 md:h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
          ) : (
            <Volume2 className="w-5 h-5 md:w-6 md:h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
          )}
          
          {/* Tooltip */}
          <span className="hidden md:block absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/70 px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-sm pointer-events-none">
            {isMuted ? "Unmute Audio" : "Mute Audio"}
          </span>
        </button>

        {/* Play/Pause Button */}
        <button 
          onClick={togglePlayPause}
          className="bg-red-600 hover:bg-red-700 text-white p-3 md:p-4 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-110 transition-all flex items-center justify-center group"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 md:w-7 md:h-7 fill-current" />
          ) : (
            <Play className="w-6 h-6 md:w-7 md:h-7 fill-current translate-x-0.5" />
          )}
          
          {/* Tooltip */}
          <span className="hidden md:block absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/70 px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-sm pointer-events-none">
            {isPlaying ? "Pause Intro" : "Play Intro"}
          </span>
        </button>
      </div>

      {/* Premium Luxury Hire Me Modal */}
      <AnimatePresence>
        {isHireModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setIsHireModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.15)]"
            >
              {/* Luxury Modal Ambient Glows */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/30 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="p-10 relative z-10">
                <button 
                  onClick={() => setIsHireModalOpen(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                
                <h3 className="text-3xl font-extrabold text-white mb-2">Let's Talk Business.</h3>
                <p className="text-gray-400 font-medium mb-8">Looking to hire a highly skilled Full Stack Developer? I'm currently open for new opportunities.</p>
                
                <div className="space-y-6">
                  {/* Direct Contact Links */}
                  <a href="mailto:lokeshrajesh002@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300">
                    <div className="p-3 bg-red-500/10 text-red-500 rounded-xl group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Send an Email</h4>
                      <p className="text-gray-400 text-sm">Expect a response within 24 hours.</p>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/lokesh015dev" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
                    <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                      <FaLinkedin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Connect on LinkedIn</h4>
                      <p className="text-gray-400 text-sm">Message me directly for quick inquiries.</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-gray-400">
                  <span>Available for remote work worldwide.</span>
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Available Now
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
