"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "./hero-parallax"; // Make sure this path is correct

// Define products array with local images
const products = [
  {
    title: "Financial Dashboard",
    link: "/dashboard",
    thumbnail: "/img1.jpg",
  },
  {
    title: "Transaction Tracking",
    link: "/transaction/create",
    thumbnail: "/img2.jpg",
  },
  {
    title: "Budget Management",
    link: "/dashboard",
    thumbnail: "/img3.jpg",
  },
  {
    title: "AI Insights",
    link: "/dashboard",
    thumbnail: "/img4.jpg",
  },
  {
    title: "Account Overview",
    link: "/dashboard",
    thumbnail: "/img5.jpg",
  },
  {
    title: "Receipt Scanner",
    link: "/transaction/create",
    thumbnail: "/img6.jpg",
  },
  {
    title: "Analytics",
    link: "/dashboard",
    thumbnail: "/img7.jpg",
  },
  {
    title: "Smart Categorization",
    link: "/dashboard",
    thumbnail: "/img8.jpg",
  },
  {
    title: "Expense Reports",
    link: "/dashboard",
    thumbnail: "/img9.jpg",
  },
  {
    title: "Financial Goals",
    link: "/dashboard",
    thumbnail: "/img10.jpg",
  },
];

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title text-gray-900 dark:text-white">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Explicitly pass the products array to HeroParallax */}
        <div className="mt-20">
          <HeroParallax products={products} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
