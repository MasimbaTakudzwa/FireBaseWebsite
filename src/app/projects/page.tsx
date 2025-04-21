'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface ProjectsPageProps {
  className?: string;
}

const Projects: React.FC<ProjectsPageProps> = ({className}) => {
  const imageStyle = "rounded-md shadow-md";

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="grid gap-8 p-8 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-center">Projects</h1>
          <p className="text-muted-foreground text-center">
            Past and current projects I have worked on from employment to academic.
          </p>

          <div className="mt-6 space-y-6">
            {/* Project 1 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                [Project Name]
              </h2>
              <p className="text-muted-foreground text-center">
                [Dates of Project]
              </p>
              <img
                src="https://picsum.photos/400/304" // Replace with your image URL
                alt="Project 1"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  A detailed description of the project, including my role, technologies used, and key achievements.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                [Project Name]
              </h2>
              <p className="text-muted-foreground text-center">
                [Dates of Project]
              </p>
              <img
                src="https://picsum.photos/400/305" // Replace with your image URL
                alt="Project 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  A detailed description of the project, including my role, technologies used, and key achievements.
                </p>
              </div>
            </div>

            {/* Add more projects as needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
