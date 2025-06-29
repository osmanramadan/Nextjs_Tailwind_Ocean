
import React from "react";

export default function Splashbtns() {
  return (
    <div className="flex space-x-4 flex items-center justify-center mt-7 px-4">
      {/* Primary Button */}
      <button className="group w-43 h-11 !bg-[#0284C7] hover:!bg-[#0EA5E9] text-[18px] md:text-xl text-white font-medium py-1 px-1 rounded-md">
        Get Started <span className="!ml-1 font-bold  !bg-[#0284C7]  group-hover:!bg-[#0EA5E9]">→</span>
      </button>

      {/* Secondary Button */}
      <button  className="w-32 md:w-39 h-12 md:text-xl text-white py-2 px-3 rounded-md border border-slate-600 hover:border-slate-500 hover:!bg-[#1E293B] transition-all duration-300">
        View Pricing
      </button>


    </div>
  );
}
