"use client";

import { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Draggable from "react-draggable";
import ResumeTemplate from "./resume-sample-1";
import PDFDownloadButton from "./pdf-downlod-button";
import ResumeToolKit from "./resume-tool-kit";
const data = {
  name: "Dhanush TP",
  title: "Engineering Undergraduate",
  contact: {
    phone: "+91-8220586721",
    email: "dhanushtheijas08@gmail.com",
    website: "https://dhanushtheijas.vercel.app/",
    linkedin: "https://www.linkedin.com/in/dhanush-theijas-tp/",
    github: "https://github.com/dhanushtheijas08",
  },
  experience: [
    {
      role: "Frontend Intern",
      company: "Roots Industry Ltd",
      duration: "Jan 2023 - Feb 2023",
      location: "Coimbatore, Tamilnadu",
      responsibilities: [
        "Developed a web application for Smart Safety Application at Roots Industry Ltd, aimed at empowering employees to report unsafe conditions promptly.",
        "Implemented the frontend using React and Tailwind for the admin dashboard, ensuring seamless user experiences, efficient issue management, and responsive design for optimal viewing across devices.",
        "Designed and integrated features allowing employees to capture images of safety hazards, submit reports, and track issue resolution progress, enhancing workplace safety and efficiency.",
        "Tech Stack: HTML, CSS, JS, Tailwind, React.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E Computer Science",
      institution: "KPRIET",
      duration: "2021 - 2025",
      location: "Coimbatore, Tamilnadu",
    },
    {
      degree: "Higher Secondary - 80.8%",
      institution: "Sri Ramakrishna Vidyalaya",
      duration: "2020",
      location: "Ulundurpet, Tamilnadu",
    },
  ],
  projects: [
    {
      name: "ElectroWorld",
      techStack: "Unity 3D Engine | Vuforia | C#",
      description: [
        "An AR based project with the aim to solve the learning issues faced by the students due to pandemic.",
        "It uses the power of AR to visualize complex electrical machines with its working.",
        "Used by students of my college for learning at home during the pandemic.",
      ],
    },
  ],
  skills: {
    programmingLanguages: ["C/C++", "Python", "JavaScript"],
    frameworksLibraries: [
      "HTML, CSS",
      "ReactJs",
      "Nextjs",
      "NodeJs",
      "Express",
      "Tailwind",
    ],
    versionControl: ["Git", "Github"],
    tools: ["Postman", "MongoDB", "Prisma", "VSCode"],
  },
  certifications: [
    { title: "Flipkart Grid 4.0", issuer: "Flipkart", link: "xyz" },
    {
      title: "Spark AR Labs India Challenge",
      issuer: "IncubateIND",
      link: "xyz",
    },
    { title: "Web Development Course", issuer: "Coursera", link: "xyz" },
  ],
};

const Resume = () => {
  const resumeRef = useRef(null);

  return (
    <div className="p-4 relative col-span-8">
      <TransformWrapper
        ref={resumeRef}
        maxScale={2}
        centerOnInit={true}
        minScale={0.2}
        initialScale={0.5}
        limitToBounds={false}
        smooth={false}
      >
        {(toolTip) => (
          <>
            <ResumeToolKit toolTip={toolTip} />
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                maxHeight: "100vh",
              }}
            >
              <Draggable>
                <div
                  ref={resumeRef}
                  style={{
                    backgroundColor: "white",
                    width: "210mm",
                    height: "297mm",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    transformOrigin: "top left",
                  }}
                >
                  <ResumeTemplate data={data} />
                </div>
              </Draggable>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default Resume;
