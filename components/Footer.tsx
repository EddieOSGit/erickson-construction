
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">Erickson Construction</h3>
          <p className="text-slate-300">Your trusted building partner in the Tri-Cities area.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-slate-300">
            <li>Phone: <a href="tel:5099474400" className="hover:text-amber-400">(509) 947-4400</a></li>
            <li>Address: 3227 W 13th Ave, Kennewick, WA 99338</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Service Areas</h3>
          <ul className="space-y-2 text-slate-300">
            <li>Kennewick, WA</li>
            <li>Tri-Cities Area</li>
            <li>Benton County</li>
            <li>Franklin County</li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <p className="text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Erickson Construction. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
