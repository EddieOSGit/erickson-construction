
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/600/400?image=20" 
              alt="Erickson Construction team working on a new home build" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Your Local Kennewick General Contractor
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              For years, Erickson Construction has been a cornerstone of quality and reliability in the Kennewick and greater Tri-Cities community. We are more than just home builders; we are partners in bringing your vision to life. Our commitment is to exceptional craftsmanship, transparent communication, and completing every project on time and on budget.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              As a locally-focused business, we understand the needs of our community. We pride ourselves on building lasting relationships with our clients, founded on the trust we earn through our dedicated work. From initial design to the final nail, your satisfaction is our top priority.
            </p>
            <a href="#contact" className="bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
