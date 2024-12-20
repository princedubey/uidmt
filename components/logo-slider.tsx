"use client";

import Image from "next/image";

const logos = [
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Company 1",
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Company 2",
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Company 3",
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Company 4",
  },
  {
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    alt: "Company 5",
  },
];

const LogoSlider = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-r  from-purple-700 to-blue-900">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-3xl font-bold  mb-4">
            Join the 3,800+ companies growing with us
          </h2>
          <a
            href="#case-studies"
            className="text-gray-300 font-semibold inline-flex items-center"
          >
            View our case studies
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {[...logos, ...logos , ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 w-48 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-700 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
