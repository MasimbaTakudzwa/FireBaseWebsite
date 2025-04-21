
import React from 'react';
import Link from 'next/link';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

interface HomePageProps {
  className?: string;
}

const Home: React.FC<HomePageProps> = ({className}) => {
  return (
    <main className={cn("container relative flex min-h-screen flex-col items-center justify-center gap-4 py-8", className)}>
      <section className="grid gap-6 p-8 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Hello, I&apos;m [Your Name]
          </h1>
          <p className="mt-4 text-muted-foreground">
            A brief summary about me and the nature of this website. This is a minimalist portfolio showcasing my
            skills, experiences, and projects.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <nav>
            <h2 className="text-2xl font-semibold tracking-tight">Navigation</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="hover:text-accent">
                  <Button variant="link">About Me</Button>
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-accent">
                  <Button variant="link">Education</Button>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent">
                  <Button variant="link">Projects</Button>
                </Link>
              </li>
              <li>
                <Link href="/employment" className="hover:text-accent">
                  <Button variant="link">Employment</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Home;
