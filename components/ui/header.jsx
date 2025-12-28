import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import { checkUser } from '@/lib/checkUser';
import ModeToggle from "@/components/ui/ModeToggle";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            fealth
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <SignedOut>
            <Link
              href="/#about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              About
            </Link>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="default">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>

          {/* 🌙 Theme toggle button */}
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
