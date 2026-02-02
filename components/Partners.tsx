import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedText from './AnimatedText';

const Partners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let tween: gsap.core.Tween;

    const ctx = gsap.context(() => {
      // Animate the slider container to the left by 50% of its width
      // Since the content is duplicated (2 halves), moving 50% creates a seamless loop
      tween = gsap.to(slider, {
        xPercent: -50,
        repeat: -1,
        duration: 40, // Adjust speed (seconds for one full loop of half content)
        ease: "linear",
      });
    }, sectionRef);

    const onEnter = () => tween.pause();
    const onLeave = () => tween.play();

    slider.addEventListener('mouseenter', onEnter);
    slider.addEventListener('mouseleave', onLeave);

    return () => {
      slider.removeEventListener('mouseenter', onEnter);
      slider.removeEventListener('mouseleave', onLeave);
      ctx.revert();
    };
  }, []);

  const partners = [
    { name: "GONI", color: "text-red-600 font-black tracking-tighter" },
    { name: "COLORJET", color: "text-orange-500 font-bold" },
    { name: "Coffeeta", color: "text-amber-800 font-serif italic" },
    { name: "EXOTIC", color: "text-black font-extrabold uppercase tracking-widest bg-yellow-400 px-1" },
    { name: "WALTON", color: "text-blue-600 font-bold" },
    { name: "Hoque & Sons", color: "text-green-700 font-serif" },
    { name: "abtahi", color: "text-cyan-600 font-medium lowercase" },
  ];

  // We create a base set that is repeated 3 times to ensure it fills wider screens
  const baseSet = [...partners, ...partners, ...partners];
  // We double that base set to create the two halves for the loop
  const marqueeItems = [...baseSet, ...baseSet];

  return (
    <section ref={sectionRef} className="relative py-16 bg-white border-b border-slate-100 overflow-hidden">
       {/* Background blobs (Exchanged sides compared to Hero) */}
       {/* Hero had Top-Left, Bottom-Right. Here we use Top-Right, Bottom-Left */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl -z-0 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our <AnimatedText text="Key Satisfied" /> Customers
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="relative w-full overflow-hidden rounded-xl border border-slate-50/50 bg-white/30 backdrop-blur-sm">
            {/* Gradient masks for smooth fade effect at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div ref={sliderRef} className="flex items-center w-max cursor-pointer py-4">
            {marqueeItems.map((p, i) => (
                <div
                key={i}
                className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center group select-none"
                >
                <span 
                    className={`
                    text-2xl md:text-4xl 
                    ${p.color} 
                    opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 
                    transition-all duration-300 transform group-hover:scale-110 block
                    `}
                >
                    {p.name}
                </span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;