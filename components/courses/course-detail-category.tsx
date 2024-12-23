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

interface CourseDetailCategoryProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const CourseDetailCategory: React.FC<CourseDetailCategoryProps> = ({ activeTab, handleTabChange }) => {

  return (
    <div className="flex flex-wrap gap-8 pt-4 px-6">
      {categories.map((category: CourseDetailsCategory, index: number) => (
      <Button 
        onClick={() => handleTabChange(category.category)}
        variant={activeTab === category.category ? 'default' : 'outline'}
        className='h-8 text-sm'
        key={index}>{category.category}</Button>
      ))}
    </div>
  )
}

export default CourseDetailCategory
