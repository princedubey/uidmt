import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    description: "Master the fundamentals of digital marketing, from SEO to social media marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=115&q=80",
    price: "₹14,999",
    duration: "12 weeks",
    level: "Beginner",
    category: "Digital Marketing",
    topics: ["SEO", "Social Media Marketing", "Content Marketing", "Email Marketing", "PPC Advertising"]
  },
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "Learn to build modern web applications from front-end to back-end",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    price: "₹19,999",
    duration: "24 weeks",
    level: "Intermediate",
    category: "Web Development",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Design", "API Development"]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Create and execute winning social media strategies",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹12,999",
    duration: "8 weeks",
    level: "Beginner",
    category: "Digital Marketing",
    topics: ["Platform Strategy", "Content Creation", "Analytics", "Paid Advertising", "Community Management"]
  }
];