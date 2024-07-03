import CertificationForm from "@/components/resume-form/certification-form";
import EducationForm from "@/components/resume-form/education-form";
import ExperienceForm from "@/components/resume-form/experience-form";
import LanguageForm from "@/components/resume-form/language-form";
import ProfileForm from "@/components/resume-form/profile-form";
import ProjectForm from "@/components/resume-form/project-form";
import PublicationForm from "@/components/resume-form/publication-form";
import SkillsForm from "@/components/resume-form/skills-form";
import Resume from "@/components/resume-template/resume";

import { ScrollArea } from "@/components/ui/scroll-area";
import SectionLayout from "./section-layout";
import { Icons } from "@/components/icons";

const formList = [
  { icon: "education", title: "Education", children: <EducationForm /> },
  { icon: "skill", title: "Skill", children: <SkillsForm /> },
  { icon: "project", title: "Project", children: <ProjectForm /> },
  { icon: "language", title: "Language", children: <LanguageForm /> },
  {
    icon: "certification",
    title: "Certification",
    children: <CertificationForm />,
  },
];

const EditResume = () => {
  const renderFormsComponent = formList.map(({ children, icon, title }) => (
    <SectionLayout icon={icon as keyof typeof Icons} title={title} key={title}>
      {children}
    </SectionLayout>
  ));

  return (
    <div className="grid grid-cols-12">
      {/* <ScrollArea className="col-span-4"> */}
      <div className="space-y-6 p-4 col-span-4">
        <ProfileForm />
        {renderFormsComponent}
        <PublicationForm />
      </div>
      {/* </ScrollArea>  */}
      <Resume />
    </div>
  );
};

export default EditResume;
