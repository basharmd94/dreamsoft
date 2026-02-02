import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

const PlayButton: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pulse animation for the ripple
    if (rippleRef.current) {
      gsap.to(rippleRef.current, {
        scale: 2,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power1.out",
      });
    }

    // Gentle floating for the button itself
    if (circleRef.current) {
       gsap.to(circleRef.current, {
        y: -5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
       });
    }
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center cursor-pointer group">
      {/* Ripple Effect Layer */}
      <div
        ref={rippleRef}
        className="absolute w-16 h-16 rounded-full bg-blue-100 opacity-70 z-0"
      ></div>
      
      {/* Background Layer (Static but styled) */}
      <div className="absolute w-16 h-16 rounded-full bg-white shadow-xl z-10"></div>

      {/* Icon Layer */}
      <div ref={circleRef} className="relative z-20 w-16 h-16 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm transition-transform group-hover:text-indigo-800">
         <Play fill="currentColor" size={24} className="ml-1" />
      </div>
    </div>
  );
};

export default PlayButton;