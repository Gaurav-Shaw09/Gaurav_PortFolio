import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ThemeProvider from './components/ThemeProvider';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import BackgroundAudio from './components/BackgroundAudio';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      return () => {
        lenis.destroy();
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000);
        });
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <div className="relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen overflow-x-hidden">
        <CustomCursor />
        <Navigation />
        <Home />
        <BackgroundAudio />
      </div>
    </ThemeProvider>
  );
}

export default App;