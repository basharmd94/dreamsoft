import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "RetailPro Ltd",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      content: "AmarSolution transformed how we handle inventory. The POS display is intuitive and cut our checkout time significantly.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "TechGear Shop",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      content: "The best investment we've made. The reporting features are robust and the interface is incredibly user-friendly.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Owner",
      company: "Boutique Fashion",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      content: "I love how easy it is to manage stock across locations. Support is responsive. A must-have for fashion retailers.",
      rating: 4
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Store Manager",
      company: "FreshMart",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      content: "Reliable, fast, and secure. Cashiers picked it up in minutes. Highly recommended for any grocery business.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Director",
      company: "HomeDecor Plus",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      content: "The analytics dashboard is a game-changer. We can now predict trends and stock up accordingly.",
      rating: 5
    },
    {
      id: 6,
      name: "James Taylor",
      role: "Founder",
      company: "Coffee & Co",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      content: "Perfect for our cafe. It handles customized orders seamlessly and keeps the line moving during rush hour.",
      rating: 4
    },
    {
      id: 7,
      name: "Robert Fox",
      role: "Manager",
      company: "Hardware Hero",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      content: "Robust features for hardware. SKU management is top-notch. It really solved our inventory headaches.",
      rating: 5
    },
    {
      id: 8,
      name: "Ashley White",
      role: "Owner",
      company: "Ashley's Bakery",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      content: "Simply amazing software. Tracks ingredients and sales perfectly. I can't imagine running the bakery without it.",
      rating: 5
    }
  ];

  // Determine how many items are visible based on screen width
  // Matches Tailwind breakpoints: md: 768px (2 items), lg: 1024px (3 items)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleItems(3);
      } else if (width >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  // Ensure currentIndex stays within bounds when visibleItems (and thus maxIndex) changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // GSAP Animation for Slider Movement
  useEffect(() => {
    if (trackRef.current) {
      const card = trackRef.current.children[0] as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 32; // 2rem gap consistent with 'gap-8' class
        const moveAmount = (cardWidth + gap) * currentIndex;

        gsap.to(trackRef.current, {
          x: -moveAmount,
          duration: 0.8,
          ease: "power3.inOut"
        });
      }
    }
  }, [currentIndex, visibleItems]); // Re-run if index or visible items change

  // Entrance Animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo(".testimonial-title-anim",
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
            );
            observer.unobserve(entry.target);
          }
        })
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Blobs (Matched with Solutions Section) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -z-0 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl -z-0 translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 testimonial-title-anim opacity-0">
          <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <AnimatedText text="Clients" /> Worldwide
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            See what our partners have to say about their experience with AmarSolution.
          </p>
        </div>

        {/* Carousel Window */}
        <div className="relative w-full overflow-hidden">
             {/* Gradient Overlays for smooth edge fade */}
            <div className="absolute top-0 left-0 h-full w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

            {/* The Track */}
            <div 
                ref={trackRef} 
                className="flex gap-8 will-change-transform py-4 px-1" // Added padding for shadow clearance
            >
                {testimonials.map((item) => (
                    <div 
                        key={item.id} 
                        // Explicit widths matching breakpoints
                        className="flex-none w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-auto group"
                    >
                        {/* Rating */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={18} 
                                    className={`${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="mb-8 flex-grow">
                            <Quote className="text-purple-100 mb-3" size={40} />
                            <p className="text-slate-700 italic leading-relaxed text-lg">"{item.content}"</p>
                        </div>

                        {/* User Info */}
                        <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-14 h-14 rounded-full object-cover ring-4 ring-slate-50 group-hover:ring-purple-50 transition-all"
                            />
                            <div>
                                <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                                <p className="text-xs text-purple-600 font-semibold uppercase tracking-wide">{item.role}</p>
                                <p className="text-xs text-gray-400">{item.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between md:justify-center gap-8 mt-12 w-full max-w-xl mx-auto px-4">
            
            <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-200 text-slate-500 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
                     return (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`transition-all duration-300 rounded-full ${
                                currentIndex === idx 
                                ? 'w-8 h-2.5 bg-gradient-to-r from-purple-600 to-pink-500' 
                                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-purple-300'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                     )
                })}
            </div>

            <button 
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-200 text-slate-500 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;