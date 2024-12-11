export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: 'Digital Marketing' | 'Web Development' | 'Career Tips';
  image: string;
  publishedAt: string;
  readTime: number;
}

export interface BlogCardProps {
  post: BlogPost;
}