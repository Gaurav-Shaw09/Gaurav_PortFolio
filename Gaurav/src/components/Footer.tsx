import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current?.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/K-Nishant-18',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/k-nishant-18',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:me.knishant@gmail.com',
    },
  ];

  const quickStats = [
    { label: 'Projects', value: '15+' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Satisfaction', value: '100%' },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-zinc-900 dark:bg-zinc-950 text-zinc-100 dark:text-zinc-100"
    >
      <div className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div ref={contentRef}>
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-12 gap-16 mb-16">
              {/* Brand Section */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-zinc-100 mb-6">
                    Gaurav Shaw
                  </h3>
                  <p className="text-base font-light text-zinc-400 leading-relaxed max-w-lg">
                    Full-Stack Developer crafting digital experiences with precision and creativity. 
                    Available for freelance projects and collaborations worldwide.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl font-light text-zinc-100 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation & Contact */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-zinc-400 mb-6">
                    Navigate
                  </h4>
                  <div className="space-y-3">
                    <button
                      onClick={() => scrollToSection('work')}
                      className="block text-sm font-mono tracking-wide text-zinc-300 hover:text-zinc-100 transition-colors duration-300"
                      data-cursor="pointer"
                    >
                      01. Work
                    </button>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="block text-sm font-mono tracking-wide text-zinc-300 hover:text-zinc-100 transition-colors duration-300"
                      data-cursor="pointer"
                    >
                      02. About
                    </button>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="block text-sm font-mono tracking-wide text-zinc-300 hover:text-zinc-100 transition-colors duration-300"
                      data-cursor="pointer"
                    >
                      03. Contact
                    </button>
                  </div>
                </div>
              </div>

              {/* Social & Back to Top */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-zinc-400 mb-6">
                    Connect
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-300"
                        data-cursor="pointer"
                        aria-label={social.label}
                      >
                        <social.icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 text-sm font-mono tracking-wide text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
                  data-cursor="pointer"
                >
                  <ArrowUp size={14} />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-800 mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-xs font-mono tracking-wide text-zinc-500">
                © 2025 Gaurav Shaw. All rights reserved.
              </div>

              <div className="text-xs font-mono tracking-wide text-zinc-500">
                Designed & Developed with precision
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;