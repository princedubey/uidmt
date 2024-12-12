export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Digital Marketing' | 'Web Development';
  topics: string[];
}

export interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}


export interface EnrolledCourse {
  id: number;
  title: string;
  progress: number; // Represents the progress percentage
  nextLesson: string;
  thumbnail: string; // URL to the course thumbnail image
}