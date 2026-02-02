import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GradientButton from './GradientButton';
import AnimatedText from './AnimatedText';

const POSSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate Left Content
            gsap.fromTo(section.querySelector('.content-left'), 
              { opacity: 0, x: -30 },
              { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
            );

            // Animate Right Cards Staggered
            gsap.fromTo(cardsRef.current, 
              { opacity: 0, x: 50 },
              { 
                opacity: 1, 
                x: 0, 
                duration: 0.8, 
                stagger: 0.2, 
                ease: "power2.out",
                delay: 0.2
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      id: "01",
      title: "Strength",
      description: "Our POS solution helps businesses to streamline their operations by keeping track of sales and inventory efficiently.",
    },
    {
      id: "02",
      title: "Mission",
      description: "Our POS software's mission is to streamline and organize a storefront business's sales process by automating key tasks.",
    },
    {
      id: "03",
      title: "Vision",
      description: "Our Billing & Inventory System vision is to change the way people interact with technology when shopping.",
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Subtle Background Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Main Text Content */}
          <div className="content-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              The Largest <AnimatedText text="Point of Sale" /> System Provider
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              As the largest provider of POS System solutions in Bangladesh, we offer a wide range of products designed to meet the needs of businesses of all sizes. From small startups to enterprise-level organizations, we have the perfect fit for you.
            </p>
            <GradientButton className="shadow-purple-200">
              See Demo
            </GradientButton>
          </div>

          {/* Right Side: Clean Vertical Cards Layout */}
          <div className="flex flex-col gap-5">
            {items.map((item, index) => (
              <div 
                key={item.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-purple-100 transition-all duration-300 flex items-start gap-6 transform hover:-translate-y-1"
              >
                {/* Number Watermark / Icon Area */}
                <div className="flex-shrink-0">
                  <span className="text-5xl font-extrabold text-slate-100 group-hover:text-purple-100/80 transition-colors duration-300 font-sans">
                    {item.id}
                  </span>
                </div>
                
                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Side Line on Hover */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default POSSection;