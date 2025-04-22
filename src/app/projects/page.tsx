'use client';

import React from 'react'; // Added React import
import Image from 'next/image'; // Added import
import {cn} from "@/lib/utils";

interface ProjectsPageProps {
  className?: string;
}

const Projects: React.FC<ProjectsPageProps> = ({className}) => {
  const imageStyle = "rounded-md shadow-md object-cover"; // Removed width constraints, handled by parent
  // PLEASE ADJUST width and height to match actual image dimensions
  const defaultWidth = 400;
  const defaultHeight = 300; // Use a consistent default or specific values

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="container">
        <div className="flex flex-col items-center px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">Projects</h1>
          <p className="text-muted-foreground text-center">
            Past and current projects I have worked on from employment to academic.
          </p>

          <div className="mt-6 space-y-6 w-full">
            {/* Project 1 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Debiasing Toxic Language Classification Models
              </h2>
              <p className="text-muted-foreground text-center">
                Durham University
              </p>
              {/* Wrapped Image in centering div */}
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/400/304" // Keep placeholder
                  alt="Project 1"
                  width={400} // Keep specific dimensions if known
                  height={304}
                  priority // Keep priority for the first image
                  className={imageStyle}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  During my undergraduate dissertation research... {/* Shortened for brevity */}
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Document Protection System
              </h2>
              <p className="text-muted-foreground text-center">
                Loughborough University London
              </p>
               {/* Wrapped Image in centering div */}
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/400/305" // Keep placeholder
                  alt="Project 2"
                  width={400}
                  height={305}
                  className={imageStyle}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  As part of my Applied Cryptography module... {/* Shortened for brevity */}
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Linguistic Evolution in Popular Music
              </h2>
              <p className="text-muted-foreground text-center">
                Durham University
              </p>
              {/* Wrapped Image in centering div */}
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/400/315" // Keep placeholder
                  alt="Project 3"
                  width={400}
                  height={315}
                  className={imageStyle}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  During my time at Durham University, I created a computational analysis tool... {/* Shortened for brevity */}
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Cybersecurity Attack Tool Effectiveness Analysis
              </h2>
              <p className="text-muted-foreground text-center">
                Loughborough University London
              </p>
              {/* Wrapped Image in centering div */}
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/400/316" // Keep placeholder
                  alt="Project 4"
                  width={400}
                  height={316}
                  className={imageStyle}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  For my Cybersecurity and Digital Forensics module... {/* Shortened for brevity */}
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Path Optimization Algorithm
              </h2>
              <p className="text-muted-foreground text-center">
                Durham University
              </p>
              {/* Wrapped Image in centering div */}
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/400/317" // Keep placeholder
                  alt="Project 5"
                  width={400}
                  height={317}
                  className={imageStyle}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  Building on my studies in graph theory... {/* Shortened for brevity */}
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
