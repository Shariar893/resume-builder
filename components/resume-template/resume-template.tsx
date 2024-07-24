"use client";
import React from "react";
import { Phone, Mail, Linkedin, Github, Award } from "lucide-react";

type Profile = {
  name: string;
  url: string;
};

type Education = {
  institution: string;
  degree: string;
  cgpa: string;
  duration: string;
  location: string;
};

type Project = {
  name: string;
  technologies: string;
  year: string;
  details: string[];
};

type TechnicalSkills = {
  [key: string]: string[];
};

type SectionContent =
  | { type: "EducationContent"; data: Education[] }
  | { type: "SkillsContent"; data: string[] }
  | { type: "ProjectsContent"; data: Project[] }
  | { type: "TechnicalSkillsContent"; data: TechnicalSkills }
  | { type: "ListContent"; data: string[] };

type Section = {
  title: string;
  content: SectionContent;
};

type ResumeData = {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  otherProfiles: Profile[];
  sections: Section[];
};

// Resume Data
const resumeData: ResumeData = {
  name: "Aman Babu",
  location: "Uttam Nagar, Delhi",
  phone: "+91-6396267480",
  email: "2019017@iiitdmj.ac.in",
  linkedin: "https://linkedin.com/in/amanbabu23",
  github: "https://github.com/aman-spp",
  otherProfiles: [
    { name: "Codeforces", url: "https://codeforces.com/profile/abthecoder23" },
    { name: "LeetCode", url: "https://leetcode.com/aman_2_0_2_3/" },
    {
      name: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/aman_2_0_2_3/practice",
    },
  ],
  sections: [
    {
      title: "Education",
      content: {
        type: "EducationContent",
        data: [
          {
            institution:
              "PDPM, Indian Institute of Information Technology, Jabalpur",
            degree: "B.Tech - Computer Science and Engineering",
            cgpa: "7.9",
            duration: "2019 – 2023",
            location: "Jabalpur, Madhya Pradesh",
          },
        ],
      },
    },
    {
      title: "Coursework / Skills",
      content: {
        type: "SkillsContent",
        data: [
          "DSA",
          "Operating Systems",
          "Oops Concepts",
          "Computer Networks",
          "System Design",
          "Cloud Computing",
          "Software Engineering",
          "DBMS",
        ],
      },
    },
    {
      title: "Projects",
      content: {
        type: "ProjectsContent",
        data: [
          {
            name: "Interview Creation Portal",
            technologies:
              "React, JavaScript, Database - sqlite3(development), IDE - VS Code",
            year: "2022",
            details: [
              "An interview page where the admin can create an interview by selecting participants, start and end time.",
              "An interviews list page where admin can see all the upcoming interviews.",
              "An interview edit page where admin can edit the created interview with the same validations as on the creation page.",
            ],
          },
          {
            name: "Banking System",
            technologies: "Oops and DSA",
            year: "2022",
            details: [
              "Application to provide banking solution to Banks to manage customer accounts.",
              "Accounts can be created and managed. Implemented many functions related to banking system.",
              "Operations like deposit and withdrawal can be performed in the account.",
            ],
          },
          // ... other projects
        ],
      },
    },
    {
      title: "Technical Skills",
      content: {
        type: "TechnicalSkillsContent",
        data: {
          Languages: ["C++", "C", "JavaScript", "SQL"],
          "Technologies/Frameworks": [
            "HTML5",
            "CSS3",
            "React",
            "MongoDB",
            "Express",
            "Javascript",
            "NodeJS",
            "Bootstrap",
          ],
          "Developer Tools": ["VS Code", "PyCharm", "IntelliJ", "Canva"],
        },
      },
    },
    {
      title: "Coding Platforms",
      content: {
        type: "ListContent",
        data: [
          "Solved 1000+ Problems on Leetcode.",
          "Solved 500+ Problems across GeeksforGeeks and InterviewBit.",
          "Codeforces Max Rating 1391",
        ],
      },
    },
    // ... other sections
  ],
};

