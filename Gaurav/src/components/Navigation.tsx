import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { useTheme } from './ThemeProvider';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 3 }
    );
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kumar_Nishant_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="cursor-pointer group" 
              onClick={() => scrollToSection('home')}
              data-cursor="pointer"
            >
              <div className="font-mono text-sm tracking-wider">
                <span className="text-zinc-900 dark:text-zinc-100">GS</span>
                <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('work')}
                className="text-sm font-mono tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 relative group"
                data-cursor="pointer"
              >
                <span className="relative z-10">01. Work</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 dark:bg-zinc-100 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-mono tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 relative group"
                data-cursor="pointer"
              >
                <span className="relative z-10">02. About</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 dark:bg-zinc-100 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-mono tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 relative group"
                data-cursor="pointer"
              >
                <span className="relative z-10">03. Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-zinc-900 dark:bg-zinc-100 group-hover:w-full transition-all duration-300"></div>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                data-cursor="pointer"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={downloadResume}
                className="hidden md:flex items-center space-x-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-mono tracking-wide hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300"
                data-cursor="pointer"
              >
                <Download size={14} />
                <span>Resume</span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                data-cursor="pointer"
              >
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            <button
              onClick={() => scrollToSection('work')}
              className="text-xl font-mono tracking-wide text-zinc-900 dark:text-zinc-100 hover:opacity-60 transition-opacity duration-300"
              data-cursor="pointer"
            >
              01. Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-xl font-mono tracking-wide text-zinc-900 dark:text-zinc-100 hover:opacity-60 transition-opacity duration-300"
              data-cursor="pointer"
            >
              02. About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xl font-mono tracking-wide text-zinc-900 dark:text-zinc-100 hover:opacity-60 transition-opacity duration-300"
              data-cursor="pointer"
            >
              03. Contact
            </button>
            
            <button
              onClick={() => {
                downloadResume();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono tracking-wide"
              data-cursor="pointer"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;