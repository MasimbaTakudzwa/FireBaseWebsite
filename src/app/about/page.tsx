'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface AboutPageProps {
  className?: string;
}

const About: React.FC<AboutPageProps> = ({className}) => {
  const description = `
  I am passionate about technology and design, with a focus on creating user-friendly and visually appealing solutions.
  My background in [Your Field] has provided me with a strong foundation in problem-solving and critical thinking.
  I enjoy working on projects that challenge me to learn new things and push the boundaries of what is possible.
`;

  const imageStyle = "rounded-md shadow-md w-full md:w-auto";

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="container grid gap-8 p-8 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-center">About Me</h1>
          <p className="text-muted-foreground text-center">
            A detailed description of my background, experiences, and passions.
          </p>

          <div className="mt-6 space-y-6">
            <div className="flex justify-center">
              <p className="text-center max-w-3xl">
                {description}
              </p>
            </div>

            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">Life Highlights</h2>

              {/* Example Image with alternating alignment */}
              <div className="flex flex-col items-center md:flex-row gap-4">
                <img
                  src="https://picsum.photos/400/300" // Replace with your image URL
                  alt="Life Event 1"
                  className={cn("md:w-1/2", imageStyle)}
                />
                <div className="flex justify-center w-full md:w-1/2">
                  <p className="text-center max-w-md">
                    A brief description of this life event.
                  </p>
                </div>
              </div>

              {/* Example Image with alternating alignment (Right) */}
              <div className="flex flex-col items-center md:flex-row gap-4">
                <div className="flex justify-center w-full md:w-1/2">
                  <p className="text-center max-w-md">
                    A brief description of this life event.
                  </p>
                </div>
                <img
                  src="https://picsum.photos/400/301" // Replace with your image URL
                  alt="Life Event 2"
                  className={cn("md:w-1/2", imageStyle)}
                />
              </div>

              {/* Add more life highlights as needed */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
