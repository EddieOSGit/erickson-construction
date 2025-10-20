
import React from 'react';
import type { Service } from '../types';
import { HomeIcon, GarageIcon, WrenchIcon, PlusIcon } from './icons/ServiceIcons';

const services: Service[] = [
  {
    icon: <HomeIcon />,
    title: 'Custom Home Building',
    description: 'From foundation to finish, we build beautiful, high-quality custom homes tailored to your lifestyle in the Tri-Cities area.',
  },
  {
    icon: <GarageIcon />,
    title: 'Garage Builders',
    description: 'Need more space? We specialize in building custom garages, from simple two-car structures to fully-equipped workshops.',
  },
  {
    icon: <WrenchIcon />,
    title: 'Remodels & Renovations',
    description: 'Transform your existing space. We handle kitchen remodels, bathroom updates, basement finishing, and whole-home renovations.',
  },
  {
    icon: <PlusIcon />,
    title: 'Home Additions',
    description: 'Expand your living area with a seamless home addition. We manage the project from design to completion, matching your home\'s style.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="text-amber-500 mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
    <p className="text-slate-600">{service.description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Construction Services</h2>
        <p className="max-w-3xl mx-auto text-slate-600 mb-12">
          We offer a comprehensive range of general contracting services to meet the needs of clients throughout Kennewick and the surrounding Washington counties.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
