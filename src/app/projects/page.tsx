'use client';

import React from 'react';
import {cn} from "@/lib/utils";

interface ProjectsPageProps {
  className?: string;
}

const Projects: React.FC<ProjectsPageProps> = ({className}) => {
  const imageStyle = "rounded-md shadow-md w-full md:w-auto";

  return (
    <main className={cn("relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="container">
        <div className="flex flex-col items-center px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">Projects</h1>
          <p className="text-muted-foreground text-center">
            Past and current projects I have worked on from employment to academic.
          </p>

          <div className="mt-6 space-y-6">
            {/* Project 1 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Debiasing Toxic Language Classification Models
              </h2>
              <p className="text-muted-foreground text-center">
                Durham University
              </p>
              <img
                src="https://picsum.photos/400/304" // Replace with your image URL
                alt="Project 1"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  During my undergraduate dissertation research at Durham University, I developed a project focused on addressing bias in AI systems that classify toxic language online. I investigated how machine learning models often perpetuate societal biases when flagging content as harmful or offensive. By implementing specialized debiasing techniques and carefully engineering training data, I created a classification system that more fairly evaluated content across different demographic groups and contexts. This project highlighted the importance of ethical considerations in AI development and strengthened my skills in natural language processing, bias detection, and model optimization.
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
              <img
                src="https://picsum.photos/400/305" // Replace with your image URL
                alt="Project 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  As part of my Applied Cryptography module at Loughborough University London, I designed and implemented a secure document protection system in Python. The system utilized a hybrid cryptographic approach combining symmetric AES encryption for document content with asymmetric RSA encryption for key protection. This implementation demonstrated the practical application of cryptographic principles in real-world security scenarios while ensuring both security and performance efficiency. The project reinforced my understanding of key management, encryption algorithms, and secure system design.
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
              <img
                src="https://picsum.photos/400/315" // Replace with your image URL
                alt="Project 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  During my time at Durham University, I created a computational analysis tool that examined the evolution of language in mainstream popular music over the last century. Using Python and various natural language processing libraries, I analyzed lyrics from different eras to identify trends in vocabulary complexity, thematic content, and emotional sentiment. The project involved data collection, preprocessing, feature extraction, and statistical analysis, providing insights into how musical expression has transformed alongside cultural and technological changes. This work combined my interests in cultural analysis, language processing, and data visualization.
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
              <img
                src="https://picsum.photos/400/316" // Replace with your image URL
                alt="Project 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  For my Cybersecurity and Digital Forensics module at Loughborough University London, I conducted a comprehensive laboratory experiment evaluating the effectiveness of various cybersecurity attack tools. Using virtual machines and Kali Linux, I tested different attack vectors and defense mechanisms, with particular focus on password security testing using tools like John the Ripper. The project produced quantitative data on attack success rates against different security implementations, highlighting vulnerabilities in common systems and providing recommendations for improving defensive postures.
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
              <img
                src="https://picsum.photos/400/317" // Replace with your image URL
                alt="Project 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  Building on my studies in graph theory and algorithmic optimization at Durham University, I developed a Python solution for a complex path optimization problem similar to the Ant Colony problem. The program utilized dynamic programming techniques to efficiently find optimal routes through complex networks, balancing computational efficiency with solution quality. This project demonstrated my ability to translate theoretical mathematical concepts into practical programming solutions while considering real-world constraints and performance requirements.
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
