import React from 'react'
import { Button } from '../ui/button';

interface CourseDetailsCategory {
  category: string;
  
}

const categories:CourseDetailsCategory[] = [
   {category:"Overview"},
    {category:"Curriculum"},
    {category:"Instructor"},
    {category:"Reviews"}, 
    {category:"FAQs"}
] 

const CourseDetailCategory: React.FC = () => {
  return (
    <div>
      {categories.map((category: CourseDetailsCategory, index: number) => (
      <Button key={index}>{category.category}</Button>
      ))}
    </div>
  )
}

export default CourseDetailCategory
