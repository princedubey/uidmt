"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface EnrolledCourse {
  id: number;
  title: string;
  progress: number; // Represents the progress percentage
  nextLesson: string;
  thumbnail: string; // URL to the course thumbnail image
}

const enrolledCourses: EnrolledCourse[] = [
  {
    id: 1,
    title: "Web Development Basics",
    progress: 65,
    nextLesson: "CSS Layouts",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Web Development",
    progress: 50,
    nextLesson: "CSS Layouts",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Advanced React Patterns",
    progress: 30,
    nextLesson: "Custom Hooks",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
  },
];

export default function StudentCourses() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader className="space-y-0 pb-2">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Next Lesson: {course.nextLesson}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}