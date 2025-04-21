
import React from 'react';
import {cn} from "@/lib/utils";

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
        {/*  Navigation links can be added here if needed */}
      </div>
    </nav>
  );
};
