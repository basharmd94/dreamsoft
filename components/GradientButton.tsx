import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, className = "", onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // The gradient is defined in CSS via Tailwind/Inline styles as being 200% wide.
    // We animate the background position from right to left.
    gsap.to(button, {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    // Hover effect
    const hoverAnim = gsap.to(button, {
      scale: 1.05,
      paused: true,
      duration: 0.3,
      ease: "power2.out"
    });

    const onEnter = () => hoverAnim.play();
    const onLeave = () => hoverAnim.reverse();

    button.addEventListener('mouseenter', onEnter);
    button.addEventListener('mouseleave', onLeave);

    return () => {
      button.removeEventListener('mouseenter', onEnter);
      button.removeEventListener('mouseleave', onLeave);
      hoverAnim.kill();
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-lg text-white font-semibold tracking-wide shadow-lg
        bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600
        bg-[length:200%_100%]
        outline-none focus:ring-4 focus:ring-purple-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GradientButton;