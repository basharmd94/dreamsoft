import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Store, RefreshCw, Wallet, PieChart } from 'lucide-react';
import AnimatedText from './AnimatedText';
import GradientButton from './GradientButton';

const KeyFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup initial state for cards
      gsap.set('.feature-card', { opacity: 0, y: 50 });
    }, sectionRef);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target.querySelectorAll('.feature-card'), {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out"
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, color: string, shadowColor: string) => {
    const target = e.currentTarget;
    const icon = target.querySelector('.card-icon');
    
    // Animate Card: Lift up, change border color, add colored shadow
    gsap.to(target, { 
      y: -15, 
      borderColor: color,
      boxShadow: `0 20px 40px -5px ${shadowColor}`,
      duration: 0.4, 
      ease: "power3.out" 
    });

    // Animate Icon: Scale up with elasticity
    if (icon) {
      gsap.to(icon, { 
        scale: 1.2, 
        duration: 0.5, 
        ease: "back.out(2)" 
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const icon = target.querySelector('.card-icon');

    // Reset Card
    gsap.to(target, { 
      y: 0, 
      borderColor: "#f1f5f9", // slate-100
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // default shadow-sm
      duration: 0.4, 
      ease: "power3.out" 
    });

    // Reset Icon
    if (icon) {
      gsap.to(icon, { 
        scale: 1, 
        duration: 0.4, 
        ease: "power2.out" 
      });
    }
  };

  const features = [
    {
      title: "Sales",
      desc: "Sales management is critical for any business that sells products or services. Sales Management System can help sales managers keep track of inventory.",
      icon: <Store size={32} className="card-icon" />,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      accentColor: "#ef4444", // Red-500
      shadowColor: "rgba(239, 68, 68, 0.2)"
    },
    {
      title: "Stocks",
      desc: "A Billing & Sales System system is a critical part of any retail business, and proper stock management is essential to keeping the system running smoothly.",
      icon: <RefreshCw size={32} className="card-icon" />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      accentColor: "#3b82f6", // Blue-500
      shadowColor: "rgba(59, 130, 246, 0.2)"
    },
    {
      title: "Account",
      desc: "When it comes to account management, the best POS System will offer a variety of features to help you stay organized and efficient.",
      icon: <Wallet size={32} className="card-icon" />,
      iconBg: "bg-sky-50",
      iconColor: "text-sky-500",
      accentColor: "#0ea5e9", // Sky-500
      shadowColor: "rgba(14, 165, 233, 0.2)"
    },
    {
      title: "Reports",
      desc: "Our POS system ensure that the software is running smoothly and all reports are up to date.",
      icon: <PieChart size={32} className="card-icon" />,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      accentColor: "#f97316", // Orange-500
      shadowColor: "rgba(249, 115, 22, 0.2)"
    }
  ];

  return (
    <section ref={sectionRef} className="relative pt-32 pb-48 bg-slate-50 overflow-hidden">
        {/* Top Shape Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] fill-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            AmarSolution <AnimatedText text="Key Features" />
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We make it easy for users to use our platform, that's why we provide this benefit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={(e) => handleMouseEnter(e, feature.accentColor, feature.shadowColor)}
              onMouseLeave={handleMouseLeave}
              className="feature-card group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col items-start min-h-[380px] cursor-pointer transition-colors"
            >
              {/* Content Container */}
              <div className="relative z-10 w-full h-full flex flex-col">
                <div className={`icon-wrapper w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-transparent transition-colors duration-300 ${feature.iconBg} ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                
                <h3 className="card-title text-2xl font-bold mb-4 text-slate-900">
                    {feature.title}
                </h3>
                
                <p className="card-desc text-base leading-relaxed text-gray-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center relative z-20">
            <GradientButton className="!px-10 !py-3 text-lg shadow-xl shadow-blue-200">Show More</GradientButton>
        </div>
      </div>

      {/* Bottom Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-0">
         <svg className="block w-full h-16 md:h-24 lg:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,320L0,160C240,160 480,60 720,60C960,60 1200,160 1440,160L1440,320L0,320Z"
            ></path>
        </svg>
      </div>
    </section>
  );
};

export default KeyFeatures;