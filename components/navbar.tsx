"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center font-semibold">
          <BookOpen className="h-6 w-6 mr-2" />
          <span>LMS Platform</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden p-2"
          onClick={toggleSidebar}
        >
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <div className="ml-auto hidden lg:flex items-center space-x-4">
          <Link href="/courses">
            <Button variant="ghost">Courses</Button>
          </Link>
          <Link href="/offline-classes">
            <Button variant="ghost">Offline Classes</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost">Blogs</Button>
          </Link>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-800 shadow-md transform transition-all duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-xl">
            ×
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/courses">
            <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
              Courses
            </Button>
          </Link>
          <Link href="/offline-classes">
            <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
              Offline classes
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
              Dashboard
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
              Blogs
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button onClick={() => setSidebarOpen(false)}>Login</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
