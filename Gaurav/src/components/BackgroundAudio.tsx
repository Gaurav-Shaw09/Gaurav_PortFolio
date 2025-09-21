
import React, { useEffect, useRef, useState } from 'react';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // low volume
      audioRef.current.loop = true;
      audioRef.current.muted = true; // start muted
      audioRef.current.play().catch(() => {
        console.log('Autoplay blocked. Click button to start music.');
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
      if (!audioRef.current.muted) audioRef.current.play(); // ensure it plays
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="px-3 py-2 bg-zinc-900 text-white rounded-md text-sm"
      >
        {isMuted ? 'Unmute Music' : 'Mute Music'}
      </button>
     <audio ref={audioRef} src="/soothing.mpeg" />


    </div>
  );
};

export default BackgroundAudio;
