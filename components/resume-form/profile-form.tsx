"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";

import useResumeStore from "@/store/resumeStore";
import { ProfileSchema } from "@/constants/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Profile } from "@/constants/types";
import TextEditor from "@/components/TextEditor";
const ProfileForm = () => {
  const profile = useResumeStore((state) => state.profile);
  const form = useForm<Profile>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: profile,
  });

  function onSubmit(data: Profile) {
    console.log("data", data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-2 max-w-[550px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Sara" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="dhanush@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+91 9089908978" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin Profile</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://linkedin.com/dhanushtheijas08"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Profile</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://github.com/dhanushtheijas08"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Potfilio</FormLabel>
              <FormControl>
                <Input placeholder="dhanushtheijas.vercel.app" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <TextEditor disabled={field.disabled!} value={field.value!} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2 flex justify-between gap-4">
          <Button type="submit" className="w-full" variant="outline">
            Back To Experience
          </Button>
          <Button type="submit" className="w-full" asChild>
            <Link href="">Next Section</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
