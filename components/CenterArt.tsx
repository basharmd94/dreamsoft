import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CenterArt: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      // Beating animation (Scale and Opacity pulse) without movement
      gsap.fromTo(circleRef.current, 
        { 
          scale: 1,
          opacity: 0.2,
        },
        {
          scale: 1.3,
          opacity: 0.5,
          duration: 2.5, 
          repeat: -1, 
          yoyo: true, 
          ease: "sine.inOut"
        }
      );
    }
  }, []);

  return (
    <div className="relative w-full h-0 z-20 pointer-events-none">
      {/* Positioned clearly on the right side, smaller size, lower opacity */}
      <div 
        ref={circleRef}
        className="absolute right-[-20px] md:right-10 -top-32 w-56 h-56 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 blur-[70px] mix-blend-multiply opacity-30"
      ></div>
    </div>
  );
};

export default CenterArt;