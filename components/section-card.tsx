"use client";

import { Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dispatch, SetStateAction, useState } from "react";

type SectionCardProps = {
  id: string;
  primaryHeading: string;
  secondaryHeading: string;
  onDelete: (id: string) => void;
  setIsEducationFormOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedEducation?: Dispatch<SetStateAction<string | null>>;
};

const SectionCard = ({
  id,
  primaryHeading,
  secondaryHeading,
  onDelete,
  setIsEducationFormOpen,
  setSelectedEducation,
}: SectionCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative pl-14 pr-8 h-[5rem] gap-4 rounded-[2px] border bg-card text-card-foreground shadow-sm flex">
      <div className="border-r">
        <div className="absolute grid grid-cols-2 place-items-center place-content-center gap-y-1 py-1 w-7 bg-secondary top-1/2 -translate-y-1/2 rounded left-4 cursor-grab">
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
          <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
        </div>
      </div>

      <div
        className="self-center space-y-[2.5px] flex-1"
        onClick={() => {
          setIsEducationFormOpen(true);
          setSelectedEducation?.(id);
        }}
      >
        <h2 className="text-2xl text-primary/80 font-semibold leading-none tracking-tight">
          {primaryHeading}
        </h2>
        <p className="text-primary/50">{secondaryHeading}</p>
      </div>

      <AlertDialog open={open}>
        <AlertDialogTrigger
          className="self-center"
          onClick={() => setOpen(true)}
        >
          <Trash2Icon className="size-6 hover:text-muted-foreground cursor-pointer" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:space-x-3.5">
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className=""
              onClick={() => {
                onDelete(id);
                setOpen(false);
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SectionCard;
