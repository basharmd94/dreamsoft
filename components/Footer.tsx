import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const softwareLinks = [
    "Fashion Shop Software", "Restaurant Software", "Supershop Software", 
    "Electronics Shop Software", "Wholesale Shop Software", "Hardware Shop Software",
    "Tailor Software", "Accounting Software", "Inventory Software", "POS Software", "ERP Software"
  ];

  const serviceLinks = [
    "Website Development", "Software Development", "Apps Development",
    "Domain & Hosting", "Digital Marketing Service", "Biometric Solution"
  ];

  return (
    <footer className="relative bg-[#34349e] text-white font-sans mt-[-1px]">
       {/* Decorative Wave SVG - Placed absolutely at the top to transition from the previous section */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
            <svg className="block w-full h-16 md:h-32 lg:h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#F8FAFC" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
             {/* Decorative Dots on the wave */}
             {/* Coordinates calculated based on SVG path to ensure alignment */}
            <div className="absolute w-4 h-4 rounded-full bg-[#ff9f7e] hidden md:block -translate-x-1/2 -translate-y-1/2" style={{ left: '10%', top: '41%' }}></div>
            <div className="absolute w-4 h-4 rounded-full bg-[#ff9f7e] hidden md:block -translate-x-1/2 -translate-y-1/2" style={{ left: '30%', top: '44%' }}></div>
            <div className="absolute w-4 h-4 rounded-full bg-[#ff9f7e] hidden md:block -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '42.5%' }}></div>
            <div className="absolute w-4 h-4 rounded-full bg-[#ff9f7e] hidden md:block -translate-x-1/2 -translate-y-1/2" style={{ left: '70%', top: '45%' }}></div>
            <div className="absolute w-4 h-4 rounded-full bg-[#ff9f7e] hidden md:block -translate-x-1/2 -translate-y-1/2" style={{ left: '90%', top: '27%' }}></div>
        </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-32 md:pt-48 pb-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-sm">
            
            {/* Column 1: Logo & Info (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
                 {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#34349e] font-bold text-xl">
                        as
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl font-bold text-white">AmarSolution</span>
                        <span className="text-[10px] text-gray-300 font-medium tracking-wide">Complete Solution of your business</span>
                    </div>
                </div>
                
                <p className="text-gray-200 leading-relaxed pr-4">
                    AmarSolution is an online software where possible to manage all types of shops perfectly. It plans to connect thousands of clients who have shops but they need to manage.
                </p>

                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#34349e] transition-all"><Facebook size={16} /></a>
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#34349e] transition-all"><Instagram size={16} /></a>
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#34349e] transition-all"><Linkedin size={16} /></a>
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#34349e] transition-all"><Youtube size={16} /></a>
                </div>

                {/* Map Image Placeholder */}
                <div className="w-full max-w-[280px] h-32 rounded-lg overflow-hidden border-2 border-white/20 mt-6 relative group cursor-pointer">
                    <img 
                        src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" 
                        alt="Office Location" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-white/90 text-[#34349e] px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            <MapPin size={12} /> View larger map
                         </div>
                    </div>
                </div>
            </div>

            {/* Column 2: Pages (2 cols) */}
            <div className="lg:col-span-2">
                <h3 className="text-lg font-bold mb-6">Pages</h3>
                <ul className="space-y-3">
                    {["Home", "About", "Contact Us", "Blog"].map((item) => (
                        <li key={item}><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">{item}</a></li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Our Software (2 cols) */}
            <div className="lg:col-span-2">
                <h3 className="text-lg font-bold mb-6">Our Software</h3>
                <ul className="space-y-3">
                    {softwareLinks.map((item) => (
                        <li key={item}><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">{item}</a></li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Services & Contacts (4 cols) */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                     <h3 className="text-lg font-bold mb-6">Services</h3>
                    <ul className="space-y-3">
                        {serviceLinks.map((item) => (
                            <li key={item}><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">{item}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-6">Contacts us</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <Mail size={18} className="shrink-0 mt-0.5 text-gray-300" />
                            <a href="mailto:info@amarsolution.com" className="text-gray-300 hover:text-white">info@amarsolution.com</a>
                        </li>
                         <li className="flex gap-3">
                            <Phone size={18} className="shrink-0 mt-0.5 text-gray-300" />
                            <div className="flex flex-col gap-1">
                                <a href="tel:+8801760807974" className="text-gray-300 hover:text-white">+8801760807974</a>
                                <a href="tel:+8801744569317" className="text-gray-300 hover:text-white">+8801744569317</a>
                                <a href="tel:+8801728766480" className="text-gray-300 hover:text-white">+8801728766480</a>
                                <a href="tel:+8801744575319" className="text-gray-300 hover:text-white">+8801744575319</a>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <MapPin size={18} className="shrink-0 mt-0.5 text-gray-300" />
                            <span className="text-gray-300">
                                House 51/C, Road 13/B<br/>
                                Sector 3, Uttara Dhaka-<br/>
                                1230, Bangladesh.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Scroll To Top Button */}
        <button 
            onClick={scrollToTop}
            className="absolute bottom-24 right-6 md:right-12 w-10 h-10 bg-white text-[#34349e] rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform z-30"
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} strokeWidth={3} />
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-20 border-t border-white/10 bg-black/10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300">
            <p>Copyright © {new Date().getFullYear()} AmarSolution | A Product Of Akaar IT Ltd.</p>
            <div className="flex gap-6">
                <span className="font-semibold text-white">All Rights Reserved</span>
                <a href="#" className="hover:text-white underline">Terms and Conditions</a>
                <a href="#" className="hover:text-white underline">Privacy Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;