'use client'
import React, { useState } from 'react'
import CourseHeader from '@/components/courses/course-header'
import CourseDetailCategory from '@/components/courses/course-detail-category'
import OverviewSection from '@/components/courses/overview-section'
import CurriculumSection from '@/components/courses/curriculum-section'

const CourseDetailPage = () => {
  const [activeTab, setActiveTab] = React.useState("Overview");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const renderComponent = () => (
    <>
      {activeTab === "Overview" && <OverviewSection />}
      {activeTab === "Curriculum" && <CurriculumSection />}
      {/* {activeTab === "Instructor" && <InstructorSection />}
      {activeTab === "Reviews" && <ReviewsSection />}
      {activeTab === "FAQs" && <FAQsSection />} */}
    </>
  )


  return (
    <section className='w-full max-w-7xl mx-auto md:px-8 px-4 '>
      <CourseHeader/>
      <div className='flex lg:flex-row flex-col  justify-between my-8'>
        <div className='lg:w-[65%]  w-full min-h-[200px] bg-base-200 rounded-lg ml-2'>
           <CourseDetailCategory activeTab={activeTab} handleTabChange={handleTabChange}/>
           <div className='h-px w-full bg-gray-500 my-4'></div>
          {renderComponent()}
        </div>
        <div className='lg:w-[30%] w-full gap-4 flex lg:flex-col lg:mt-0 mt-6 flex-row  rounded-lg mr-2'>
        {/* <div className="p-6 bg-gray-900 min-h-screen text-white"> */}
      {/* <div className="max-w-4xl mx-auto w-full"> */}
        {/* Course Overview Section */}
        <div className="lg:w-full w-1/2  bg-gray-800 shadow-lg rounded-lg p-6 ">
          <div className="flex flex-col ">
            {/* Image Section */}
            <div className=" mb-4 md:mb-0">
              <div className="bg-gray-700 rounded-lg w-full h-48 flex items-center justify-center">
                <span className="text-white text-2xl">🎥</span>
              </div>
            </div>

            {/* Info Section */}
            <div className=" my-4">
              <h2 className="text-2xl font-semibold mb-2">₹150 <span className="mx-2 line-through text-gray-400 text-sm">₹350</span> <span className="bg-teal-400 text-xs rounded-md py-1 px-2">60% off</span></h2>
              <p className="text-base text-red-500 mb-4">⏳ 5 days left at this price</p>
              <div className="flex justify-between space-x-4">
                <button className="btn btn-outline btn-primary">Free trial</button>
                <button className="btn btn-success ">Buy course</button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Includes Section */}
        <div className="lg:w-full w-1/2 bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">This course includes</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">📘</span>
              Lectures: 30
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">⏱</span>
              Duration: 4h 50m
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">📊</span>
              Skills: Beginner
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">🌍</span>
              Language: English
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">📅</span>
              Deadline: Nov 30 2021
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">🏅</span>
              Certificate: Yes
            </li>
          </ul>
        </div>
      </div>
    </div>
        {/* </div> */}

      {/* </div> */}

    </section>
  )
}

export default CourseDetailPage
