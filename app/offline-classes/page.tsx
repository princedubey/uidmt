"use client";

import { ClassCard } from "@/components/offline-classes/class-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const offlineClasses= [
  {
    id: "digital-marketing-weekend",
    title: "Digital Marketing Weekend Batch",
    description: "Comprehensive digital marketing course with hands-on training and real project experience",
    schedule: "Saturday & Sunday, 10:00 AM - 2:00 PM",
    duration: "3 months",
    location: "Mumbai Central",
    price: "₹24,999",
    category: "Digital Marketing",
    startDate: "2024-02-15",
    batchSize: 20
  },
  {
    id: "web-development-fulltime",
    title: "Full Stack Development Intensive",
    description: "Intensive full-stack web development bootcamp with placement assistance",
    schedule: "Monday to Friday, 9:00 AM - 5:00 PM",
    duration: "4 months",
    location: "Andheri West",
    price: "₹49,999",
    category: "Web Development",
    startDate: "2024-02-01",
    batchSize: 15
  },
  {
    id: "digital-marketing-evening",
    title: "Digital Marketing Evening Batch",
    description: "Evening batch for working professionals covering all aspects of digital marketing",
    schedule: "Monday to Friday, 6:30 PM - 8:30 PM",
    duration: "4 months",
    location: "Powai",
    price: "₹29,999",
    category: "Digital Marketing",
    startDate: "2024-02-10",
    batchSize: 25
  }
];

export default function OfflineClassesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredClasses = offlineClasses.filter((classItem) => {
    const matchesSearch = classItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || classItem.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Offline Classes</h1>
        <p className="text-xl text-muted-foreground">
          Join our classroom training programs and learn directly from industry experts
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search classes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "Digital Marketing" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Digital Marketing")}
          >
            Digital Marketing
          </Button>
          <Button
            variant={selectedCategory === "Web Development" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Web Development")}
          >
            Web Development
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredClasses.map((classItem) => (
          <ClassCard key={classItem.id} classData={classItem} />
        ))}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No classes found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}