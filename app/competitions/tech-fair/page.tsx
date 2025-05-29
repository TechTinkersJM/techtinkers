"use client";

import { Lightbulb, Presentation as PresentationScreen, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TechFairPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Lightbulb className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Fair</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase your innovative projects and inspire others!
          </p>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Event Overview</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <PresentationScreen className="w-5 h-5 mt-1 text-primary" />
                <span>Present your tech projects to the community</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-1 text-primary" />
                <span>Win awards in various categories</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 mt-1 text-primary" />
                <span>Network with other young innovators</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Project Categories</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Robotics Innovation</li>
              <li>• Software Applications</li>
              <li>• Environmental Technology</li>
              <li>• Educational Technology</li>
              <li>• Smart Devices</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Showcase Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our next Tech Fair and share your innovative ideas with the world!
          </p>
          <Link href="/signup">
            <Button size="lg">Register Your Project</Button>
          </Link>
        </div>

        {/* Event Schedule */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Morning Session</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 9:00 AM - Registration</li>
                <li>• 10:00 AM - Opening Ceremony</li>
                <li>• 10:30 AM - Project Setup</li>
                <li>• 11:00 AM - Public Viewing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Afternoon Session</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 1:00 PM - Project Presentations</li>
                <li>• 3:00 PM - Judging Round</li>
                <li>• 4:00 PM - Awards Ceremony</li>
                <li>• 5:00 PM - Networking Session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}