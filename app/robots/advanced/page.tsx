"use client";

import { Bot, Cpu, Wrench, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const advancedRobots = [
  {
    name: "Humanoid Robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Advanced bipedal robot with multiple degrees of freedom",
    difficulty: "Expert",
    time: "20-25 hours",
  },
  {
    name: "Autonomous Drone",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Self-navigating aerial robot with computer vision",
    difficulty: "Advanced",
    time: "15-20 hours",
  },
  {
    name: "AI-Powered Robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Robot with machine learning capabilities",
    difficulty: "Expert",
    time: "25-30 hours",
  },
];

export default function AdvancedRobotsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Bot className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Robotics</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take your robotics skills to the next level with these advanced projects.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Cpu className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Complex Systems</h3>
            <p className="text-muted-foreground">
              Work with advanced sensors, actuators, and control systems.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Advanced Programming</h3>
            <p className="text-muted-foreground">
              Implement sophisticated algorithms and AI capabilities.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-muted-foreground">
              Create unique solutions and push the boundaries of robotics.
            </p>
          </div>
        </div>

        {/* Robot Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advancedRobots.map((robot, index) => (
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
          <h2 className="text-3xl font-bold mb-6">Ready for Advanced Robotics?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our advanced robotics program and create sophisticated robots!
          </p>
          <Link href="/signup">
            <Button size="lg">Enroll Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}