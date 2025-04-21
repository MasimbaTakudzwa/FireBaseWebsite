'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface EmploymentPageProps {
  className?: string;
}

const Employment: React.FC<EmploymentPageProps> = ({className}) => {
  const imageStyle = "rounded-md shadow-md w-full md:w-auto";

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="container grid gap-8 p-8 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-center">Employment History</h1>
          <p className="text-muted-foreground text-center">
            A detailed description of my employment history with relevant images.
          </p>

          <div className="mt-6 space-y-6">
            {/* Employment 1 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                [Job Title] - [Company Name]
              </h2>
              <p className="text-muted-foreground text-center">
                [Dates of Employment]
              </p>
              <img
                src="https://picsum.photos/400/306" // Replace with your image URL
                alt="Company 1"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  A detailed description of my role at this company, including responsibilities, achievements, and
                  skills gained.
                </p>
              </div>
            </div>

            {/* Employment 2 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                [Job Title] - [Another Company Name]
              </h2>
              <p className="text-muted-foreground text-center">
                [Dates of Employment]
              </p>
              <img
                src="https://picsum.photos/400/307" // Replace with your image URL
                alt="Company 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  A detailed description of my role at this company, including responsibilities, achievements, and
                  skills gained.
                </p>
              </div>
            </div>

            {/* Add more employment history as needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Employment;
