const ResumeTemplate = ({ data }) => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black">{data.name}</h1>
        <p className="text-xl text-gray-600">{data.title}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={`tel:${data.contact.phone}`}
            className="text-blue-600 hover:underline"
          >
            {data.contact.phone}
          </a>
          <a
            href={`mailto:${data.contact.email}`}
            className="text-blue-600 hover:underline"
          >
            {data.contact.email}
          </a>
          <a
            href={data.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Website
          </a>
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-lg">{exp.company}</p>
                <p className="italic">{`${exp.duration} | ${exp.location}`}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p>{`${edu.institution} | ${edu.duration} | ${edu.location}`}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Projects</h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>{project.techStack}</strong>
                  </li>
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Technical Skills
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Programming Languages</h3>
              <ul className="list-disc list-inside">
                {data.skills.programmingLanguages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Frameworks & Libraries</h3>
              <ul className="list-disc list-inside">
                {data.skills.frameworksLibraries.map((framework, index) => (
                  <li key={index}>{framework}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Version Control</h3>
              <ul className="list-disc list-inside">
                {data.skills.versionControl.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Databases / Other Tools</h3>
              <ul className="list-disc list-inside">
                {data.skills.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Certifications
            </h2>
            <ul className="list-disc list-inside">
              {data.certifications.map((cert, index) => (
                <li key={index}>
                  {cert.title}{" "}
                  <a href={cert.link} className="text-blue-600 hover:underline">
                    {cert.issuer}
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
