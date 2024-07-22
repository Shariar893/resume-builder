"use client";
import { ArrowRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ShinyButton from "./ShinyButton";
import img1 from "@/public/resume-templates/001.jpg";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useResumeStore from "@/store/resumeStore";
import {
  Model,
  ModelBody,
  ModelClose,
  ModelContent,
  ModelDescription,
  ModelFooter,
  ModelHeader,
  ModelTitle,
  ModelTrigger,
} from "./responsive-model";

const images = [
  { src: img1, id: 1 },
  { src: img1, id: 2 },
  { src: img1, id: 3 },
  { src: img1, id: 4 },
  { src: img1, id: 5 },
  { src: img1, id: 6 },
  { src: img1, id: 7 },
  { src: img1, id: 8 },
];

const SelectDialog = () => {
  const [resumeTemplateId, setResumeTemplateId] = useState<null | number>(null);
  const router = useRouter();
  const setResumeId = useResumeStore((state) => state.setResumeId);
  const renderTemplate = images.map((image) => (
    <div
      className={cn(
        "rounded cursor-pointer",
        resumeTemplateId === image.id &&
          "ring-2 ring-ring ring-offset-[2.5px] ring-offset-background transition-colors outline-none"
      )}
      key={`${image.id}`}
      onClick={() => setResumeTemplateId(image.id)}
    >
      <Image
        src={image.src}
        alt="template"
        className="object-cover object-center rounded"
      />
    </div>
  ));

  return (
    <Model>
      <ModelTrigger>
        <ShinyButton>
          Start Building
          <ArrowRight className="ml-2 h-5 w-5" />
        </ShinyButton>
      </ModelTrigger>
      <ModelContent className="md:max-w-[95vw] md:max-h-[95vh] p-1.5 xl:p-5">
        <ModelHeader className="space-y-2.5">
          <ModelTitle className="text-xl text-center">
            Choose Your Template
          </ModelTitle>
          <div className="sm:px-4">
            <Select>
              <SelectTrigger className="text-base mx-auto sm:max-w-[280px] sm:mx-0">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent defaultValue={"all"}>
                <SelectItem
                  value="all"
                  defaultChecked={true}
                  className="text-base"
                >
                  All
                </SelectItem>
                <SelectItem value="frontend" className="text-base">
                  Frontend
                </SelectItem>
                <SelectItem value="backend" className="text-base">
                  Backend
                </SelectItem>
                <SelectItem value="fullstack" className="text-base">
                  Full Stack
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ModelHeader>

        <ScrollArea>
          <div className="h-[65vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-5 px-5 place-items-center">
            {renderTemplate}
          </div>
        </ScrollArea>

        <ModelFooter className="md:-translate-y-3.5 lg:-translate-y-2.5">
          <Button
            size="sm"
            disabled={!resumeTemplateId}
            onClick={() => {
              if (resumeTemplateId) {
                setResumeId(`${resumeTemplateId}`);
                router.push(`/resume/${resumeTemplateId}/edit/content`);
              }
            }}
          >
            Continue
          </Button>
        </ModelFooter>
      </ModelContent>
    </Model>
  );
};

export default SelectDialog;
