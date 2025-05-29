"use client";

import { Swords, Trophy, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RobotWarsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Swords className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Robot Wars</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build, battle, and compete in our exciting robot competition!
          </p>
        </div>

        {/* Competition Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Event Overview</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Trophy className="w-5 h-5 mt-1 text-primary" />
                <span>Compete for amazing prizes and recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-1 text-primary" />
                <span>Multiple challenge categories for different skill levels</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 mt-1 text-primary" />
                <span>Safe and supervised competition environment</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Sumo Wrestling</li>
              <li>• Obstacle Course</li>
              <li>• Speed Racing</li>
              <li>• Creative Design</li>
              <li>• Team Challenge</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-12 rounded-2xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready for the Challenge?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Register now for our next Robot Wars competition and showcase your robotics skills!
          </p>
          <Link href="/signup">
            <Button size="lg">Register Now</Button>
          </Link>
        </div>

        {/* Rules and Guidelines */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Competition Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">General Rules</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Robots must be original creations</li>
                <li>• Maximum size: 30cm x 30cm x 30cm</li>
                <li>• Weight limit: 1kg</li>
                <li>• Battery-powered only</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Safety Guidelines</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• No sharp edges or dangerous materials</li>
                <li>• Adult supervision required</li>
                <li>• Protective gear must be worn</li>
                <li>• Emergency stops required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}