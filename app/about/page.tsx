"use client";

import { RocketIcon, Users, Award, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <RocketIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechTinkers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of innovators through hands-on technology education and robotics exploration.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To inspire and educate young minds in technology, robotics, and engineering through engaging, hands-on learning experiences.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, creativity, collaboration, and a commitment to excellence in everything we do.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg text-center">
            <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the leading technology education provider, nurturing the tech leaders of tomorrow.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-card p-12 rounded-2xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2020, TechTinkers emerged from a passion for making technology education accessible and engaging for young minds. What started as a small robotics workshop has grown into a comprehensive technology education center.
            </p>
            <p>
              Our team of dedicated educators and technology experts brings together years of experience in robotics, programming, and engineering. We believe in learning by doing, and our hands-on approach has helped hundreds of students discover their passion for technology.
            </p>
            <p>
              Today, we offer a wide range of programs including robotics classes, coding workshops, and STEM camps. Our state-of-the-art facility provides students with access to the latest technology and tools, enabling them to explore, create, and innovate.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Students Taught</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Robotics Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Expert Instructors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}