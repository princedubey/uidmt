import React from 'react';
import { Star, Users, BarChart, Clock, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CourseHeader = () => {
  return (
    <div className="min-h-[300px] py-20  ">
      <div className='mx-2'>
        {/* Badge */}
        <Badge className="bg-blue-600 hover:bg-blue-700 text-white mb-6">
          Digital Marketing
        </Badge>

        {/* Title */}
        <h1 className="w-[80%] text-4xl md:text-5xl font-bold text-white mb-6">
          The Complete Digital Marketing Course - 12 Courses in 1
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-8 max-w-3xl">
          Satisfied conveying a dependent contented he gentleman agreeable do be. 
          Warrant private blushes removed an in equally totally if. Delivered dejection 
          necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-6 text-white">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>4.5/5.0</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-400" />
            <span>12k Enrolled</span>
          </div>

          <div className="flex items-center gap-2">
            <BarChart className="w-5 h-5 text-green-400" />
            <span>All levels</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-400" />
            <span>Last updated 09/2021</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;