// Resume Template Components
const ResumeTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black shadow-lg overflow-hidden text-[11px] leading-tight">
      <div className="flex flex-col h-full">
        <header className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-1">{data.name}</h1>
          <p>{data.location}</p>
          <div className="flex justify-center space-x-3 mt-1">
            {data.phone && (
              <a href={`tel:${data.phone}`} className="flex items-center">
                <Phone className="mr-1 h-3 w-3" /> {data.phone}
              </a>
            )}
            {data.email && (
              <a href={`mailto:${data.email}`} className="flex items-center">
                <Mail className="mr-1 h-3 w-3" /> {data.email}
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} className="flex items-center">
                <Linkedin className="mr-1 h-3 w-3" /> LinkedIn
              </a>
            )}
            {data.github && (
              <a href={data.github} className="flex items-center">
                <Github className="mr-1 h-3 w-3" /> Github
              </a>
            )}
            {data.otherProfiles.map((profile, index) => (
              <a key={index} href={profile.url} className="flex items-center">
                <Award className="mr-1 h-3 w-3" /> {profile.name}
              </a>
            ))}
          </div>
        </header>

        <div className="flex-grow">
          {data.sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<Section> = ({ title, content }) => {
  let ContentComponent: React.ComponentType<any>;
  switch (content.type) {
    case "EducationContent":
      ContentComponent = EducationContent;
      break;
    case "SkillsContent":
      ContentComponent = SkillsContent;
      break;
    case "ProjectsContent":
      ContentComponent = ProjectsContent;
      break;
    case "TechnicalSkillsContent":
      ContentComponent = TechnicalSkillsContent;
      break;
    case "ListContent":
      ContentComponent = ListContent;
      break;
    default:
      throw new Error(`Unknown content type: ${(content as any).type}`);
  }

  return (
    <section className="mb-3">
      <h2 className="text-lg font-bold border-b border-gray-300 mb-1">
        {title.toUpperCase()}
      </h2>
      <ContentComponent data={content.data} />
    </section>
  );
};

const EducationContent: React.FC<{ data: Education[] }> = ({ data }) => (
  <>
    {data.map((edu, index) => (
      <div key={index} className="mb-1">
        <div className="flex justify-between">
          <h3 className="font-bold">{edu.institution}</h3>
          <span>{edu.duration}</span>
        </div>
        <p>
          {edu.degree} - CGPA: {edu.cgpa}
        </p>
        <p>{edu.location}</p>
      </div>
    ))}
  </>
);

const SkillsContent: React.FC<{ data: string[] }> = ({ data }) => (
  <div className="grid grid-cols-4 gap-1">
    {data.map((skill, index) => (
      <div key={index}>{skill}</div>
    ))}
  </div>
);

const ProjectsContent: React.FC<{ data: Project[] }> = ({ data }) => (
  <>
    {data.map((project, index) => (
      <div key={index} className="mb-2">
        <div className="flex justify-between">
          <h3 className="font-bold">{project.name}</h3>
          <span>{project.year}</span>
        </div>
        <p className="italic">{project.technologies}</p>
        <ul className="list-disc pl-5">
          {project.details.map((detail, detailIndex) => (
            <li key={detailIndex}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

const TechnicalSkillsContent: React.FC<{ data: TechnicalSkills }> = ({
  data,
}) => (
  <ul>
    {Object.entries(data).map(([category, skills], index) => (
      <li key={index}>
        <strong>{category}:</strong> {skills.join(", ")}
      </li>
    ))}
  </ul>
);

const ListContent: React.FC<{ data: string[] }> = ({ data }) => (
  <ul className="list-disc pl-5">
    {data.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Main component export
const MyResume: React.FC = () => <ResumeTemplate data={resumeData} />;

export default MyResume;
