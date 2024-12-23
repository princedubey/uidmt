"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Video, Brain, Award } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import heroImage from "../app/assets/Untitled_design-removebg-preview.webp";
import GradientBlob from "./gradient-blob";

export default function Hero() {

  const { theme } = useTheme();

  return (
    <main className="h-auto w-screen bg-gradient-to-br dark:from-gray-900">
      <div className="max-w-7xl mx-auto  px-6  lg:px-8 py-12">
      {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div className="space-y-6 pl-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              India&apos;s{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Biggest & Most Trusted
              </span>
              <br />
              Educational Platform
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Unlock your potential by signing up with UIDMT-
              The most affordable learning solution
            </p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started
            </Button>
            {/* <GradientBlob height="100px" width="100px"/> */}
          </div>

          <div className="relative hidden lg:block">
            <div>
              <Image
                src={heroImage}
                alt="Hero Image"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <GradientBlob />
            <div className="absolute top-4 left-60 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
              <div className="flex items-start gap-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">Gaurav Sir, What is UIDMT?</p>
              </div>
            </div>
            <div className="absolute bottom-0 right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900" />
                <div>
                  <p className="mt-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                    UIDMT is India&apos;s leading Edtech Company that is democratizing education at Scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <Card className="p-6 flex flex-col justify-center items-center hover:shadow-lg transition-shadow">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-100 dark:border-gray-800 mb-4">
              <div className=" w-12 h-12 flex items-center justify-center rounded-full   bg-red-100 dark:bg-red-900 ">
                <Video className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Daily Live</h3>
            <p className="text-gray-600 dark:text-gray-300">Interactive classes</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-100 dark:border-gray-800 mb-4">

            <div className=" w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 ">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
            <h3 className="text-xl font-semibold mb-2">10 Million +</h3>
            <p className="text-gray-600 dark:text-gray-300">Tests, sample papers & notes</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-100 dark:border-gray-800 mb-4">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 ">
              <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
            <h3 className="text-xl font-semibold mb-2">24 x 7</h3>
            <p className="text-gray-600 dark:text-gray-300">Doubt solving sessions</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-100 dark:border-gray-800 mb-4">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 ">
              <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
            <h3 className="text-xl font-semibold mb-2">100 +</h3>
            <p className="text-gray-600 dark:text-gray-300">Offline centres</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
