"use client";
import useResumeStore from "@/store/resumeStore";

const sampleResumeDataMarketing = {
  education: [
    {
      eduId: "edu1",
      institutionName: "State University",
      degree: "Bachelor of Business Administration",
      fieldOfStudy: "Marketing",
      startDate: "2010-09-01",
      endDate: "2014-05-31",
      description: "Graduated with honors. President of the Marketing Club.",
      score: 3.7,
    },
    {
      eduId: "edu2",
      institutionName: "Digital Marketing Institute",
      degree: "Professional Diploma",
      fieldOfStudy: "Digital Marketing",
      startDate: "2015-03-01",
      endDate: "2015-09-30",
      description:
        "Comprehensive program covering all aspects of digital marketing strategy and implementation.",
      score: 92,
    },
  ],
  experience: [
    {
      expId: "exp1",
      role: "Senior Marketing Manager",
      company: "Global Brands Corp.",
      location: "New York, NY",
      startDate: "2019-06-01",
      endDate: null,
      description:
        "Lead a team of 5 marketing specialists. Developed and executed multi-channel marketing campaigns that increased brand awareness by 35% and customer engagement by 50%.",
    },
    {
      expId: "exp2",
      role: "Digital Marketing Specialist",
      company: "Tech Startup Inc.",
      location: "San Francisco, CA",
      startDate: "2014-07-01",
      endDate: "2019-05-31",
      description:
        "Managed all aspects of digital marketing including SEO, SEM, social media, and email campaigns. Achieved a 200% increase in organic traffic and a 25% increase in conversion rates.",
    },
  ],
  projects: [
    {
      projectId: "proj1",
      projectName: "Brand Refresh Campaign",
      deploymentLink: "https://www.globalbrands.com/refresh2023",
      repoLink: "https://github.com/alexjohnson/brand-refresh",
      projectDescription:
        "Led a comprehensive brand refresh campaign, including new visual identity, messaging, and digital presence. Resulted in a 40% increase in brand recall and 25% increase in customer loyalty.",
    },
    {
      projectId: "proj2",
      projectName: "Marketing Automation System",
      deploymentLink:
        "https://www.alexjohnson.marketing/case-studies/automation",
      repoLink: "https://github.com/alexjohnson/marketing-automation",
      projectDescription:
        "Designed and implemented a custom marketing automation system using HubSpot and custom integrations. Improved lead nurturing efficiency by 60% and increased qualified leads by 45%.",
    },
  ],
  skills: [
    {
      skillId: "skill1",
      skillName: "Digital Marketing Strategy",
      level: "Expert",
    },
    {
      skillId: "skill2",
      skillName: "SEO/SEM",
      level: "Advanced",
    },
    {
      skillId: "skill3",
      skillName: "Social Media Marketing",
      level: "Expert",
    },
    {
      skillId: "skill4",
      skillName: "Content Marketing",
      level: "Advanced",
    },
    {
      skillId: "skill5",
      skillName: "Google Analytics",
      level: "Advanced",
    },
    {
      skillId: "skill6",
      skillName: "Adobe Creative Suite",
      level: "Intermediate",
    },
    {
      skillId: "skill7",
      skillName: "Email Marketing",
      level: "Advanced",
    },
    {
      skillId: "skill8",
      skillName: "Marketing Automation",
      level: "Advanced",
    },
  ],
};

const ResumeTemplate2 = () => {
  const profile = useResumeStore((state) => state.profile);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold"> {profile.name} </h1>
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
        <hr className="my-2 border-gray-300" />
      </header>

      {/* Objective */}
      <section className="mb-6">
        <h2 className="text-lg font-bold underline mb-2">OBJECTIVE</h2>
        <p>
          Graduate student looking for domain positions starting month and year.
        </p>
      </section>

      {/* Core Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold underline mb-2">CORE SKILLS</h2>
        <p>
          Skill 1 (years of experience), Skill 2 (years of experience), Skill 3
          (years of experience)
        </p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold underline mb-2">EDUCATION</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <strong>University name</strong>
            <span>City, State</span>
          </div>
          <div className="flex justify-between italic">
            <span>Degree name + Specialization</span>
            <span>GPA: x.x/x.x</span>
            <span>month-year</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <strong>University name</strong>
            <span>City, State</span>
          </div>
          <div className="flex justify-between italic">
            <span>Degree name + Specialization</span>
            <span>GPA: x.x/x.x</span>
            <span>month-year</span>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold underline mb-2">WORK EXPERIENCE</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <strong>Company name</strong>
            <span>City Name, State</span>
          </div>
          <div className="flex justify-between italic">
            <span>Role name, Department Name</span>
            <span>Month, Year – Month, Year</span>
          </div>
          <ul className="list-disc pl-5 mt-1">
            <li>Developed XYZ using XYZ that led to X% improvement.</li>
            <li>Led an initiative XYZ to identify the root cause.</li>
            <li>Collaborated with XYZ team to work on XYZ feature.</li>
          </ul>
        </div>
        {/* Add more work experiences here */}
      </section>

      {/* Project Work */}
      <section className="mb-6">
        <h2 className="text-lg font-bold underline mb-2">PROJECT WORK</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <strong>Project Name</strong>
            <span className="italic">Course Name</span>
            <span>Month, Year – Month, Year</span>
          </div>
          <ul className="list-disc pl-5 mt-1">
            <li>Developed XYZ using XYZ that led to X% improvement.</li>
            <li>Led an initiative XYZ to identify the root cause.</li>
            <li>Collaborated with XYZ team to work on XYZ feature.</li>
          </ul>
        </div>
        {/* Add more projects here */}
      </section>

      {/* Extra Section */}
      <section className="mb-6">
        <h2 className="text-lg font-bold underline mb-2">EXTRA SECTION</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <strong>Activity/ Role</strong>
            <span>Month, Year – Month, Year</span>
          </div>
          <ul className="list-disc pl-5 mt-1">
            <li>
              What did you do, how did you do it and what did you achieve?
            </li>
          </ul>
        </div>
        {/* Add more activities here */}
      </section>

      {/* Other Skills */}
      <section>
        <h2 className="text-lg font-bold underline mb-2">OTHER SKILLS</h2>
        <p>
          <strong>Skill Group 1:</strong> Skill 1, Skill 2, Skill 3
        </p>
        <p>
          <strong>Skill Group 2:</strong> Skill 1, Skill 2, Skill 3, Skill 4
        </p>
      </section>
    </div>
  );
};

export default ResumeTemplate2;
