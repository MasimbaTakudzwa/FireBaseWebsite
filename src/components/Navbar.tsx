'use client';

import React from 'react';
import {cn} from "@/lib/utils";
import Link from "next/link";
import {DarkModeToggle} from "@/components/ui/dark-mode-toggle";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <nav className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex items-center justify-between py-2">
        <div className="font-bold text-xl">
          {/*  Non-clickable Logo */}
          Minimalist Folio
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/education" className="hover:text-accent">
            Education
          </Link>
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="/employment" className="hover:text-accent">
            Employment
          </Link>
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
  );
};
