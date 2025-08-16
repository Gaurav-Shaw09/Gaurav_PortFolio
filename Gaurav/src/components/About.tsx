import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Coffee, Camera, Music } from 'lucide-react';
import insta_gaurav from "../assets/insta_gaurav.jpeg";  // relative path
import gaurav_photo from "../assets/gaurav_photo.jpeg"; // relative path

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: '2+', label: 'Years Experience', description: 'Building digital solutions' },
    { number: '15+', label: 'Projects Completed', description: 'Across various domains' },
    { number: '100%', label: 'Client Satisfaction', description: 'Quality-focused delivery' },
  ];

  const interests = [
    { icon: Code, label: 'Clean Architecture', description: 'Scalable code patterns' },
    { icon: Coffee, label: 'Coffee Enthusiast', description: 'Fuel for creativity' },
    { icon: Camera, label: 'Photography', description: 'Capturing moments' },
    { icon: Music, label: 'Music Production', description: 'Creative expression' },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });

    tl.fromTo(
      headerRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        contentRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo(
        imageRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        statsRef.current?.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        '-=0.5'
      );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-24">
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              02.
            </span>
            <div className="w-16 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-zinc-100">
            Digital Craftsman
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Content */}
          <div ref={contentRef} className="lg:col-span-7 space-y-12">
            <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              <p className="text-lg">
                I'm Gaurav Shaw, a passionate full-stack developer who believes in the 
                intersection of technology and human experience. My approach combines technical 
                precision with creative problem-solving.
              </p>
              <p>
                With expertise spanning Java Spring Boot and React.js, I specialize in 
                architecting scalable applications that prioritize both performance and 
                user experience. Every line of code I write is crafted with intention 
                and attention to detail.
              </p>
              <p>
                Beyond coding, I'm constantly exploring emerging technologies, contributing 
                to open-source projects, and capturing the world through my lens. I believe 
                in continuous learning and pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors duration-300 group"
                >
                  <interest.icon size={24} className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300 mb-4" />
                  <h4 className="text-sm font-mono tracking-wide text-zinc-900 dark:text-zinc-100 mb-2">
                    {interest.label}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 font-light">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a
                href="mailto:me.knishant@gmail.com"
                className="inline-flex items-center px-8 py-3 border border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-mono tracking-wide hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300"
                data-cursor="pointer"
              >
                Let's Collaborate
              </a>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="lg:col-span-5 space-y-12">
            <div ref={imageRef} className="space-y-8">
              <div className="relative">
              <img src={insta_gaurav} alt="Gaurav Instagram"
                  className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border border-zinc-200 dark:border-zinc-800 pointer-events-none"></div>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="space-y-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 pb-6 border-b border-zinc-100 dark:border-zinc-900 last:border-b-0"
                >
                  <div className="text-3xl font-light text-zinc-900 dark:text-zinc-100 min-w-[80px]">
                    {stat.number}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-mono tracking-wide text-zinc-900 dark:text-zinc-100">
                      {stat.label}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 font-light">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;