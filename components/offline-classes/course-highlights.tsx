"use client";

import { CheckCircle2 } from 'lucide-react';

export default function CourseHighlights() {
  const highlights = [
    "Live interactive sessions with industry experts",
    "Real-world project development experience",
    "24/7 mentor support during the course",
    "Job placement assistance after completion",
    "Industry-recognized certification",
    "Access to exclusive learning resources"
  ];

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Course Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-success mt-1" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}