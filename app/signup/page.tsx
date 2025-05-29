"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  parentEmail: z.string().email("Invalid email address"),
  parentPhone: z.string().min(10, "Please enter a valid phone number"),
  childName: z.string().min(2, "Name must be at least 2 characters"),
  childAge: z.string(),
  program: z.string(),
});

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      childName: "",
      childAge: "",
      program: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Registration submitted successfully!");
    console.log(values);
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-8">Summer Program Registration</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Parent/Guardian Information</h2>
                <FormField
                  control={form.control}
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parentEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parentPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Child Information</h2>
                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Child's Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter child's full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="childAge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Child's Age</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 9 }, (_, i) => i + 7).map((age) => (
                            <SelectItem key={age} value={age.toString()}>
                              {age} years
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="program"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Program</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="robotics">Robotics Adventure</SelectItem>
                          <SelectItem value="coding">Code Explorers</SelectItem>
                          <SelectItem value="engineering">Young Engineers</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">Submit Registration</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}