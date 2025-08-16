import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Book, Award } from 'lucide-react';

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      year: '2024',
      title: 'Freelance Full-Stack Developer',
      company: 'Independent Contractor',
      type: 'work',
      icon: Briefcase,
      description: 'Building scalable web applications for clients worldwide. Specializing in modern technologies with focus on exceptional user experience and performance optimization.',
      achievements: ['15+ Projects Delivered', '100% Client Satisfaction', 'International Clients'],
    },
    {
      year: '2023',
      title: 'Advanced Development Studies',
      company: 'Self-Directed Learning',
      type: 'education',
      icon: Book,
      description: 'Deepened expertise in system design, data structures, and advanced Spring Boot features while building multiple full-stack projects.',
      achievements: ['System Design Mastery', 'Open Source Contributions', 'Technical Blog Writing'],
    },
    {
      year: '2022',
      title: 'Computer Science Journey Begins',
      company: 'University Education',
      type: 'education',
      icon: Book,
      description: 'Started formal education in computer science, building strong foundations in programming, algorithms, and software engineering principles.',
      achievements: ['Programming Fundamentals', 'Algorithm Design', 'Software Engineering'],
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      }
    );

    timelineItems.forEach((_, index) => {
      gsap.fromTo(
        `.timeline-item-${index}`,
        { x: index % 2 === 0 ? -80 : 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.timeline-item-${index}`,
            start: 'top 85%',
          },
        }
      );
    });

    // Animate timeline line
    gsap.fromTo(
      '.timeline-line',
      { height: '0%' },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-24">
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              Journey
            </span>
            <div className="w-16 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-zinc-100">
            Professional Timeline
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-zinc-200 dark:bg-zinc-800 h-full">
            <div className="timeline-line w-full bg-zinc-900 dark:bg-zinc-100"></div>
          </div>

          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`timeline-item-${index} relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zinc-900 dark:bg-zinc-100 rounded-full border-4 border-white dark:border-zinc-950 z-10"></div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-2 bg-zinc-100 dark:bg-zinc-800">
                        <item.icon size={20} className="text-zinc-600 dark:text-zinc-400" />
                      </div>
                      <div className="text-2xl font-light text-zinc-400 dark:text-zinc-600">
                        {item.year}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-mono tracking-wide text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="text-sm font-mono tracking-wide text-zinc-500 dark:text-zinc-500 uppercase">
                        {item.company}
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1 h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full"></div>
                            <span className="text-xs font-mono tracking-wide text-zinc-500 dark:text-zinc-500">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;