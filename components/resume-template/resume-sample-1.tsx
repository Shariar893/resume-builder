"use client";
import useResumeStore from "@/store/resumeStore";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { seperateDes } from "@/lib/seperate-des";
import { calculateDuration } from "@/lib/duration-gap-caluclator";
const ResumeTemplate = () => {
  const profile = useResumeStore((state) => state.profile);
  const educations = useResumeStore((state) => state.educations);
  const experiences = useResumeStore((state) => state.experiences);
  const projects = useResumeStore((state) => state.projects);
  const skills = useResumeStore((state) => state.skills);
  const certifications = useResumeStore((state) => state.certifications);

  return (
    <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
      {/* profile */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black">{profile.name}</h1>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={`tel:${profile.phone}`}
            className="text-blue-600 hover:underline"
          >
            {profile.phone}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-blue-600 hover:underline"
          >
            {profile.email}
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Website
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Experience */}
      <main className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Experience</h2>
            {experiences.map((experience, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <p className="text-lg">{experience.company}</p>
                <p className="italic">{`| ${experience.location}`}</p>
                <p className="italic">{`${experience.startDate} - ${experience.endDate}`}</p>
                <ul className="list-disc list-inside mt-2">
                  {seperateDes(experience.description!).map((item, idx) => (
                    <li key={idx}>{parse(DOMPurify.sanitize(item))}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Education</h2>
            {educations.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-bold">
                  {edu.degree} {edu.fieldOfStudy}
                </h3>
                <p>{`${edu.institutionName} | ${calculateDuration(
                  edu.startDate!,
                  edu.endDate!
                )} | `}</p>
              </div>
            ))}
          </section>

          {/* Project */}

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-bold">{project.projectName}</h3>
                <ul className="list-disc list-inside mt-2">
                  {seperateDes(project.projectDescription!).map((item, idx) => (
                    <li key={idx}>{parse(DOMPurify.sanitize(item))}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        <div>
          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Technical Skills
            </h2>
            <div className="mb-4">
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index}>
                    {parse(DOMPurify.sanitize(skill.skillName))}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Certifications
            </h2>
            <ul className="list-disc list-inside">
              {certifications.map((cert, index) => (
                <li key={index} className="mb-4">
                  <strong className="text-xl font-bold">
                    {cert.certificationName}
                  </strong>
                  by
                  <a href={cert.certificationProof}>
                    {cert.certificationAuthority}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResumeTemplate;
