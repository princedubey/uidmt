import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';


interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals and experienced educators.'
  },
  {
    icon: BookOpen,
    title: 'Quality Content',
    description: 'Access carefully curated courses designed for effective learning.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a community of learners and grow together.'
  }
];

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl hover:-translate-y-1 transition-transform">
      <div className="card-body items-center text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="card-title text-xl">{title}</h3>
        <p className="text-base-content/70">{description}</p>
      </div>
    </div>
  );
}


const WhatWeServeSection = () => {
  return (
    <div className=' md:mx-0 mx-6'>
     <div className="text-center my-16">
          <h1 className="text-3xl md:text-5xl font-bold  text-white mb-4">
            WHAT WE 
            <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">SERVE</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
    </div>
      )
}

export default WhatWeServeSection
