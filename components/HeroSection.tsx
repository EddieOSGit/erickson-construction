import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1059')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Building Your Vision in the Tri-Cities
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-200">
          Erickson Construction: Premier general contractor in Kennewick, WA for custom homes, garages, and quality remodels.
        </p>
        <div className="space-x-4">
          <a
            href="#contact"
            className="bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-600 transition-transform hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </a>
          <a
            href="#portfolio"
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-slate-800 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;