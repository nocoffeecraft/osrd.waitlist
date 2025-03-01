"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function SignUp({ setIsClicked }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workingPlace, setWorkingPlace] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
    setIsClicked(true);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="text-center w-full sm:w-2/3 xl:w-1/3">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="OSRD Logo" width={100} height={100} />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">Join Now for Early Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type={"text"}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="university" className="text-base">
                  University/Company
                  <span className="text-muted-foreground text-sm">
                    (Optional)
                  </span>
                </Label>
                <Input
                  id="university"
                  placeholder="Enter your university/company"
                  type={"text"}
                  onChange={(e) => setWorkingPlace(e.target.value)}
                  value={workingPlace}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full my-7 bg-[#0066FF] text-base hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center"></CardFooter>
      </Card>
    </div>
  );
}
