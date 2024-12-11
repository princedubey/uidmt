"use client";

import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-posts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link href="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <article className="max-w-3xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="flex items-center gap-4 mb-6">
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

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-3 mb-8">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10 rounded-full"
          />
          <span className="font-medium">{post.author.name}</span>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}