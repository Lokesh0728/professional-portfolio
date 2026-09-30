import React, { useRef, useState, useEffect } from 'react';
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

const Hero = ({ onOpenHireModal }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Initially false, useEffect handles actual play state
  const [isMuted, setIsMuted] = useState(false); 

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
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black font-sans text-white">
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

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/15 sm:bg-black/10"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        {/* Social Icons (Desktop Left Side) */}
        <div className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-6">
          <a href="https://github.com/Lokesh0728" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="p-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lokesh015dev" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="p-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/lokeymr_cat?igsh=NGhsMGV4NW0wdjk5" target="_blank" rel="noreferrer" aria-label="Instagram profile" className="p-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all">
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
            <a href="https://github.com/Lokesh0728" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/lokesh015dev" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <FaLinkedin size={22} />
            </a>
            <a href="https://www.instagram.com/lokeymr_cat?igsh=NGhsMGV4NW0wdjk5" target="_blank" rel="noreferrer" aria-label="Instagram profile" className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons Container (Play/Pause & Mute/Unmute)
          Positioned left of the ChatWidget launcher to prevent any overlap */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-auto md:right-28 lg:right-32 z-20 flex gap-3 md:gap-4">
        
        {/* Mute/Unmute Button */}
        <button 
          onClick={toggleMute}
          className="bg-gray-900/60 hover:bg-gray-800 backdrop-blur-md text-white p-3 md:p-3.5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center group border border-white/20"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 md:w-5 md:h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
          ) : (
            <Volume2 className="w-5 h-5 md:w-5 md:h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
          )}
          
          {/* Tooltip */}
          <span className="hidden md:block absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm pointer-events-none">
            {isMuted ? "Unmute Audio" : "Mute Audio"}
          </span>
        </button>

        {/* Play/Pause Button */}
        <button 
          onClick={togglePlayPause}
          className="bg-red-600 hover:bg-red-700 text-white p-3 md:p-3.5 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-110 transition-all flex items-center justify-center group"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 md:w-5 md:h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 md:w-5 md:h-5 fill-current translate-x-0.5" />
          )}
          
          {/* Tooltip */}
          <span className="hidden md:block absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm pointer-events-none">
            {isPlaying ? "Pause Intro" : "Play Intro"}
          </span>
        </button>
      </div>

    </section>
  );
};

export default Hero;
