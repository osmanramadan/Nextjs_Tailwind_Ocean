
import React from "react";

export default function Splashbtns() {
  return (
    <div className="flex space-x-4 flex items-center justify-center mt-7 px-8">
      {/* Primary Button */}
      <button className="w-40 md:w-45 h-11 !bg-[#0284C7] hover:bg-[#0EA5E9] text-xl text-white font-medium py-1 px-1 rounded-md transition-all duration-300">
        Get Started <span className="!ml-1 font-bold  !bg-[#0284C7]">→</span>
      </button>

      {/* Secondary Button */}
      <button className="w-30 md:w-38  h-11 text-xl text-white py-2 px-3 rounded-md border-[0.1px] border-[#1E293B] hover:bg-[#1E293B] transition-all duration-300">
        View Pricing
      </button>
    </div>
  );
}
