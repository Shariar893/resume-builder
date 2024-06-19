"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { EducationSchema } from "@/constants/schema";
import { Education } from "@/constants/types";

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

const EducationForm = () => {
  const form = useForm<Education>({
    resolver: zodResolver(EducationSchema),
  });

  function onSubmit(data: Education) {
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
          <ModelHeader className="font-semibold">Education Section</ModelHeader>
          <ModelBody className="max-h-screen overflow-y-scroll scrollbar-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2.5 w-full md:px-1 mb-2 md:mb-1"
              >
                <FormField
                  control={form.control}
                  name="education.institutionName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-base"
                          placeholder="Institution Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-4">
                  <FormField
                    control={form.control}
                    name="education.degree"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Degree</FormLabel>
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
                    name="education.fieldOfStudy"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Field of Study</FormLabel>
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
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-4">
                  <FormField
                    control={form.control}
                    name="education.startDate"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            className="text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="education.endDate"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            className="text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="education.score"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Score</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-base"
                          placeholder="Your CGPA"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="education.description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ModelFooter className="p-0">
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

export default EducationForm;
