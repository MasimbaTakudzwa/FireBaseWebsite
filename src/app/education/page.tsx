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
                Loughborough University London (2025 - Present)
              </h2>
              <p className="text-muted-foreground text-center">
                MSc in Cyber Security and Data Analytics
              </p>
              <img
                src="https://picsum.photos/400/302" // Replace with your image URL
                alt="University 1"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  I&apos;m currently pursuing an MSc in Cyber Security and Data Analytics, where I&apos;m building specialized knowledge in digital protection and data intelligence. My coursework has focused on several key areas that represent the cutting edge of cybersecurity practice. In Cybersecurity and Digital Forensics, I&apos;ve conducted practical experiments with attack vectors using virtual machines and Kali Linux tools, including investigating the effectiveness of brute force attacks using John the Ripper. My Applied Cryptography module has allowed me to implement document protection systems combining AES and RSA encryption protocols.

                  The program has also strengthened my data analytics capabilities through courses like Advanced Big Data Analytics, where I&apos;ve explored the mathematical foundations of machine learning algorithms and applied these concepts to social media algorithms and stock market prediction models. In Principles of AI and Data Analytics, I&apos;ve refined my classification techniques working with datasets ranging from simple statistical models to complex transformers and neural networks. Upcoming modules in Cloud Applications and Services, Advanced Programming, and Game Technologies will further expand my technical toolkit before I complete my dissertation research.
                </p>
              </div>
            </div>

            {/* Education Entry 2 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                Durham University (2020 - 2023)
              </h2>
              <p className="text-muted-foreground text-center">
                BSc in Computer Science
              </p>
              <img
                src="/Images/durham_castle.png"
                alt="Durham University Logo"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  I earned my BSc in Computer Science with a 2:2 classification, focusing extensively on machine learning, data science, and mathematical foundations. My studies encompassed both theoretical understanding and practical implementation of traditional machine learning models and deep learning architectures for various applications, including image classification, text analysis, and generative models. I developed strong programming skills primarily in Python, with additional experience in C++ and C#.

                  My coursework covered essential areas including AI and machine learning, computer vision, computational modeling, and fundamental mathematics for computer science (matrices, algebra, calculus). I also explored algorithmic optimization, dynamic programming, and website development using CSS, HTML, JavaScript, and Bootstrap. My dissertation research investigated debiasing toxic language classification models, reflecting my interest in creating ethical AI systems. A particular highlight was building a Python program that analyzed linguistic changes in mainstream popular music over the past century by leveraging natural language processing libraries.
                </p>
              </div>
            </div>

            {/* Education Entry 3 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                St Stithians Boys&apos; School (Johannesburg, South Africa)
              </h2>
              <p className="text-muted-foreground text-center">
                Secondary Education
              </p>
              <img
                src="/Images/st_stithians_final.png"
                alt="St Stithians"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  My secondary education at St Stithians shaped my character through its unique approach to holistic development. The school&apos;s emphasis on outdoor education taught me resilience and environmental responsibility through experiences like the three-week Kamoka Bush School program, which included challenges such as the polar bear swim, ostrich run, log carry, and &quot;dollar a day&quot; survival exercise. The Grade 10 hiking trail in Schoemanskloof further developed my perseverance and resourcefulness, while the Grade 11 Spirit of Adventure leadership camp prepared me for mentoring younger students.

                  Beyond academics, I was deeply involved in cultural activities, particularly in the drama department&apos;s backstage and technical operations. My contributions led to receiving Honours in the Cultural Pillar, notably for my role in the team that won the National Festival of Dramatic Arts (FEDA) competition in 2016. I also participated in sports, playing rugby for various teams throughout my school years, embodying the school&apos;s motto of &quot;One and All&quot; and &quot;A South African School making a world of difference.&quot;
                </p>
              </div>
            </div>

            {/* Education Entry 4 */}
            <div className="grid gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-center">
                St John&apos;s Prep (Harare, Zimbabwe)
              </h2>
              <p className="text-muted-foreground text-center">
                Primary Education
              </p>
              <img
                src="https://picsum.photos/400/314" // Replace with your image URL
                alt="University 2"
                className={imageStyle}
              />
              <div className="flex justify-center">
                <p className="text-center max-w-3xl">
                  My early education established fundamental skills that continue to serve me well. I was an active member of the Chess club, where I was awarded Half Colours for my achievements. I also balanced my academic pursuits with extracurricular activities, playing rugby for the B team and participating in the Marimba band during Grades 6 and 7. These early experiences cultivated discipline, strategic thinking, and creativity—qualities that have proven valuable throughout my academic and professional journey.
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

