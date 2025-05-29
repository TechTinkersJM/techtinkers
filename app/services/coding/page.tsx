"use client";

import { Code, Terminal, GitBranch, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CodingPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Code className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Code Explorers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the magic of coding through interactive projects and games.
          </p>
        </div>

        {/* Program Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Terminal className="w-5 h-5 mt-1 text-primary" />
                <span>Learn programming fundamentals through interactive coding exercises</span>
              </li>
              <li className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 mt-1 text-primary" />
                <span>Create your own games and applications</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 mt-1 text-primary" />
                <span>Build and deploy web applications</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Basic programming concepts</li>
              <li>• Web development fundamentals</li>
              <li>• Game development basics</li>
              <li>• Problem-solving skills</li>
              <li>• Project planning and management</li>
              <li>• Debugging and testing</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Start Your Coding Adventure!</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our coding workshops and learn to create amazing things with code.
          </p>
          <Link href="/signup">
            <Button size="lg">Enroll Now</Button>
          </Link>
        </div>

        {/* Schedule */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Workshop Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Beginner Level</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Monday: 4:00 PM - 6:00 PM</li>
                <li>• Saturday: 10:00 AM - 12:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Level</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Tuesday: 4:00 PM - 6:00 PM</li>
                <li>• Saturday: 2:00 PM - 4:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}