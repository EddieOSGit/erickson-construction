
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
        <p className="max-w-2xl mx-auto text-slate-300 mb-8">
          Ready to start your next construction project in Kennewick or the Tri-Cities? Contact Erickson Construction today for a free, no-obligation consultation and quote.
        </p>
        <div className="bg-white text-slate-800 rounded-lg shadow-xl max-w-4xl mx-auto p-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong className="block text-slate-800">Business Name:</strong>
                Erickson Construction
              </p>
              <p>
                <strong className="block text-slate-800">Phone:</strong>
                <a href="tel:5099474400" className="text-amber-600 hover:underline text-lg font-semibold">(509) 947-4400</a>
              </p>
              <p>
                <strong className="block text-slate-800">Address:</strong>
                3227 W 13th Ave, Kennewick, WA 99338
              </p>
              <p>
                <strong className="block text-slate-800">Primary Contact Method:</strong>
                Please contact by phone.
              </p>
            </div>
          </div>
          <div>
            <a href="https://www.google.com/maps/search/?api=1&query=3227+W+13th+Ave,+Kennewick,+WA+99338" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://picsum.photos/600/400?image=884" 
                alt="Map showing Kennewick, WA service area" 
                className="rounded-lg shadow-md hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
