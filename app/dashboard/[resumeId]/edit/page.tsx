import CertificationForm from "@/components/resume-form/certification-form";
import EducationForm from "@/components/resume-form/education-form";
import ExperienceForm from "@/components/resume-form/experience-form";
import LanguageForm from "@/components/resume-form/language-form";
import ProfileForm from "@/components/resume-form/profile-form";
import ProjectForm from "@/components/resume-form/project-form";
import PublicationForm from "@/components/resume-form/publication-form";
import SkillsForm from "@/components/resume-form/skills-form";

const EditResume = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <ProfileForm />
      <EducationForm />
      <ExperienceForm />
      <SkillsForm />
      <ProjectForm />
      <LanguageForm />
      <CertificationForm />
      <PublicationForm />
    </div>
  );
};

export default EditResume;
