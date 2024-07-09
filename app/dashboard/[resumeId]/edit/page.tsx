import { ScrollArea } from "@/components/ui/scroll-area";

import ProfileForm from "@/components/resume-form/profile-form";
import Education from "./(section)/education";
import Experience from "./(section)/experience";
import Project from "./(section)/project";
import Skill from "./(section)/skill";
import Language from "./(section)/language";
import Certification from "./(section)/certification";
import Publication from "./(section)/publication";

import Resume from "@/components/resume-template/resume";

const EditResume = () => {
  return (
    <div className="flex max-h-screen overflow-hidden w-full">
      <ScrollArea className="w-fit flex">
        <div className="space-y-6 p-4 ">
          <ProfileForm />
          <Education />
          <Experience />
          <Project />
          <Skill />
          <Language />
          <Certification />
          <Publication />
        </div>
      </ScrollArea>
      <div className="max-w-full">
        <Resume />
      </div>
    </div>
  );
};

export default EditResume;
