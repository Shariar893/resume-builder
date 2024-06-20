"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CertificationSchema } from "@/constants/schema";
import { Certification } from "@/constants/types";

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

const CertificationForm = () => {
  const form = useForm<Certification>({
    resolver: zodResolver(CertificationSchema),
  });

  function onSubmit(data: Certification) {
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
                className="w-full md:px-1 mb-2 md:mb-1 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4"
              >
                <FormField
                  control={form.control}
                  name="certification.certificationName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Certificate Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-base"
                          placeholder="Certificate Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="certification.certificationAuthority"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Authority</FormLabel>
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
                  name="certification.date"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Issued Date</FormLabel>
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
                  name="certification.certificationProof"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Certification Proof</FormLabel>
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
                  name="certification.description"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ModelFooter className="p-0 col-span-2">
                  <Button type="submit" className="w-full mt-2 ">
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

export default CertificationForm;
