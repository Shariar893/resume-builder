import { Separator } from "@/components/ui/separator";
import EducationForm from "@/components/resume-form/education-form";
import SectionHeading from "@/components/section-heading";

const Education = () => {
  return (
    <section className="flex flex-col gap-6 w-[500px]">
      <SectionHeading title="Education" icon="education" />
      <EducationForm />
      <Separator />
    </section>
  );
};

export default Education;
