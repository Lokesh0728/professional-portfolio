import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-400 py-12 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-black tracking-tighter text-white mb-2">
            Lokesh<span className="text-red-500">.</span>
          </span>
          <p className="text-sm font-medium">
            Building digital experiences that matter.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/Lokesh0728" 
            target="_blank" 
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/lokesh015dev" 
            target="_blank" 
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/lokeymr_cat?igsh=NGhsMGV4NW0wdjk5" 
            target="_blank" 
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-end text-sm">
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Lokesh
          </p>
          <p className="mt-1 opacity-70">
            &copy; {currentYear} All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
