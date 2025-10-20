
import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  imageUrl: string;
  category: string;
  title: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}
