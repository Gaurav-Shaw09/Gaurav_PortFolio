import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 });

    tl.fromTo(
      nameRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        descriptionRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        socialRef.current?.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      );

    // Floating animation for scroll indicator
    gsap.to(scrollRef.current, {
      y: 6,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Name */}
            <div ref={nameRef} className="space-y-2">
              <div className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500 mb-4">
                Hello, I'm
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] text-zinc-900 dark:text-zinc-100">
                Gaurav<br />
                Shaw
              </h1>
            </div>

            {/* Title */}
            <div ref={titleRef}>
              <h2 className="text-xl md:text-2xl font-mono tracking-wide text-zinc-600 dark:text-zinc-400">
                Full-Stack Developer
              </h2>
            </div>

            {/* Description */}
            <div ref={descriptionRef} className="max-w-2xl">
              <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-light">
                I craft digital experiences that seamlessly blend innovative technology 
                with thoughtful design. Specializing in scalable web applications and 
                modern development practices.
              </p>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex space-x-6">
              <a
                href="https://github.com/Gaurav-Shaw09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
                data-cursor="pointer"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-shaw-b25523322/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
                data-cursor="pointer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:gauravshaw64@gmail.com"
                className="p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
                data-cursor="pointer"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column - Vertical Text */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="[writing-mode:vertical-lr] text-sm font-mono tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-600">
              Available for Freelance Projects
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          ref={scrollRef}
          className="absolute bottom-12 left-8 cursor-pointer"
          onClick={scrollToWork}
          data-cursor="pointer"
        >
          <div className="flex items-center space-x-3 text-zinc-500 dark:text-zinc-500">
            <div className="w-px h-16 bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs font-mono tracking-[0.2em] uppercase [writing-mode:vertical-lr]">
                Scroll
              </span>
              <ArrowDown size={14} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/4 w-px h-32 bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-px bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute bottom-1/3 right-1/4 w-px h-24 bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </section>
  );
};

export default Hero;