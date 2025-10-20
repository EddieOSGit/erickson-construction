
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white md:text-slate-800'}`}>
          Erickson Construction
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-amber-500' : 'text-white md:text-slate-600 hover:text-amber-500'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:5099474400"
          className="hidden md:inline-block bg-amber-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-amber-600 transition-colors shadow-sm"
        >
          (509) 947-4400
        </a>
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;
