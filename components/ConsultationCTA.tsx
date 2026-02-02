import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GradientButton from './GradientButton';

const ConsultationCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Text Content Animation (Slide from Left)
            gsap.fromTo(
              contentRef.current,
              { x: -50, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );

            // Arch Background Animation (Pop up)
            if (archRef.current) {
                gsap.fromTo(
                archRef.current,
                { scaleY: 0, opacity: 0, transformOrigin: "bottom" },
                { scaleY: 1, opacity: 1, duration: 0.8, ease: "back.out(1.2)", delay: 0.2 }
                );
            }

            // Image Animation (Slide up inside mask)
            if (imageRef.current) {
                gsap.fromTo(
                imageRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
                );
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#34349e] overflow-hidden relative pt-16 md:pt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div ref={contentRef} className="text-white space-y-8 py-12 md:py-24 opacity-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Still confused about Our Services?
            <br />
            Consult with our experts
          </h2>
          <GradientButton className="!px-10 !py-4 text-lg shadow-xl shadow-purple-900/30">
            Contact Us
          </GradientButton>
        </div>

        {/* Right Content - Image with Arch */}
        <div className="relative h-full min-h-[400px] md:min-h-[500px] flex items-end justify-center md:justify-end">
            {/* White Arch Shape */}
            <div 
                ref={archRef}
                className="relative w-[90%] md:w-[85%] h-[90%] bg-white rounded-t-[200px] md:rounded-t-[300px] flex items-end justify-center overflow-hidden shadow-2xl origin-bottom"
            >
                <img 
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1932" 
                    alt="Consultant on phone" 
                    className="w-full h-[110%] object-cover object-top -mb-4 md:-mb-8"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;