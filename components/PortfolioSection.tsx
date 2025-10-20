
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    imageUrl: 'https://picsum.photos/500/350?image=835',
    category: 'New Construction',
    title: 'Modern Family Home in Kennewick',
  },
  {
    imageUrl: 'https://picsum.photos/500/350?image=219',
    category: 'Garage Building',
    title: 'Detached Three-Car Garage',
  },
  {
    imageUrl: 'https://picsum.photos/500/350?image=571',
    category: 'Kitchen Remodel',
    title: 'Gourmet Kitchen Update',
  },
  {
    imageUrl: 'https://picsum.photos/500/350?image=1072',
    category: 'Home Addition',
    title: 'Second Story Master Suite',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <p className="text-sm font-semibold uppercase text-amber-400">{project.category}</p>
      <h3 className="text-xl font-bold">{project.title}</h3>
    </div>
  </div>
);

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Recent Work</h2>
        <p className="max-w-3xl mx-auto text-slate-600 mb-12">
          Take a look at some of the projects we're proud to have built for our clients in the Tri-Cities area.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
