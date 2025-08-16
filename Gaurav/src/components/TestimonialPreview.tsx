import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';

const TestimonialPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Kumar Nishant',
      role: 'Product Manager',
      company: 'Tech Startup',
      testimonial: 'Gaurav delivered exceptional work with outstanding attention to detail and technical expertise. His ability to understand complex requirements and translate them into elegant solutions is remarkable.',
      rating: 5,
      project: 'Collegia',
    },
    {
      name: 'Aditya Suryavanshi',
      role: 'Senior Developer',
      company: 'Software Solutions',
      testimonial: 'Working with Gaurav was seamless. His problem-solving skills, code quality, and collaborative approach made our project a huge success. Highly recommend his expertise.',
      rating: 5,
      project: 'E-commerce Platform',
    },
  ];

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '2+', label: 'Years Experience' },
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
      testimonialsRef.current?.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      statsRef.current?.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-32 px-8 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-24">
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              Client Feedback
            </span>
            <div className="w-16 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-zinc-100">
            What Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Testimonials */}
          <div ref={testimonialsRef} className="lg:col-span-2 space-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors duration-300"
              >
                <div className="flex items-start space-x-6">
                  <Quote size={24} className="text-zinc-300 dark:text-zinc-700 mt-2 flex-shrink-0" />
                  
                  <div className="space-y-6">
                    <blockquote className="text-lg font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
                      "{testimonial.testimonial}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-mono tracking-wide text-zinc-900 dark:text-zinc-100">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono tracking-wide">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-xs font-mono tracking-wide text-zinc-400 dark:text-zinc-600 uppercase">
                          Project
                        </span>
                        <p className="text-xs font-mono tracking-wide text-zinc-600 dark:text-zinc-400">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="lg:col-span-1">
            <div ref={statsRef} className="space-y-8 sticky top-32">
              <h3 className="text-xl font-mono tracking-wide text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                Quick Stats
              </h3>
              
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="text-3xl font-light text-zinc-900 dark:text-zinc-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}

              <div className="pt-8">
                <a
                  href="mailto:me.knishant@gmail.com"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-mono tracking-wide hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300"
                  data-cursor="pointer"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPreview;