import React from "react";

const ResumeTemplate2 = () => {
  return (
    <div
      className="bg-white shadow-md mx-auto my-8 max-w-full p-8 rounded-md"
      style={{ width: "210mm", minHeight: "297mm", padding: "20mm" }}
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-sm text-gray-600">
          123-456-7890 |{" "}
          <a href="mailto:user@domain.tld" className="text-blue-500">
            user@domain.tld
          </a>{" "}
          |
          <a href="https://linkedin.com/in/USER" className="text-blue-500">
            linkedin.com/in/USER
          </a>{" "}
          |
          <a href="https://github.com/USER" className="text-blue-500">
            github.com/USER
          </a>
        </p>
      </div>

      {/* Summary */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg leading-relaxed">
          Simplified version of a monstrosity that I built back in college using
          current best practices.
        </p>
      </section>

      {/* Technical Competencies */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Technical Competencies</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc ml-6">
            <li className="text-lg">
              Automation: SaltStack, Ansible, Chef, Puppet
            </li>
            <li className="text-lg">Cloud: Salt-Cloud, Linode, GCP, AWS</li>
            <li className="text-lg">
              Languages: Python, Bash, PHP, Perl, VB/C#.Net
            </li>
          </ul>
          <ul className="list-disc ml-6">
            <li className="text-lg">OS: Debian, Ubuntu, CentOS, BSD, AIX</li>
            <li className="text-lg">
              Policies: CIS, SOC2, PCI-DSS, GDPR, ITIL
            </li>
            <li className="text-lg">
              Testing: Pytest, Docker, CircleCI, Jenkins, Inspec
            </li>
          </ul>
        </div>
      </section>

      {/* Recent Experience */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Experience</h2>

        {/* Consulting Corp */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Consulting Corp</h3>
          <p className="italic mb-2">Jul 2015 -- Jun 2025</p>
          <p className="mb-2">Senior DevOps Engineer (FTE Consultant)</p>
          <ul className="list-disc ml-6">
            <li>Client: Notable Placement</li>
            <li>Client: Challenges Unlimited</li>
            <li>Client: Broken Galleries</li>
          </ul>
        </div>

        {/* HealthCo Industries */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">HealthCo Industries</h3>
          <p className="italic mb-2">Feb 2011 -- Mar 2016</p>
          <p className="mb-2">Senior Systems Administrator (SRE)</p>
          <ul className="list-disc ml-6">
            <li>
              Managed virtualized server environment spanning multiple data
              centers
            </li>
            <li>
              Oversaw migration of critical business applications to cloud-based
              platforms
            </li>
            <li>Configured and monitored network security measures</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">State University</h3>
          <p className="mb-2">
            Bachelor of Science in Computer Information Systems
          </p>
          <p className="mb-2">Minors: Networking, Network Security</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Certifications</h3>
          <ul className="list-disc ml-6">
            <li>SaltStack Certified Engineer</li>
            <li>GCP - Professional Cloud Architect</li>
          </ul>
        </div>
      </section>

      {/* Volunteer / Open Source */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Volunteer / Open Source</h2>

        {/* Hospital / Health Science IRB */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">
            Hospital / Health Science IRB
          </h3>
          <p className="italic mb-2">Mar 2015 -- Present</p>
          <ul className="list-disc ml-6">
            <li>
              Served as non-scientific/unaffiliated patient-representative
            </li>
            <li>
              Reviewed patient consent forms for completeness and accuracy
            </li>
          </ul>
        </div>

        {/* Debian Linux */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Debian Linux</h3>
          <p className="italic mb-2">Jan 2001 -- Present</p>
          <ul className="list-disc ml-6">
            <li>Maintained packages in Debian repositories</li>
            <li>
              Reviewed and sponsored packages on behalf of prospective
              Developers
            </li>
            <li>Resolved bugs reported in bug tracking system</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeTemplate2;
