import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Progress bar animation
    tl.fromTo(progressRef.current,
      { width: '0%' },
      {
        width: '100%',
        duration: 2,
        ease: 'power2.out'
      }
    );

    // Text animation
    tl.fromTo(textRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=1.5'
    );

    // Exit animation
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      delay: 0.3
    });

  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white dark:bg-zinc-950 flex flex-col items-center justify-center"
    >
      <div className="w-64 mb-8">
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-zinc-900 dark:bg-zinc-100 absolute left-0 top-0"
          />
        </div>
      </div>
      
      <div ref={textRef} className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">
        Loading Portfolio
      </div>
    </div>
  );
};

export default Loader;