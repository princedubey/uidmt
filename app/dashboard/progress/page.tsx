"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, Target } from "lucide-react";

export default function StudentProgress() {
  const progressData = {
    totalHours: 45.5,
    coursesCompleted: 3,
    currentStreak: 7,
    achievements: [
      { name: "Fast Learner", description: "Complete 5 lessons in one day" },
      { name: "Consistent", description: "Maintain a 7-day streak" },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Learning Progress</h1>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.totalHours}h</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.coursesCompleted}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.currentStreak} days</div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
      <div className="grid gap-4">
        {progressData.achievements.map((achievement, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Award className="h-5 w-5 mr-2 text-primary" />
              <CardTitle className="text-lg">{achievement.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}