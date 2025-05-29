"use client";

import { Bot, Wrench, Cpu, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const beginnerRobots = [
  {
    name: "Line Follower",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A simple robot that follows a line using sensors",
    difficulty: "Easy",
    time: "2-3 hours",
  },
  {
    name: "Obstacle Avoider",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Robot that detects and avoids obstacles",
    difficulty: "Easy",
    time: "3-4 hours",
  },
  {
    name: "Simple Arm",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Basic robotic arm with servo motors",
    difficulty: "Moderate",
    time: "4-5 hours",
  },
];

export default function BeginnerRobotsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Bot className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Beginner Robots</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your robotics journey with these fun and educational projects.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Easy to Build</h3>
            <p className="text-muted-foreground">
              Simple components and clear instructions make assembly straightforward.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Cpu className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Basic Programming</h3>
            <p className="text-muted-foreground">
              Learn fundamental programming concepts through hands-on projects.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Learn Core Concepts</h3>
            <p className="text-muted-foreground">
              Understand basic robotics principles and electronics.
            </p>
          </div>
        </div>

        {/* Robot Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {beginnerRobots.map((robot, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={robot.image}
                  alt={robot.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{robot.name}</h3>
                <p className="text-muted-foreground mb-4">{robot.description}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Difficulty: {robot.difficulty}</span>
                  <span>Time: {robot.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Building?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our beginner robotics class and start creating your own robots!
          </p>
          <Link href="/signup">
            <Button size="lg">Enroll Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}