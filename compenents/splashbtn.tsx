"use client";
import { CircleArrowRight } from "lucide-react";
import React from "react";

export default function Splashbtn() {
  return (
    <center>
      <div className="h-8 px-2 w-60 text-sm rounded-full text-[#8695A9] border-[#1E293B] border-[0.1px] flex items-center justify-center transition-all duration-300 hover:bg-[#475366] hover:border-[#0EA5E9]  cursor-pointer">
        <span>New Features Is Now Available.</span>
        <CircleArrowRight height={17} width={17} className="ml-1" />
      </div>
    </center>
  );
}
