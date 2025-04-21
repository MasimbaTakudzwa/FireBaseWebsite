'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface HomePageProps {
  className?: string;
}

const Home: React.FC<HomePageProps> = ({className}) => {
  return (
    <main className={cn("relative flex min-h-screen flex-col items-center justify-center gap-4 py-8", className)}>
      <section className="container">
        <div className="flex flex-col items-center px-8">
        <img
                src="/Images/Profile.png"
                alt="Profile Picture"
                className="rounded-full shadow-md w-32 h-32 mb-4"
              />
          <h1 className="text-5xl font-bold tracking-tight text-center">
            Hello, I&apos;m Masimba Gangaidzo
          </h1>
          <div className="flex justify-center">
            <p className="mt-4 text-muted-foreground text-center max-w-3xl">
              Welcome to my digital portfolio! I&apos;m Masimba Gangaidzo, a dedicated Computer Science graduate with a passion for artificial intelligence, machine learning, and cybersecurity. With a BSc in Computer Science from Durham University and currently pursuing an MSc in Cyber Security and Data Analytics at Loughborough University London, I bridge the gap between theoretical knowledge and practical application in technology. My journey has taken me from Zimbabwe to South Africa, and now to the United Kingdom, giving me a unique global perspective that enriches my approach to problem-solving. Whether I&apos;m developing machine learning models, implementing cryptographic solutions, or analyzing complex datasets, I&apos;m driven by the potential of technology to transform how we interact with the world. Explore my portfolio to learn more about my projects, educational background, and professional experience, all reflecting my commitment to innovation, continuous learning, and excellence in the field of computer science.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

