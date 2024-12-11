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