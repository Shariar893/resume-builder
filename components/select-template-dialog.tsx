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
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useResumeStore from "@/store/resumeStore";

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
    <Dialog>
      <DialogTrigger>
        <ShinyButton>
          Start Building
          <ArrowRight className="ml-2 h-5 w-5" />
        </ShinyButton>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw]">
        <DialogHeader className="space-y-5">
          <DialogTitle className="text-4xl text-center">
            Choose Your Template
          </DialogTitle>
          <div className="my-6">
            <Select>
              <SelectTrigger className="w-[280px] text-xl">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent defaultValue={"all"}>
                <SelectItem
                  value="all"
                  defaultChecked={true}
                  className="text-xl"
                >
                  All
                </SelectItem>
                <SelectItem value="frontend" className="text-xl">
                  Frontend
                </SelectItem>
                <SelectItem value="backend" className="text-xl">
                  Backend
                </SelectItem>
                <SelectItem value="fullstack" className="text-xl">
                  Full Stack
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DialogHeader>

        <ScrollArea>
          <div className="h-[65vh] grid grid-cols-3 gap-10 py-5 px-5 place-items-center">
            {renderTemplate}
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button
            size="lg"
            disabled={!resumeTemplateId}
            onClick={() => {
              if (resumeTemplateId) {
                setResumeId(`${resumeTemplateId}`);
                router.push(`/dashboard/${resumeTemplateId}/edit`);
              }
            }}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SelectDialog;
