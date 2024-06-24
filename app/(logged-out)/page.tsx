import { Button } from "@/components/ui/button";
import React from "react";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center ">
        <PersonStandingIcon
          size={50}
          className="text-pink-500"
        ></PersonStandingIcon>
        hireMe
      </h1>
      <p> Create best looking and userFriendly UI components</p>
      <div className="flex gap-2 items-center ">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}
