import { ReactNode } from 'react';

export interface StatProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export interface ServiceProps {
  title: string;
  description: string[];
  icon: ReactNode;
}

export interface CategoryProps {
  name: string;
  items: string;
  margin: string;
  icon: ReactNode;
  image: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  metric?: string;
}

export interface OfferProps {
  title: string;
  items: string[];
  icon: ReactNode;
}