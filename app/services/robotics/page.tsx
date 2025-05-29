"use client";

import { RocketIcon, Code, Cpu, Wrench, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RoboticsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <RocketIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Robotics Adventure</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Embark on an exciting journey into the world of robotics with our hands-on learning program.
          </p>
        </div>

        {/* Program Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 mt-1 text-primary" />
                <span>Learn basic programming concepts through visual and text-based coding</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 mt-1 text-primary" />
                <span>Build and program various types of robots using industry-standard components</span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-5 h-5 mt-1 text-primary" />
                <span>Understand mechanical engineering principles through practical applications</span>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="w-5 h-5 mt-1 text-primary" />
                <span>Develop problem-solving skills through project-based learning</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Robot design and construction</li>
              <li>• Sensor integration and programming</li>
              <li>• Motion control and navigation</li>
              <li>• Basic AI and automation concepts</li>
              <li>• Team collaboration and project management</li>
              <li>• Safety protocols and best practices</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Robotics Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our next robotics class and start building amazing robots while learning valuable STEM skills.
          </p>
          <Link href="/signup">
            <Button size="lg">Enroll Now</Button>
          </Link>
        </div>

        {/* Schedule */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Class Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Beginner Level</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Saturday: 9:00 AM - 11:00 AM</li>
                <li>• Wednesday: 4:00 PM - 6:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Level</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Saturday: 1:00 PM - 3:00 PM</li>
                <li>• Thursday: 4:00 PM - 6:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}