import EducationForm from "@/components/resume-form/education-form";
import ExperienceForm from "@/components/resume-form/experience-form";
import ProfileForm from "@/components/resume-form/profile-form";
import SkillsForm from "@/components/resume-form/skills-form";

const EditResume = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <ProfileForm />
      <EducationForm />
      <ExperienceForm />
      <SkillsForm />
    </div>
  );
};

export default EditResume;
