"use client";

import { Code, Medal, Timer, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CodeOlympicsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Medal className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Code Olympics</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your coding skills in our exciting programming competition!
          </p>
        </div>

        {/* Competition Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Event Overview</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 mt-1 text-primary" />
                <span>Solve challenging programming problems</span>
              </li>
              <li className="flex items-start gap-3">
                <Timer className="w-5 h-5 mt-1 text-primary" />
                <span>Time-based challenges for different skill levels</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 mt-1 text-primary" />
                <span>Individual and team competitions</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Algorithm Challenge</li>
              <li>• Web Development</li>
              <li>• Game Programming</li>
              <li>• Data Analysis</li>
              <li>• Creative Coding</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Join the Competition!</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Show off your coding skills and compete for amazing prizes!
          </p>
          <Link href="/signup">
            <Button size="lg">Register Now</Button>
          </Link>
        </div>

        {/* Competition Format */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Competition Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Preliminary Round</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Online qualification round</li>
                <li>• Multiple choice questions</li>
                <li>• Basic coding challenges</li>
                <li>• Top 50% advance to finals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Final Round</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Live coding challenges</li>
                <li>• Project presentation</li>
                <li>• Problem-solving tasks</li>
                <li>• Awards ceremony</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}