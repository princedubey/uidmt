import React from "react";
import {  Play} from 'lucide-react'

const CurriculumSection = () => {
  return (
    <div className="p-6">
        {
            Array.from({length: 5}).map((_, index) => {
              return (
                <div key={index} className="collapse collapse-arrow mb-2">
<input type="checkbox" />
        
        <div className="collapse-title font-semibold text-md  rounded-md bg-base-100">
          Introduction of Digital Marketing (3 Lectures)
        </div>
        <div className="collapse-content bg-base-200 text-base py-4">
          <ul className="space-y-2">
            <li className="group  transition duration-300 flex justify-between items-center px-2 py-3">
              <div className="flex items-center">
                 <div className=" mr-2  group-hover:bg-purple-600 bg-purple-500/30 p-2 rounded-full">
                        <Play size={18} />
                 </div>
                 <h1>Introduction</h1>
              </div>
              
              <span className="text-gray-400">2m 10s</span>
            </li>
            <div className="h-px w-full bg-gray-700 my-4"></div>

            <li className="group  transition duration-300 flex justify-between items-center px-2 py-3">
            <div className="flex items-center">
                 <div className=" mr-2  group-hover:bg-purple-600 bg-purple-500/30 p-2 rounded-full">
                        <Play size={18} />
                 </div>
                 <h1>What is Digital Marketing</h1>
              </div>
              <span className="text-gray-400">15m 10s</span>
            </li>
            <div className="h-px w-full bg-gray-700 my-4"></div>
            <li className="group  transition duration-300 flex justify-between items-center px-2 py-3">
            <div className="flex items-center">
                 <div className=" mr-2  group-hover:bg-purple-600 bg-purple-500/30 p-2 rounded-full">
                        <Play size={18} />
                 </div>
                 <h1>Type of Digital Marketing</h1>
              </div>
              <span className="text-gray-400">2m 10s</span>
            </li>
          </ul>
        </div>
                </div>
              )
            })
        }

      {/* <div className="collapse collapse-arrow mb-2">
        
      </div> */}
      
    </div>
  );
};

export default CurriculumSection;
