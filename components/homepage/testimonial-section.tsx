import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import StudentImage from "../../app/assets/student-image.jpeg";

const testimonials = [
  {
    id: 1,
    text: "This platform has completely changed how I approach learning. The instructors are amazing!",
    author: "Sarah Johnson",
    rating: 5,
    image: `${StudentImage.src}`
  },
  {
    id: 2,
    text: "This platform has completely changed how I approach learning. The instructors are amazing!",
    author: "Michael Chen",
    rating: 5,
    image: `${StudentImage.src}`
  },
  {
    id: 3,
    text: "This platform has completely changed how I approach learning. The instructors are amazing!",
    author: "Emma Davis",
    rating: 5,
    image: `${StudentImage.src}`
  },
//   {
//     id: 4,
//     text: "This platform has completely changed how I approach learning. The instructors are amazing!",
//     author: "David Wilson",
//     rating: 5,
//     image: "/api/placeholder/80/80"
//   }
];

const TestimonialsSection = () => {
  return (
    <div className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl text-center md:text-5xl font-bold  bg-clip-text text-gray-100 uppercase mb-4">
          What Our <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">Students</span> Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>

          <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials
              .map((testimonial, i) => (
                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                  >
                                    <div className="bg-base-100 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-purple-500/20">
                                      <div className="flex items-center gap-4 mb-6">
                                        <div className="relative">
                                            <Image
                                              src={testimonial.image}
                                              alt={testimonial.author}
                                              objectFit="cover"
                                              width={50}
                                              height={80}
                                            />
                                          <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-1">
                                            <Star className="w-4 h-4 fill-white text-white" />
                                          </div>
                                        </div>
                                        <div>
                                          <h3 className="text-xl font-semibold text-white mb-1">
                                            {testimonial.author}
                                          </h3>
                                          <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                              <Star
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                              />
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                      <p className="text-base text-gray-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
                                    </div>
                                  </div>
                 ))}
          </div>
        </div>
  );
};

export default TestimonialsSection;