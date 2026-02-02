import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import GradientButton from './GradientButton';
import PlayButton from './PlayButton';
import AnimatedText from './AnimatedText';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);
  const floatingIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the main image container (Left -> Right -> Left continuous)
    // Note: The prompt asked for "right to left then right".
    // We achieve this with a yoyo tween on the x-axis.
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        x: -25, // Move left by 25px
        duration: 3,
        yoyo: true, // Go back to original
        repeat: -1, // Infinite loop
        ease: "sine.inOut"
      });
    }

    // Floating animation for stats cards (up/down slightly to feel detached)
    const float = (element: HTMLDivElement | null, delay: number) => {
      if (element) {
        gsap.to(element, {
          y: -15,
          duration: 2.5,
          delay: delay,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      }
    };

    float(floatingCard1Ref.current, 0);
    float(floatingCard2Ref.current, 1);
    float(floatingIconRef.current, 0.5);

  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden flex items-center bg-slate-50">
      
      {/* Background blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-0 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      {/* Decorative Wave/Squiggle */}
      <div className="absolute bottom-20 right-20 opacity-30 pointer-events-none">
          <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15C15 15 15 2 28 2C41 2 41 15 54 15C67 15 67 2 80 2C93 2 93 15 106 15" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round"/>
          </svg>
      </div>


      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full py-12">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.2]">
            Best <AnimatedText text="Business" /> <br />
            Software Company <br />
            in Bangladesh
          </h1>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
            Retail Solution: Now Used By More Than 2,000 Retailers & Wholesalers. 
            AmarSolution's state-of-the-art in-store equipment that makes billing, 
            making balances, and tracking customer loyalty simpler in one system. 
            Cut operations costs up to 30% and boost sales using our fast, accurate software.
          </p>

          <div className="flex items-center gap-8">
            <GradientButton onClick={() => console.log('Call Now clicked')}>
              Call Now
            </GradientButton>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <PlayButton />
              <span className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">See Demo</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image Area */}
        <div className="relative flex justify-center lg:justify-end">
            {/* Main Image Wrapper */}
            <div ref={imageContainerRef} className="relative z-10 w-full max-w-lg">
                {/* Abstract Background Shape behind person */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-50 rounded-full scale-90 -z-10 translate-y-8"></div>
                
                {/* Person Image */}
                <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                    alt="Happy Business Person" 
                    className="w-full h-auto object-cover relative z-10 drop-shadow-2xl rounded-b-3xl mask-image-gradient"
                    style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} 
                />

                {/* Floating Card 1: Profit Chart */}
                <div ref={floatingCard1Ref} className="absolute top-10 -right-4 md:-right-12 bg-white p-4 rounded-xl shadow-xl z-20 flex flex-col gap-2 w-48 border border-slate-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-gray-500">Profit</p>
                            <h4 className="text-lg font-bold text-slate-800">4,200 TK</h4>
                        </div>
                        <span className="text-green-500 text-xs font-bold bg-green-50 px-1.5 py-0.5 rounded">+14%</span>
                    </div>
                    <div className="flex items-end gap-1 h-12 mt-1">
                        <div className="w-1/5 bg-indigo-100 h-[40%] rounded-sm"></div>
                        <div className="w-1/5 bg-indigo-200 h-[60%] rounded-sm"></div>
                        <div className="w-1/5 bg-indigo-300 h-[30%] rounded-sm"></div>
                        <div className="w-1/5 bg-indigo-400 h-[80%] rounded-sm"></div>
                        <div className="w-1/5 bg-indigo-600 h-[50%] rounded-sm"></div>
                    </div>
                </div>

                {/* Floating Card 2: Total Sales */}
                <div ref={floatingCard2Ref} className="absolute bottom-12 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 w-52 border border-slate-100">
                     <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                        <TrendingUp size={24} />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-slate-800">36,680 TK</h4>
                        <p className="text-[10px] text-green-600 font-medium">Compared to 28,000 TK</p>
                     </div>
                </div>

                {/* Floating Icon 1 */}
                <div ref={floatingIconRef} className="absolute top-1/2 -left-8 bg-white p-3 rounded-full shadow-lg z-0">
                    <BarChart3 className="text-purple-500" size={20} />
                </div>
                 
                 {/* Decorative elements around image */}
                <div className="absolute top-40 right-full mr-4 opacity-50">
                    <Users className="text-gray-300" size={32} />
                </div>
            </div>

            {/* Additional small floating shapes */}
            <div className="absolute bottom-20 left-1/2 w-6 h-6 border-4 border-purple-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-20 right-10 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-indigo-400 border-r-[10px] border-r-transparent rotate-12 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;