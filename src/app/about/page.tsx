'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface AboutPageProps {
  className?: string;
}

const About: React.FC<AboutPageProps> = ({className}) => {
  const description = `I am Masimba Gangaidzo, a technology enthusiast with deep interests in artificial intelligence, machine learning, and cybersecurity. My academic journey began in Zimbabwe at St John's Prep where I developed foundational skills in logical thinking through my passion for chess, earning Half Colours for my achievements. This early interest in strategic thinking evolved during my time at St Stithians Boys' School in South Africa, where I embraced both physical challenges through Rugby and cultural pursuits as part of the backstage and technical team for the Drama department.

My diverse background has shaped my approach to technology – I see it not just as a collection of tools but as a means to solve real-world problems with creativity and precision. The leadership and resilience I developed through outdoor education experiences like Kamoka Bush School and the Grade 11 Spirit of Adventure leadership camp have proven invaluable in my academic and professional life. These experiences taught me to approach challenges with determination and adaptability, qualities that translate directly to my work in computer science.

Now based in the United Kingdom, I combine technical expertise with a global perspective. I'm particularly fascinated by the ethical implications of AI and the importance of developing unbiased systems that serve diverse populations. When I'm not immersed in code or research, I enjoy exploring the intersection of technology with other disciplines, believing that innovation often happens at these boundaries. My goal is to contribute to the field of computer science in ways that are both technically innovative and socially responsible, creating solutions that enhance security, efficiency, and accessibility in our increasingly digital world.`;

  const imageStyle = "rounded-md shadow-md w-full md:w-auto";

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="container">
        <div className="flex flex-col items-center px-8">
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
