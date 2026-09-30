import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenHireModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy: observe sections to highlight the active link
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for detection

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 ${isMobileMenuOpen ? 'z-50' : 'z-40'} transition-all duration-300
        ${isScrolled 
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3 sm:py-3.5' 
          : 'bg-transparent py-5 sm:py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center font-extrabold text-white text-base shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all">
            L
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
            Lokesh<span className="text-red-500">.</span>R
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/30 to-orange-500/30 border border-red-500/40"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA - Hire Me Button */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenHireModal}
            className="
              relative group overflow-hidden
              bg-white/10 hover:bg-white/20
              border border-white/20 hover:border-red-500/50
              backdrop-blur-md
              text-white text-sm font-semibold
              px-5 py-2 rounded-full
              transition-all duration-300
              shadow-[0_0_15px_rgba(0,0,0,0.5)]
              hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]
              hover:scale-105 active:scale-95
              flex items-center gap-2
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden p-2 rounded-xl bg-white/[0.06] border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-3 bg-[#0c0c0c]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`
                      px-4 py-3 rounded-2xl text-base font-medium flex items-center justify-between transition-all
                      ${isActive 
                        ? 'bg-gradient-to-r from-red-600/20 to-orange-500/20 text-white border border-red-500/30' 
                        : 'text-gray-300 hover:bg-white/[0.05] hover:text-white'
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenHireModal();
                  }}
                  className="
                    w-full py-3 rounded-2xl
                    bg-gradient-to-r from-red-600 to-orange-500
                    text-white font-semibold text-center
                    shadow-[0_0_20px_rgba(239,68,68,0.4)]
                    flex items-center justify-center gap-2
                  "
                >
                  <Sparkles size={16} />
                  <span>Hire Me</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
