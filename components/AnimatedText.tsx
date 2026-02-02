import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Animate the background position of the text
    gsap.to(textRef.current, {
      backgroundPosition: "200% center",
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <span
      ref={textRef}
      className={`
        bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600
        bg-[length:200%_auto]
        animate-gradient-text
        ${className}
      `}
      style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block'
      }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;