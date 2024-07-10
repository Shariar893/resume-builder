import { Profile } from "./types";

const resumeData = {
  expertise: [
    "Prototyping Tools",
    "User Research",
    "Interaction Design",
    "Visual Design",
    "Accessibility",
    "Responsive Design",
  ],
  achievements: [
    {
      title: "Market Expansion",
      description:
        "Identified untapped markets and launched a system to harness the line market, resulting in a revenue increase of $1.2 Million for Morcelle in 6 months.",
    },
    {
      title: "Revenue Growth",
      description:
        "Successful implementation of a new pricing strategy at XarrowAI increasing deal size by 15% and market cap by $500,000.",
    },
  ],
  experience: [
    {
      title: "Instant Chartz App, Morcelle Program",
      company: "Morcelle",
      period: "Jan 2023 - Present",
      responsibilities: [
        "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.",
        "Streamlined manufacturing processes, reducing production costs by 10%.",
        "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime.",
      ],
    },
    {
      title: "System UX Engineer",
      company: "XarrowAI Industries",
      period: "Feb 2021 - Dec 2022",
      responsibilities: [
        "Designed and optimised a robotic control system, realizing a 12% performance improvement.",
        "Coordinated testing and validation, ensuring compliance with industry standards.",
        "Provided technical expertise, contributing to a 15% reduction in system failures.",
      ],
    },
  ],
  education: [
    {
      degree: "UX Industrial Basics and General Application",
      institution: "University of Engineering UX Cohort",
      period: "Aug 2016 - Oct 2019",
      details: [
        "Major in Automotive Technology.",
        "Thesis on Technological Advancements within the current Mechatronics Industry.",
      ],
    },
    {
      degree: "Bachelor of Design in Process Engineering",
      institution: "Engineering University",
      period: "May 2014 - May 2016",
      details: [
        "Relevant coursework in Structural Design and Project Management.",
      ],
    },
  ],
  additionalInfo: {
    Languages: ["English", "French", "Mandarin"],
    Certifications:
      "Professional Design Engineer (PDE) License, Project Management Tech (PMT)",
    "Awards/Activities":
      "Most Innovative Employer of the Year (2021), Overall Best Employee Division Two (2024), Onboarding Project Lead (2023)",
  },
};
export const defaultProfile: Profile = {
  id: 1,
  name: "ESTELLE DARCY",
  email: "hello@reallygreatsite.com",
  phone: "",
  address: "",
  linkedin: "",
  github: "",
  website: "www.reallygreatsite.com",
  role: "UX DESIGNER",
  summary:
    "UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. I have demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams.",
};
