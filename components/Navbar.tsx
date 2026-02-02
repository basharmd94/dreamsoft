import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import GradientButton from './GradientButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Software', href: '#', hasDropdown: true },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Blogs', href: '#' },
    { name: 'Our Clients', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="w-full bg-slate-50/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
            as
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-indigo-900">AmarSolution</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide">A Total Solution of Your Business</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
           <GradientButton className="!px-6 !py-2 text-sm !rounded-md">
             Login
           </GradientButton>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 border-t border-gray-100">
           {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium text-base block"
            >
              {link.name}
            </a>
          ))}
           <div className="mt-2">
             <GradientButton className="w-full justify-center text-center">Login</GradientButton>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;