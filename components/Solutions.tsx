import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedText from './AnimatedText';
import { 
  ShoppingCart, 
  Shirt, 
  Utensils, 
  Smartphone, 
  Hammer, 
  Package, 
  Calculator, 
  Scissors 
} from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgClass: string;
  iconColorClass: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon, bgClass, iconColorClass, index }) => {
    return (
        <div className={`solution-card opacity-0 ${bgClass} p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group border border-transparent hover:border-slate-100 relative overflow-hidden`}>
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className={`relative z-10 w-16 h-16 mx-auto rounded-full bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${iconColorClass}`}>
                {icon}
            </div>
            <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">{title}</h3>
            <p className="relative z-10 text-sm text-slate-600 leading-relaxed font-medium">{description}</p>
        </div>
    );
};

const Solutions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target.querySelectorAll('.solution-card'), {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.2)"
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      title: "Super Shop",
      description: "Boost your retail efficiency with our cutting-edge Super Shop Software. Streamline operations, optimize inventory, and enhance customer experience.",
      icon: <ShoppingCart size={28} />,
      bgClass: "bg-cyan-50 hover:bg-cyan-100",
      iconColorClass: "text-cyan-600"
    },
    {
      title: "Fashion Shop",
      description: "Discover the ultimate Fashion Shop Software for seamless inventory management, sales tracking, and customer engagement. Boost your fashion business today!",
      icon: <Shirt size={28} />,
      bgClass: "bg-sky-50 hover:bg-sky-100",
      iconColorClass: "text-sky-600"
    },
    {
      title: "Restaurant Business",
      description: "Streamline your restaurant operations with our powerful business software. Boost efficiency, manage orders, and enhance customer satisfaction.",
      icon: <Utensils size={28} />,
      bgClass: "bg-orange-50 hover:bg-orange-100",
      iconColorClass: "text-orange-600"
    },
    {
      title: "Electronics Shop",
      description: "Boost your electronics shop's efficiency and sales with our powerful software. Streamline operations and enhance customer experience.",
      icon: <Smartphone size={28} />,
      bgClass: "bg-purple-50 hover:bg-purple-100",
      iconColorClass: "text-purple-600"
    },
    {
      title: "Hardware",
      description: "Boost your hardware shop's efficiency with our powerful software solution. Streamline operations, manage inventory, and enhance customer experience.",
      icon: <Hammer size={28} />,
      bgClass: "bg-amber-50 hover:bg-amber-100",
      iconColorClass: "text-amber-600"
    },
    {
      title: "Wholesale",
      description: "Get the best deals on wholesale software solutions. Boost efficiency, save costs, and streamline operations with our top-quality products.",
      icon: <Package size={28} />,
      bgClass: "bg-blue-50 hover:bg-blue-100",
      iconColorClass: "text-blue-600"
    },
    {
      title: "Accounting Software",
      description: "Streamline financial management with powerful accounting software. Track expenses, manage invoices, and gain real-time insights for your business.",
      icon: <Calculator size={28} />,
      bgClass: "bg-teal-50 hover:bg-teal-100",
      iconColorClass: "text-teal-600"
    },
    {
      title: "Tailor Shop",
      description: "Boost efficiency and streamline operations with Tailor Shop Software. Simplify appointments, inventory management, and customer communication.",
      icon: <Scissors size={28} />,
      bgClass: "bg-pink-50 hover:bg-pink-100",
      iconColorClass: "text-pink-600"
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Background blobs (Exchanged sides compared to Partners) */}
      {/* Partners had Top-Right, Bottom-Left. Here we use Top-Left, Bottom-Right like Hero */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -z-0 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl -z-0 translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The <AnimatedText text="Perfect Solution" /> for Managing Any Shop
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            AmarSolution software is designed for all types of businesses—whether it's a supershop, 
            fashion store, restaurant, electronics shop, hardware store, wholesale business, 
            tailor shop, or accounting service. Simplify operations, manage sales, and grow effortlessly with our all-in-one solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <SolutionCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;