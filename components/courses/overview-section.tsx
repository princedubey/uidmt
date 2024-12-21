import React from 'react'

const OverviewSection = () => {
  return (
    <div>
      <div className="p-8">
          <h1 className="text-2xl font-bold">Course Description</h1>
          <p className="mt-4 text-gray-300">
            Welcome to the <strong>Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)</strong>
          </p>
          <p className="mt-2  text-gray-300">
            In this practical hands-on training, you’re going to learn to become a digital marketing expert with this
            ultimate course bundle that includes 12 digital marketing courses in 1!
          </p>
          <p className="mt-2  text-gray-300">
            If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in
            India or anywhere around the world, then reading this blog will help. Before we delve into the advanced
            <strong>digital marketing course</strong> syllabus, let’s look at the scope of digital marketing and what the
            future holds.
          </p>
          <p className="mt-2  text-gray-300">
            We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial
            for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid
            foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is
            packed with practical hands-on examples that you can follow step by step.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4">What you’ll learn</h2>
          <ul className="space-y-2">
            {[
              "Digital marketing course introduction",
              "Customer Life cycle",
              "What is Search engine optimization (SEO)",
              "Facebook ADS",
              "Facebook Messenger Chatbot",
              "Search engine optimization tools",
              "Why SEO",
              "URL Structure",
              "Featured Snippet",
              "SEO tips and tricks",
              "Google tag manager",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default OverviewSection
