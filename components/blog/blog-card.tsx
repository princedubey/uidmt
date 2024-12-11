"use client";

import { BlogCardProps } from "@/types/blog";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.id}`}>
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
          </div>
        </div>
        
        <Link href={`/blog/${post.id}`} className="group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
      </div>
    </div>
  );
}