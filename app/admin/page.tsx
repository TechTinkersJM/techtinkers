"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - In a real app, this would come from your database
const mockRegistrations = [
  {
    id: 1,
    parentName: "John Doe",
    parentEmail: "john@example.com",
    parentPhone: "123-456-7890",
    childName: "Jane Doe",
    childAge: "8",
    program: "robotics",
    status: "pending",
    registrationDate: "2024-03-20",
  },
  // Add more mock data as needed
];

export default function AdminPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredRegistrations = mockRegistrations.filter((reg) => {
    const matchesSearch =
      reg.parentName.toLowerCase().includes(search.toLowerCase()) ||
      reg.childName.toLowerCase().includes(search.toLowerCase()) ||
      reg.parentEmail.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "all" || reg.program === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Registration Management</h1>

        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />

          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Programs</SelectItem>
              <SelectItem value="robotics">Robotics Adventure</SelectItem>
              <SelectItem value="coding">Code Explorers</SelectItem>
              <SelectItem value="engineering">Young Engineers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-card rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Registration Date</TableHead>
                <TableHead>Parent Name</TableHead>
                <TableHead>Parent Email</TableHead>
                <TableHead>Child Name</TableHead>
                <TableHead>Child Age</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRegistrations.map((registration) => (
                <TableRow key={registration.id}>
                  <TableCell>{registration.registrationDate}</TableCell>
                  <TableCell>{registration.parentName}</TableCell>
                  <TableCell>{registration.parentEmail}</TableCell>
                  <TableCell>{registration.childName}</TableCell>
                  <TableCell>{registration.childAge}</TableCell>
                  <TableCell className="capitalize">{registration.program}</TableCell>
                  <TableCell className="capitalize">{registration.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}