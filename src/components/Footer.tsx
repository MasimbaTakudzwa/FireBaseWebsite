
import React from 'react';
import {cn} from "@/lib/utils";
import {Github, Instagram, Linkedin, Mail, FileText} from "lucide-react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({className}) => {
  return (
    <footer className={cn("w-full border-t bg-background py-6 text-sm text-muted-foreground", className)}>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Minimalist Folio. All rights reserved.
        </p>
        <div className="flex flex-row gap-4 text-lg">
          <a href="mailto:example@email.com" aria-label="Email" className="hover:text-accent">
            <Mail className="h-5 w-5"/>
          </a>
          <a href="#" aria-label="CV" className="hover:text-accent">
            <FileText className="h-5 w-5"/>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-accent">
            <Github className="h-5 w-5"/>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-accent">
            <Instagram className="h-5 w-5"/>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent">
            <Linkedin className="h-5 w-5"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

    