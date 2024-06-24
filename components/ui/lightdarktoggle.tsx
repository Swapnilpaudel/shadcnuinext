"use client";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {
  className?: string;
};
export default function LightDarkToggle({ className }: Props) {
  const [isDarkMode, setIsDarMode] = useState(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarMode((a) => !a);
            document.body.classList.toggle("dark");
          }}
        >
          {isDarkMode ? <MoonIcon></MoonIcon> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
