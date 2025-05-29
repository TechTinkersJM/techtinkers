import Link from "next/link";
import { Bot, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-6 w-6" />
              <span className="text-xl font-bold">TechTinkers</span>
            </div>
            <p className="text-muted-foreground">
              Inspiring the next generation of innovators through robotics and technology education.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/competitions" className="text-muted-foreground hover:text-primary">
                  Competitions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/robotics" className="text-muted-foreground hover:text-primary">
                  Robotics Classes
                </Link>
              </li>
              <li>
                <Link href="/services/coding" className="text-muted-foreground hover:text-primary">
                  Coding Workshops
                </Link>
              </li>
              <li>
                <Link href="/services/camps" className="text-muted-foreground hover:text-primary">
                  Summer Camps
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-muted-foreground hover:text-primary">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                123 Innovation Street, Tech City
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                info@techtinkers.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TechTinkers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}