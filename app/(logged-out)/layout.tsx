import React from "react";
import LightDarkToggle from "@/components/ui/lightdarktoggle";
type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
        {children}
      </div>

      <LightDarkToggle className="fixed top-10 right-11" />
    </>
  );
}
