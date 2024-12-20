import React from 'react'
import CourseHeader from '@/components/courses/course-header'

const CourseDetailPage = () => {
  return (
    <section className='w-full max-w-7xl mx-auto md:px-8 px-4 '>
      <CourseHeader/>
      <div className='flex  justify-between my-8'>
        <div className='w-[65%] min-h-[200px] bg-base-100 rounded-lg p-4 ml-2'>
           
        </div>
        <div className='w-[30%] bg-slate-800 p-4 rounded-lg mr-2'>

        </div>

      </div>

    </section>
  )
}

export default CourseDetailPage
