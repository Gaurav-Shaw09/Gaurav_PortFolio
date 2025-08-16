import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'GSAP', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Spring Security', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'JWT Authentication', level: 85 },
      ],
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Maven', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
      ],
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

    gsap.fromTo(
      skillsRef.current?.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate progress bars
    skillCategories.forEach((category, categoryIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        gsap.fromTo(
          `.progress-bar-${categoryIndex}-${skillIndex}`,
          { width: '0%' },
          {
            width: `${skill.level}%`,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: `.skill-category-${categoryIndex}`,
              start: 'top 80%',
            },
            delay: skillIndex * 0.1,
          }
        );
      });
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 px-8 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-24">
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              Skills
            </span>
            <div className="w-16 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-zinc-100 mb-8">
            Technical Expertise
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-2xl">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in modern web development.
          </p>
        </div>

        <div ref={skillsRef} className="grid lg:grid-cols-2 gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skill-category-${categoryIndex} space-y-8`}
            >
              <h3 className="text-xl font-mono tracking-wide text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono tracking-wide text-zinc-700 dark:text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                      <div
                        className={`progress-bar-${categoryIndex}-${skillIndex} h-full bg-zinc-900 dark:bg-zinc-100 absolute left-0 top-0`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-32 pt-16 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8">
            "The best code is not just functional, but elegant, maintainable, and tells a story."
          </blockquote>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm font-mono tracking-[0.2em] uppercase">
            — Development Philosophy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;