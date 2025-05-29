"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Notebook, Trophy, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { RobotBuilder } from "@/components/robot-builder";

const bannerImages = [
  
  {
    url: "images/FullLogo.png",
    title: "",
    description: "",
  },
  {
    url: "./images/Trio.png",
    title: "Team Energy",
    description: "Meet our team as we set course for discovery and experiments!",
  },
  {
    url: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Inspiring Young Minds",
    description: "Building tomorrow's innovators through hands-on technology education",
  },
  {
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Learn Robotics",
    description: "Discover the exciting world of robotics and engineering",
  },
  {
    url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Code Your Future",
    description: "Master programming skills through interactive projects",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0 z-0">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-80" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <Bot className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            {bannerImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            {bannerImages[currentSlide].description}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-lg">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/50 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-primary/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/50 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Interactive Robot Builder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Build Your Robot</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Design your own robot by mixing and matching different parts. This is just a taste of what you'll learn in our robotics classes!
          </p>
          <RobotBuilder />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">STEM Workshops</h3>
              <p className="text-muted-foreground">
                Hands-on learning experiences in science, technology, engineering, and mathematics.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <Notebook className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Robotics Classes</h3>
              <p className="text-muted-foreground">
                Build and program robots while learning core engineering concepts.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Tech Competitions</h3>
              <p className="text-muted-foreground">
                Participate in exciting competitions to showcase your skills and win prizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Program CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="bg-card p-12 rounded-2xl shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Summer Tech Adventure Program 2025
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our immersive summer program where kids aged 7-15 can explore robotics,
              coding, and engineering in a fun, collaborative environment.
            </p>
            <Link href="/signup">
              <Button size="lg" className="text-lg">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}