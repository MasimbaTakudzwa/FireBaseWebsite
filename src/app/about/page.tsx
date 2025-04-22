'use client';

import React from 'react';
import Image from 'next/image'; // Import Next Image
import {cn} from "@/lib/utils";

interface AboutPageProps {
  className?: string;
}

const About: React.FC<AboutPageProps> = ({className}) => {
  const description = `I am Masimba Gangaidzo, a technology enthusiast with deep interests in artificial intelligence, machine learning, and cybersecurity. My academic journey began in Zimbabwe at St John's Prep where I developed foundational skills in logical thinking through my passion for chess, earning Half Colours for my achievements. This early interest in strategic thinking evolved during my time at St Stithians Boys' School in South Africa, where I embraced both physical challenges through Rugby and cultural pursuits as part of the backstage and technical team for the Drama department.

My diverse background has shaped my approach to technology – I see it not just as a collection of tools but as a means to solve real-world problems with creativity and precision. The leadership and resilience I developed through outdoor education experiences like Kamoka Bush School and the Grade 11 Spirit of Adventure leadership camp have proven invaluable in my academic and professional life. These experiences taught me to approach challenges with determination and adaptability, qualities that translate directly to my work in computer science.

Now based in the United Kingdom, I combine technical expertise with a global perspective. I'm particularly fascinated by the ethical implications of AI and the importance of developing unbiased systems that serve diverse populations. When I'm not immersed in code or research, I enjoy exploring the intersection of technology with other disciplines, believing that innovation often happens at these boundaries. My goal is to contribute to the field of computer science in ways that are both technically innovative and socially responsible, creating solutions that enhance security, efficiency, and accessibility in our increasingly digital world.`;

  // Adjusted max-width for side-by-side layout
  const imageStyle = "rounded-md shadow-md w-full max-w-xs sm:max-w-sm"; 
  // Define dimensions (adjust these to your actual image aspect ratios)
  const imageWidth = 400; // Reduced width slightly for side-by-side
  const imageHeight = 280; // Adjust height based on aspect ratio

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="container">
        <div className="flex flex-col items-center px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">About Me</h1>
          <p className="text-muted-foreground text-center">
            A detailed description of my background, experiences, and passions.
          </p>

          <div className="mt-6 space-y-6 w-full">
            <div className="flex justify-center">
              <p className="text-center max-w-3xl">
                {description}
              </p>
            </div>

            {/* Life Highlights Section - Images side-by-side above text */}
            <div className="space-y-4"> {/* Reduced space between elements here */}
              <h2 className="text-3xl font-semibold tracking-tight text-center">Life Highlights: FEDA 2017 Win</h2>

              {/* Container for side-by-side images, centered */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
                 <Image
                   src="/images/FEDA WIN 2016.jpg"
                   alt="St Stithians FEDA 2017 Winning Team - Disruption"
                   width={imageWidth}
                   height={imageHeight}
                   className={imageStyle}
                 />
                 <Image
                   src="/images/FEDAWIN2.jpg"
                   alt="St Stithians FEDA 2017 Award Ceremony"
                   width={imageWidth}
                   height={imageHeight}
                   className={imageStyle}
                 />
              </div>

              {/* Text description below images */}
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  A significant highlight from my time at St Stithians was being part of the winning team for the National Festival of Dramatic Arts (FEDA) in 2017. Our original work, 'Disruption', was a thought-provoking piece that explored topical themes. Competing against numerous schools, our production was selected as a finalist and ultimately won Best Production out of 67 entries. As a member of the technical crew, alongside Matthew Julies, Ashwir Maharaj, and Sheldon Govender, I was responsible for backstage operations, contributing to the visual effects and sound that earned nominations and supported the cast's incredible performance. This experience, culminating in winning R10 000 for the Drama Department and the chance to perform at the Grahamstown National Arts Festival, was a testament to teamwork, creativity, and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
