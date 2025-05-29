"use client";

import { Bot, Wrench, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const customProjects = [
  {
    name: "Smart Home Robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Design a robot to help with home automation",
    category: "Home Automation",
  },
  {
    name: "Educational Robot",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Create a robot that helps teach specific subjects",
    category: "Education",
  },
  {
    name: "Environmental Robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Build a robot for environmental monitoring",
    category: "Environment",
  },
];

export default function CustomRobotsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Bot className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Design and build your own unique robotics projects with expert guidance.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
            <p className="text-muted-foreground">
              Work with experienced mentors to bring your ideas to life.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Collaborative Learning</h3>
            <p className="text-muted-foreground">
              Join a community of innovative builders and creators.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Goal-Oriented</h3>
            <p className="text-muted-foreground">
              Focus on projects that solve real-world problems.
            </p>
          </div>
        </div>

        {/* Example Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {customProjects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-card p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Development</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>1. Initial Consultation</li>
                <li>2. Project Planning</li>
                <li>3. Design Phase</li>
                <li>4. Component Selection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>5. Construction</li>
                <li>6. Programming</li>
                <li>7. Testing</li>
                <li>8. Final Refinements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to turn your robotics ideas into reality!
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}