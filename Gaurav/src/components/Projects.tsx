import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: '01',
      title: 'Collegia',
      category: 'Education Platform',
      year: '2024',
      description: 'A comprehensive student management platform featuring real-time collaboration, course management, and secure authentication systems.',
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      github: 'https://github.com/Gaurav-Shaw09/Collegia',
      live: 'https://collegia.vercel.app',
      status: 'Live'
    },
    {
      id: '02',
      title: 'Roots-Routes',
      category: 'Heritage Platform',
      year: '2024',
      description: 'Digital platform for preserving cultural heritage with interactive community features and multimedia galleries.',
      tech: ['Spring Boot', 'React.js', 'MongoDB', 'AWS', 'Docker'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
      github: 'https://github.com/Gaurav-Shaw09/Roots-Routes',
      live: '#',
      status: 'Development'
    },
    {
      id: '03',
      title: 'PenFolio',
      category: 'Blogging Website',
      year: '2023',
      description: 'A blogging platform to create, share, and engage with posts through likes, comments, and real-time chat.',
      tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'Docker', 'GitHub API'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      github: 'https://github.com/Gaurav-Shaw09/PenFolio',
      live: 'https://penfolio-blzjzgs2a-gaurav-shaws-projects.vercel.app',
      status: 'Completed'
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

    projects.forEach((_, index) => {
      gsap.fromTo(
        `.project-${index}`,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.project-${index}`,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-32 px-8 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-24">
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              01.
            </span>
            <div className="w-16 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-zinc-100">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-${index} group`}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Project Number & Info */}
                <div className={`lg:col-span-4 space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="text-8xl font-light text-zinc-200 dark:text-zinc-800 leading-none">
                      {project.id}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                          {project.category}
                        </span>
                        <div className="w-2 h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                        <span className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                          {project.year}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-light text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-mono tracking-wide border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300"
                        data-cursor="pointer"
                      >
                        <Github size={14} />
                        <span className="text-sm font-mono tracking-wide">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
                        data-cursor="pointer"
                      >
                        <ExternalLink size={14} />
                        <span className="text-sm font-mono tracking-wide">Live</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[500px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 text-xs font-mono tracking-wide ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : project.status === 'Development'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;