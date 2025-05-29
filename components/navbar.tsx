"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Bot } from "lucide-react";

const services = [
  {
    title: "Robotics Classes",
    href: "/services/robotics",
    description: "Learn to build and program robots in our hands-on classes",
  },
  {
    title: "Coding Workshops",
    href: "/services/coding",
    description: "Master programming fundamentals through interactive projects",
  },
  {
    title: "STEM Camps",
    href: "/services/camps",
    description: "Immersive learning experiences during school breaks",
  },
];

const competitions = [
  {
    title: "Robot Wars",
    href: "/competitions/robot-wars",
    description: "Build and battle robots in our annual competition",
  },
  {
    title: "Code Olympics",
    href: "/competitions/code-olympics",
    description: "Showcase your coding skills in various challenges",
  },
  {
    title: "Tech Fair",
    href: "/competitions/tech-fair",
    description: "Present your innovative projects to the community",
  },
];

const robots = [
  {
    title: "Beginner Bots",
    href: "/robots/beginner",
    description: "Simple robots for learning basics",
  },
  {
    title: "Advanced Robotics",
    href: "/robots/advanced",
    description: "Complex robots for experienced builders",
  },
  {
    title: "Custom Projects",
    href: "/robots/custom",
    description: "Design and build your own robots",
  },
];

export function Navbar() {
  return (
    <div className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Bot className="h-6 w-6" />
          <span className="text-xl font-bold">TechTinkers</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Competitions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {competitions.map((competition) => (
                    <li key={competition.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={competition.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{competition.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {competition.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Robots</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {robots.map((robot) => (
                    <li key={robot.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={robot.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{robot.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {robot.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}