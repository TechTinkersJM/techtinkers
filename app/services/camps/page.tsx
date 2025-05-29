"use client";

import { Tent, Sun, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CampsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Tent className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Summer Tech Camps</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immersive technology learning experiences during school breaks.
          </p>
        </div>

        {/* Camp Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Camp Overview</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Sun className="w-5 h-5 mt-1 text-primary" />
                <span>Full-day summer camps with exciting tech activities</span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-5 h-5 mt-1 text-primary" />
                <span>Weekly sessions throughout summer break</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 mt-1 text-primary" />
                <span>Small group sizes for personalized attention</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Activities Include</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Robotics projects</li>
              <li>• Coding challenges</li>
              <li>• 3D printing workshops</li>
              <li>• Electronics experiments</li>
              <li>• Team building activities</li>
              <li>• Tech presentations</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Join Our Summer Tech Adventure!</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Make this summer memorable with hands-on technology learning experiences.
          </p>
          <Link href="/signup">
            <Button size="lg">Register Now</Button>
          </Link>
        </div>

        {/* Schedule */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Summer 2025 Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">June Sessions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Week 1: June 2-6</li>
                <li>• Week 2: June 9-13</li>
                <li>• Week 3: June 16-20</li>
                <li>• Week 4: June 23-27</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">July Sessions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Week 5: July 7-11</li>
                <li>• Week 6: July 14-18</li>
                <li>• Week 7: July 21-25</li>
                <li>• Week 8: July 28-Aug 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}