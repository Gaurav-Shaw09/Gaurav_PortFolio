import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Github, Linkedin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gauravshaw64@gmail.com',
      href: 'mailto:gauravshaw64@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata, India',
      href: null,
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open for Projects',
      href: null,
    },
  ];

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
      [contentRef.current, formRef.current],
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(formData.subject || 'Project Inquiry');
    const body = encodeURIComponent(`Hi Gaurav,

${formData.message}

Best regards,
${formData.name}
${formData.email}`);
    
    window.location.href = `mailto:me.knishant@gmail.com?subject=${subject}&body=${body}`;
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-24">
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              03.
            </span>
            <div className="w-16 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-zinc-100">
            Let's Create Something Amazing
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Information */}
          <div ref={contentRef} className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <p className="text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 border border-zinc-200 dark:border-zinc-800">
                      <info.icon size={18} className="text-zinc-600 dark:text-zinc-400" />
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-300"
                        data-cursor="pointer"
                      >
                        <div className="text-xs font-mono tracking-wide text-zinc-500 dark:text-zinc-500 uppercase">
                          {info.label}
                        </div>
                        <div className="font-mono tracking-wide">
                          {info.value}
                        </div>
                      </a>
                    ) : (
                      <div>
                        <div className="text-xs font-mono tracking-wide text-zinc-500 dark:text-zinc-500 uppercase">
                          {info.label}
                        </div>
                        <div className="font-mono tracking-wide text-zinc-900 dark:text-zinc-100">
                          {info.value}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                Connect
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
                    data-cursor="pointer"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full py-3 bg-transparent border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors duration-300 font-mono tracking-wide"
                    data-cursor="pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full py-3 bg-transparent border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors duration-300 font-mono tracking-wide"
                    data-cursor="pointer"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full py-3 bg-transparent border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors duration-300 font-mono tracking-wide"
                  data-cursor="pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full py-3 bg-transparent border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors duration-300 resize-none font-mono tracking-wide"
                  data-cursor="pointer"
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="inline-flex items-center space-x-3 px-8 py-3 border border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-mono tracking-wide hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-300"
                  data-cursor="pointer"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;