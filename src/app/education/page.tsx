'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface EducationPageProps {
  className?: string;
}

const Education: React.FC<EducationPageProps> = ({className}) => {
  const imageStyle = "rounded-md shadow-md w-full md:w-auto";

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="container">
        <div className="flex flex-col items-center px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">Education</h1>
          <p className="text-muted-foreground text-center">
            A detailed page of my education history with relevant images.
          </p>

          <div className="mt-6 space-y-6">
            {/* Education Entry 1 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                [Degree Name] - [University Name]
              </h2>
              <p className="text-muted-foreground text-center">
                [Dates of Attendance]
              </p>
              <img
                src="https://picsum.photos/400/302" // Replace with your image URL
                alt="University 1"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  A detailed description of my experience at this university, including relevant coursework,
                  achievements, and extracurricular activities.
                </p>
              </div>
            </div>

            {/* Education Entry 2 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                [Degree Name] - [Another Institution Name]
              </h2>
              <p className="text-muted-foreground text-center">
                [Dates of Attendance]
              </p>
              <img
                src="https://picsum.photos/400/303" // Replace with your image URL
                alt="University 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  A detailed description of my experience at this institution, including relevant coursework,
                  achievements, and extracurricular activities.
                </p>
              </div>
            </div>

            {/* Add more education entries as needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
