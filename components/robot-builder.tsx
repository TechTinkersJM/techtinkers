"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const robotParts = {
  heads: [
    { id: "h1", name: "Classic", color: "#4A5568" },
    { id: "h2", name: "Screen", color: "#2B6CB0" },
    { id: "h3", name: "Antenna", color: "#C53030" },
  ],
  bodies: [
    { id: "b1", name: "Square", color: "#2D3748" },
    { id: "b2", name: "Round", color: "#2C5282" },
    { id: "b3", name: "Hexagon", color: "#9B2C2C" },
  ],
  arms: [
    { id: "a1", name: "Claws", color: "#1A202C" },
    { id: "a2", name: "Grippers", color: "#1A365D" },
    { id: "a3", name: "Magnets", color: "#742A2A" },
  ],
  wheels: [
    { id: "w1", name: "Tracks", color: "#171923" },
    { id: "w2", name: "Wheels", color: "#153E75" },
    { id: "w3", name: "Hover", color: "#63171B" },
  ],
};

export function RobotBuilder() {
  const [selectedParts, setSelectedParts] = useState({
    head: robotParts.heads[0],
    body: robotParts.bodies[0],
    arms: robotParts.arms[0],
    wheels: robotParts.wheels[0],
  });

  const [isAnimating, setIsAnimating] = useState(false);

  const handlePartChange = (part: string, value: string) => {
    const category = robotParts[part as keyof typeof robotParts];
    const selectedPart = category.find((p) => p.id === value);
    if (selectedPart) {
      setSelectedParts((prev) => ({
        ...prev,
        [part]: selectedPart,
      }));
    }
  };

  const animate = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      {/* Robot Display */}
      <div className="w-[300px] h-[400px] bg-card rounded-lg shadow-xl p-8 relative">
        <svg
          viewBox="0 0 200 300"
          className={`w-full h-full ${isAnimating ? "animate-bounce" : ""}`}
        >
          {/* Head */}
          <rect
            x="60"
            y="20"
            width="80"
            height="60"
            rx="10"
            fill={selectedParts.head.color}
            className="transition-colors duration-300"
          />
          {/* Eyes */}
          <circle cx="85" cy="45" r="8" fill="#ffffff" />
          <circle cx="115" cy="45" r="8" fill="#ffffff" />

          {/* Body */}
          <rect
            x="50"
            y="90"
            width="100"
            height="120"
            rx="15"
            fill={selectedParts.body.color}
            className="transition-colors duration-300"
          />

          {/* Arms */}
          <rect
            x="20"
            y="100"
            width="20"
            height="80"
            rx="5"
            fill={selectedParts.arms.color}
            className="transition-colors duration-300"
          />
          <rect
            x="160"
            y="100"
            width="20"
            height="80"
            rx="5"
            fill={selectedParts.arms.color}
            className="transition-colors duration-300"
          />

          {/* Wheels */}
          <rect
            x="45"
            y="220"
            width="110"
            height="30"
            rx="15"
            fill={selectedParts.wheels.color}
            className="transition-colors duration-300"
          />
          <circle cx="65" cy="250" r="20" fill={selectedParts.wheels.color} />
          <circle cx="135" cy="250" r="20" fill={selectedParts.wheels.color} />
        </svg>
      </div>

      {/* Controls */}
      <div className="space-y-6 w-full max-w-sm">
        <div>
          <label className="block text-sm font-medium mb-2">Head Style</label>
          <Select
            value={selectedParts.head.id}
            onValueChange={(value) => handlePartChange("heads", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select head style" />
            </SelectTrigger>
            <SelectContent>
              {robotParts.heads.map((head) => (
                <SelectItem key={head.id} value={head.id}>
                  {head.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Body Style</label>
          <Select
            value={selectedParts.body.id}
            onValueChange={(value) => handlePartChange("bodies", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select body style" />
            </SelectTrigger>
            <SelectContent>
              {robotParts.bodies.map((body) => (
                <SelectItem key={body.id} value={body.id}>
                  {body.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Arm Style</label>
          <Select
            value={selectedParts.arms.id}
            onValueChange={(value) => handlePartChange("arms", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select arm style" />
            </SelectTrigger>
            <SelectContent>
              {robotParts.arms.map((arm) => (
                <SelectItem key={arm.id} value={arm.id}>
                  {arm.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Movement Style</label>
          <Select
            value={selectedParts.wheels.id}
            onValueChange={(value) => handlePartChange("wheels", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select movement style" />
            </SelectTrigger>
            <SelectContent>
              {robotParts.wheels.map((wheel) => (
                <SelectItem key={wheel.id} value={wheel.id}>
                  {wheel.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          onClick={animate}
          disabled={isAnimating}
        >
          Activate Robot!
        </Button>
      </div>
    </div>
  );
}