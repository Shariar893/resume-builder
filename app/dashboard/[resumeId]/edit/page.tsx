import { ScrollArea } from "@/components/ui/scroll-area";

import ProfileForm from "@/components/resume-form/profile-form";
import Certification from "./(section)/certification";
import Education from "./(section)/education";
import Experience from "./(section)/experience";
import Language from "./(section)/language";
import Project from "./(section)/project";
import Publication from "./(section)/publication";
import Skill from "./(section)/skill";

import Resume from "@/components/resume-template/resume";
import Footer from "./footer";

const EditResume = () => {
  return (
    <div className="flex max-h-screen overflow-hidden w-full">
      <div className="flex w-full">
        <ScrollArea className="h-screen w-full">
          <div className="space-y-6 p-4">
            <ProfileForm />
            <Education />
            <Experience />
            <Project />
            <Skill />
            <Language />
            <Certification />
            <Publication isLast />
          </div>
        </ScrollArea>
      </div>
      <div className="max-w-full hidden md:block">
        <Resume />
      </div>
      <Footer />
    </div>
  );
};

export default EditResume;
