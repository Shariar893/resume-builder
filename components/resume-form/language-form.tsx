"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LanguageSchema } from "@/constants/schema";
import { Language } from "@/constants/types";

import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const LanguageForm = () => {
  const form = useForm<Language>({
    resolver: zodResolver(LanguageSchema),
  });

  function onSubmit(data: Language) {
    console.log(data);
  }

  return (
    <div className="max-w-[550px]">
      <Model>
        <ModelTrigger className="w-full">
          <div className="flex justify-center items-center gap-2 border-[1.5px] border-dashed py-4 cursor-pointer">
            <Plus className="w-5 h-5" />
            <p>Add a new skill</p>
          </div>
        </ModelTrigger>

        <ModelContent>
          <ModelHeader className="font-semibold text-xl">
            Skill Section
          </ModelHeader>
          <ModelBody className="max-h-screen overflow-y-scroll scrollbar-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full md:px-1 mb-2 md:mb-1 grid gap-2 grid-cols-2"
              >
                <FormField
                  control={form.control}
                  name="language.languageName"
                  render={({ field }) => (
                    <FormItem className="col-span-2 sm:col-span-1">
                      <FormLabel>Language</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-base"
                          placeholder="Language"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="language.proficiency"
                  render={({ field }) => (
                    <FormItem className="col-span-2 sm:col-span-1">
                      <FormLabel>Proficiency</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          disabled={field.disabled}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Language Proficiency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">
                              Intermediate
                            </SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
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

export default LanguageForm;
