'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface HomePageProps {
  className?: string;
}

const Home: React.FC<HomePageProps> = ({className}) => {
  return (
    <main className={cn("relative flex min-h-screen flex-col items-center justify-center gap-4 py-8", className)}>
      <section className="container grid gap-6 p-8 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold tracking-tight text-center">
            Hello, I&apos;m [Your Name]
          </h1>
          <div className="flex justify-center">
            <p className="mt-4 text-muted-foreground text-center max-w-3xl">
              A brief summary about me and the nature of this website. This is a minimalist portfolio showcasing my
              skills, experiences, and projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
