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
      <section className="container">
        <div className="flex flex-col items-center px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">Employment History</h1>
          <p className="text-muted-foreground text-center">
            A detailed description of my employment history with relevant images.
          </p>

          <div className="mt-6 space-y-6">
            {/* Employment 1 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Graduate Operations Manager - Lansport Investments
              </h2>
              <p className="text-muted-foreground text-center">
                2024 - 2025
              </p>
              <img
                src="https://picsum.photos/400/306" // Replace with your image URL
                alt="Company 1"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  At Lansport Investments, I applied my technical skills to transform property management operations. I was responsible for overseeing the company&apos;s property portfolio, coordinating with contractors and colleagues to ensure timely maintenance, renovations, and repairs. One of my significant contributions was spearheading the transition from physical record-keeping to a comprehensive cloud-based system, which substantially improved data accessibility, integrity, and security across the organization.

                  Working closely with the management team, I leveraged my data analytics background to provide evidence-based insights for portfolio expansion decisions and operational efficiency improvements. This role allowed me to combine my technical knowledge with practical business operations, demonstrating how technology solutions can drive organizational growth and efficiency. My experience at Lansport Investments strengthened my project management abilities and provided valuable insight into how technology integration can transform traditional business operations.
                </p>
              </div>
            </div>

            {/* Employment 2 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                LFT Site Worker - Durham University
              </h2>
              <p className="text-muted-foreground text-center">
                2021 - 2022
              </p>
              <img
                src="https://picsum.photos/400/307" // Replace with your image URL
                alt="Company 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  During the COVID-19 pandemic, I contributed to Durham University&apos;s health and safety initiatives as an LFT Site Worker. I played a vital role in the university&apos;s testing infrastructure by efficiently organizing and assembling COVID-19 testing kits for mass distribution across campus. This position required meticulous attention to detail and strict adherence to health protocols.

                  As I gained experience, I took on additional responsibilities including training new staff members and ensuring compliance with General Data Protection Regulation (GDPR) when logging test results. I also managed biohazard waste disposal according to company health regulations, maintaining a safe testing environment. This role developed my ability to work effectively under pressure in a time-sensitive health context while maintaining precision and following strict protocols—skills that have proven valuable in my subsequent technical work where attention to detail and procedural compliance are essential.
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
