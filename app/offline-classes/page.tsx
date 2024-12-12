"use client";

import { ClassCard } from "@/components/offline-classes/class-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { offlineClasses } from "@/lib/offline-classes";
import { Search } from "lucide-react";
import { useState } from "react";


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