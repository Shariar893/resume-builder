"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ProjectSchema } from "@/constants/schema";
import { Project } from "@/constants/types";

import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Model,
  ModelTrigger,
  ModelContent,
  ModelHeader,
  ModelBody,
  ModelFooter,
} from "@/components/responsive-model";
import TextEditor from "@/components/TextEditor";
const ProjectForm = () => {
  const form = useForm<Project>({
    resolver: zodResolver(ProjectSchema),
  });

  function onSubmit(data: Project) {
    console.log(data);
  }

  return (
    <div className="max-w-[550px]">
      <Model>
        <ModelTrigger className="w-full">
          <div className="flex justify-center items-center gap-2 border-[1.5px] border-dashed py-4 cursor-pointer">
            <Plus className="w-5 h-5" />
            <p>Add a new item</p>
          </div>
        </ModelTrigger>

        <ModelContent>
          <ModelHeader className="font-semibold text-xl">
            Experience Section
          </ModelHeader>
          <ModelBody className="max-h-screen overflow-y-scroll scrollbar-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full md:px-1 mb-2 md:mb-1 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4"
              >
                <FormField
                  control={form.control}
                  name="project.projectName"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Porject Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-base"
                          placeholder="Company Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="project.deploymentLink"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Live Link</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-base"
                          placeholder="Frontend Developer"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="project.repoLink"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Github Link</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-base"
                          placeholder=""
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="project.projectDescription"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <TextEditor
                          disabled={field.disabled!}
                          value={field.value!}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ModelFooter className="p-0 col-span-2">
                  <Button type="submit" className="w-full mt-2">
                    Save changes
                  </Button>
                </ModelFooter>
              </form>
            </Form>
          </ModelBody>
        </ModelContent>
      </Model>
    </div>
  );
};

export default ProjectForm;
