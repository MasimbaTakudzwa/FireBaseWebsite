
import React from 'react';
import {cn} from "@/lib/utils";

interface EducationPageProps {
  className?: string;
}

const Education: React.FC<EducationPageProps> = ({className}) => {
  const imageStyle = "rounded-md shadow-md";

  return (
    <main className={cn("container relative flex min-h-screen flex-col items-center py-8", className)}>
      <section className="grid gap-8 p-8 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Education</h1>
          <p className="text-muted-foreground">
            A detailed page of my education history with relevant images.
          </p>

          <div className="mt-6 space-y-6">
            {/* Education Entry 1 */}
            <div className="grid gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                [Degree Name] - [University Name]
              </h2>
              <p className="text-muted-foreground">
                [Dates of Attendance]
              </p>
              <img
                src="https://picsum.photos/400/302" // Replace with your image URL
                alt="University 1"
                className={imageStyle}
              />
              <p>
                A detailed description of my experience at this university, including relevant coursework,
                achievements, and extracurricular activities.
              </p>
            </div>

            {/* Education Entry 2 */}
            <div className="grid gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                [Degree Name] - [Another Institution Name]
              </h2>
              <p className="text-muted-foreground">
                [Dates of Attendance]
              </p>
              <img
                src="https://picsum.photos/400/303" // Replace with your image URL
                alt="University 2"
                className={imageStyle}
              />
              <p>
                A detailed description of my experience at this institution, including relevant coursework,
                achievements, and extracurricular activities.
              </p>
            </div>

            {/* Add more education entries as needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
