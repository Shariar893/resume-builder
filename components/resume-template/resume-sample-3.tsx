import React from "react";
import Education from "./resume-template-2/education";

const ResumeTemplate3 = ({
  profile,
  expertise,
  achievements,
  experience,
  education,
  additionalInfo,
}) => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto text-black bg-white p-8 shadow-lg print:shadow-none">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold uppercase mb-1">{profile.name}</h1>
        <h2 className="text-xl uppercase mb-2">{profile.title}</h2>
        <hr className="border-t border-gray-300 my-2" />
        <p className="text-sm">{profile.contact}</p>
      </header>

      {/* Summary */}
      <section className="mb-4">
        <p className="text-sm">{profile.summary}</p>
      </section>

      {/* Area of Expertise */}
      <section className="mb-4">
        <h3 className="text-lg font-bold uppercase mb-2">Area of Expertise</h3>
        <hr className="border-t border-gray-300 mb-2" />
        <div className="grid grid-cols-3 gap-4">
          {expertise.map((skill, index) => (
            <div key={index} className="text-sm">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-4">
        <h3 className="text-lg font-bold uppercase mb-2">Key Achievements</h3>
        <hr className="border-t border-gray-300 mb-2" />
        <ul className="list-disc list-inside text-sm">
          {achievements.map((achievement, index) => (
            <li key={index}>
              <span className="font-bold">{achievement.title}: </span>
              {achievement.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Professional Experience */}
      <section className="mb-4">
        <h3 className="text-lg font-bold uppercase mb-2">
          Professional Experience
        </h3>
        <hr className="border-t border-gray-300 mb-2" />
        {experience.map((job, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="font-bold">
                {job.title}, {job.company}
              </span>
              <span className="text-sm">{job.period}</span>
            </div>
            <ul className="list-disc list-inside text-sm">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <Education />

      {/* Additional Information */}
      <section>
        <h3 className="text-lg font-bold uppercase mb-2">
          Additional Information
        </h3>
        <hr className="border-t border-gray-300 mb-2" />
        <ul className="list-disc list-inside text-sm">
          {Object.entries(additionalInfo).map(([key, value]) => (
            <li key={key}>
              <span className="font-bold">{key}: </span>
              {Array.isArray(value) ? value.join(", ") : value}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumeTemplate3;
