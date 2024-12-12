import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { enrolledCourses } from "@/lib/courses";


export default function page() {
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