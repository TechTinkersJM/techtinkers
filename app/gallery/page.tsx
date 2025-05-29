"use client";

import { Image } from "lucide-react";

const galleryItems = [
  {
    title: "Robotics Workshop",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Students learning to build and program robots",
  },
  {
    title: "Coding Class",
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Young coders working on their projects",
  },
  {
    title: "Robot Wars Competition",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Exciting moments from our robot battles",
  },
  {
    title: "Summer Camp",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Fun activities at our tech summer camp",
  },
  {
    title: "Tech Fair",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Students showcasing their innovative projects",
  },
  {
    title: "Team Projects",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Collaborative learning in action",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Image className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore moments of learning, innovation, and fun at TechTinkers.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}