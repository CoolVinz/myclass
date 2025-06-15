"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">MyClass</h1>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}