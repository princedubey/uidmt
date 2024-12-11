"use client";

import { Button } from "@/components/ui/button";
import { CourseCardProps } from "@/types/course";
import Link from "next/link";

export function CourseCard({ title, description, image, price }: CourseCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          <Link href={`/courses/${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`}>
            <Button>Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}