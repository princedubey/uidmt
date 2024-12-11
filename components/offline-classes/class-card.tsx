"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { OfflineClass } from "@/types/offline-class";
import Link from "next/link";

interface ClassCardProps {
  classData: OfflineClass;
}

export function ClassCard({ classData }: ClassCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{classData.title}</h3>
        <p className="text-muted-foreground mb-4">{classData.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Starts {new Date(classData.startDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span>{classData.schedule}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{classData.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2" />
            <span>Batch Size: {classData.batchSize} students</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{classData.price}</span>
          <Link href={`/offline-classes/${classData.id}`}>
            <Button>Enquire Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}