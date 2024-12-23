'use client'
import React from 'react'
import CourseHero from '@/components/offline-classes/course-hero'
import CourseHighlights from '@/components/offline-classes/course-highlights'
import { Calendar, Clock, MapPin, Timer, Bookmark, Share2, Dot } from 'lucide-react'
import CourseEnquiryForm from '@/components/offline-classes/enquiry-form'


const OfflineCourseDetailPage = () => {
  const course = {
    course_id: "OFF001",
    title: "Advanced Web Development Bootcamp",
    description: "Master modern web development with this comprehensive bootcamp. Learn the latest technologies and best practices in web development through hands-on projects and real-world applications. This intensive program is designed to take you from basics to advanced concepts in web development.",
    price: 999.99,
    discount_price: 799.99,
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    tags: ["Web Development", "JavaScript", "React", "Node.js", "MongoDB", "Express"],
    level: "Advanced",
    startFrom: new Date("2024-04-01"),
    endAt: new Date("2024-07-01"),
    location: "Tech Hub, Silicon Valley",
    batchSize: 25,
    status: "active",
    ratings: [4, 5, 5, 4, 5],
    couponCodes: ["EARLY20", "SPRING30"],
    duration: "3 months",
    schedule: "Mon-Fri, 6:00 PM - 9:00 PM",
    prerequisites: ["Basic JavaScript knowledge", "HTML & CSS fundamentals", "Programming basics"]
  };

  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = React.useState(false);
  
  return (
    <div >
      <CourseHero 
        title={course.title}
        thumbnail={course.thumbnail}
        ratings={course.ratings}
        duration={course.duration}
        batchSize={course.batchSize}
        level={course.level}
      />
         {/* Course Details */}
         <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">About This Course</h2>
                <p className="text-lg mb-6">{course.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5  text-purple-400" />
                    <div>
                      <p className="font-semibold">Start Date</p>
                      <p className='text-gray-400'>{course.startFrom.toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="font-semibold">Schedule</p>
                      <p className='text-gray-400'>{course.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className='text-gray-400'>{course.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Timer className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className='text-gray-400'>{course.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className='text-base text-gray-300'><span>
                        <Dot className='inline-block text-purple-400'/>
                      </span>{prereq}</li>
                  ))}
                </ul>
              </div>
            </div>
            <CourseHighlights/>
          </div>
          
          {isEnquiryFormOpen? <CourseEnquiryForm setIsEnquiryFormOpen={setIsEnquiryFormOpen}/>:<></>}
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-3xl font-bold text-primary">₹{course.discount_price}</p>
                      {course.discount_price < course.price && (
                        <p className="text-lg line-through text-gray-500">₹{course.price}</p>
                      )}
                    </div>
                    <div className="badge badge-accent">{course.level}</div>
                  </div>

                  <button 
                    onClick={() => {
                       setIsEnquiryFormOpen(true);
                    }}
                    className="btn btn-primary btn-block mb-2">Enquiry Now</button>
                  <div className="flex gap-2">
                    <button className="btn btn-outline btn-block flex-1">
                      <Bookmark className="w-4 h-4" />
                      Save
                    </button>
                    <button className="btn btn-outline btn-block flex-1">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>

                  <div className="divider"></div>

                  <h3 className="font-semibold mb-2">Available Coupons</h3>
                  <div className="space-y-2">
                    {course.couponCodes.map((code, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-base-300 rounded-lg">
                        <code className="text-primary">{code}</code>
                        <button className="btn btn-xs btn-ghost">Copy</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default OfflineCourseDetailPage
