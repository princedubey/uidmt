import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { User, Phone, Mail, BookOpen, Sparkles, GraduationCap,X  } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function CourseEnquiryForm({ setIsEnquiryFormOpen }:{setIsEnquiryFormOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      course: ''
    }
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const courses = [
    "UI/UX Design",
    "Digital Marketing",
    "Web Development",
    "Graphic Design",
    "Social Media Marketing"
  ];

  return (
    <div className="shadow-md  my-2 absolute z-50 left-[50%] -translate-x-[50%] max-w-3xl mx-auto w-full h-max bg-white dark:bg-gray-800 rounded-md p-6 flex items-center justify-center">
      <Card className="w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1">
          <div className="bg-white dark:bg-gray-900 p-7">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-700 dark:to-blue-700 rounded-full shadow-inner">
                  <GraduationCap size={36} className="text-purple-600 dark:text-purple-300" />
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Course Enquiry
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Transform Your Future with UIDMT</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative group">
                  <input
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Please enter a valid name"
                      }
                    })}
                    className={`input input-bordered w-full pr-10 py-4 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-xl transition-all duration-300 group-hover:border-purple-200 ${errors.name ? 'border-red-300' : ''}`}
                    placeholder="Enter your name"
                  />
                  <User size={18} className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.name ? 'text-red-400' : 'text-gray-400 dark:text-gray-300 group-hover:text-purple-400'} transition-colors duration-300`} />
                </div>
                {errors.name && (
                  <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Phone Number</span>
                </label>
                <div className="relative group">
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number"
                      }
                    })}
                    className={`input input-bordered w-full pr-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-xl transition-all duration-300 group-hover:border-purple-200 ${errors.phone ? 'border-red-300' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  <Phone size={18} className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.phone ? 'text-red-400' : 'text-gray-400 dark:text-gray-300 group-hover:text-purple-400'} transition-colors duration-300`} />
                </div>
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1">{errors.phone.message}</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email (Optional)</span>
                </label>
                <div className="relative group">
                  <input
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                    className={`input input-bordered w-full pr-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-xl transition-all duration-300 group-hover:border-purple-200 ${errors.email ? 'border-red-300' : ''}`}
                    placeholder="Enter your email"
                  />
                  <Mail size={18} className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.email ? 'text-red-400' : 'text-gray-400 dark:text-gray-300 group-hover:text-purple-400'} transition-colors duration-300`} />
                </div>
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Select Course</span>
                </label>
                <div className="relative group">
                  <select
                    {...register("course", {
                      required: "Please select a course"
                    })}
                    className={`select select-bordered w-full pr-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 rounded-xl transition-all duration-300 group-hover:border-purple-200 ${errors.course ? 'border-red-300' : ''}`}
                  >
                    <option value="">Choose your course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                  <BookOpen size={18} className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.course ? 'text-red-400' : 'text-gray-400 dark:text-gray-300 group-hover:text-purple-400'} transition-colors duration-300`} />
                </div>
                {errors.course && (
                  <span className="text-xs text-red-500 mt-1">{errors.course.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center justify-center gap-2 border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group"
              >
                Begin Your Journey
                <Sparkles size={18} className="group-hover:animate-pulse" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Join our community of successful professionals</p>
            </div>
          </div>
        </div>
      </Card>
      <Button 
       onClick={() => {
         setIsEnquiryFormOpen(false);
       }}
       variant={'outline'}
       className='absolute top-8 right-8'><X /></Button>

    </div>
  );
}