"use client";

import { Star, Clock, Users, Award } from 'lucide-react';

interface CourseHeroProps {
  title: string;
  thumbnail: string;
  ratings: number[];
  duration: string;
  batchSize: number;
  level: string;
}

export default function CourseHero({ title, thumbnail, ratings, duration, batchSize, level }: CourseHeroProps) {
  const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  return (
    <div className="relative min-h-[60vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url(${thumbnail})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6 max-w-3xl">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="badge badge-primary gap-1">
              <Clock className="w-3 h-3" /> {duration}
            </span>
            <span className="badge badge-secondary gap-1">
              <Users className="w-3 h-3" /> {batchSize} Students
            </span>
            <span className="badge badge-accent gap-1">
              <Award className="w-3 h-3" /> {level}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{title}</h1>
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < averageRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
            ))}
            <span className="text-white ml-2 text-lg">({ratings.length} reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}