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

const EditResume = () => {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <ScrollArea>
        <div className="space-y-6 p-4">
          <ProfileForm />
          <EducationForm />
          <ExperienceForm />
          <SkillsForm />
          <ProjectForm />
          <LanguageForm />
          <CertificationForm />
          <PublicationForm />
        </div>
      </ScrollArea>
      <Resume />
    </div>
  );
};

export default EditResume;
