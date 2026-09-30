import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const HireModal = ({ isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.2)]"
          >
            {/* Luxury Modal Ambient Glows */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="p-8 sm:p-10 relative z-10">
              <button 
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Let's Talk Business.</h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base mb-8">
                Looking to hire a highly skilled Full Stack Developer? I'm currently open for new opportunities.
              </p>
              
              <div className="space-y-4 sm:space-y-5">
                {/* Direct Contact Links */}
                <a 
                  href="mailto:lokeshrajesh002@gmail.com" 
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300"
                >
                  <div className="p-3 bg-red-500/10 text-red-500 rounded-xl group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg">Send an Email</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">lokeshrajesh002@gmail.com • Quick response</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/lokesh015dev" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                    <FaLinkedin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg">Connect on LinkedIn</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Message me directly for inquiries</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-gray-400">
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
  );
};

export default HireModal;
