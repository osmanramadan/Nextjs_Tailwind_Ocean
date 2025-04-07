"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0F172A] text-white py-1 sm:px-9 px-2 bg-red-100 fixed top-0 left-0 right-0 z-50">

      <div className="container mx-auto flex justify-between items-center">

      <Link href={"/"}>
          <div className="flex items-center bg-[#0E1627] p-4 rounded-lg">
           { /* Logo Icon */}
          <div className="w-8 h-8 flex items-center justify-center mr-2">
              <img src="/favicon.ico" alt="Logo Image" className="w-full h-full" />
          </div>
          {/* Brand Name + Dot (inline) */}
          <span className="text-white text-xl font-bold flex items-center">
              Ocean<span className="text-[#0369A1]  mt-2 md:mt-0 text-3xl">•</span>
          </span>
          </div>
      </Link>


      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-semibold text-[#E1E7EF]">
          {["Features","Pricing","Testimonials","Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden px-6">
        <Menu className="w-6 h-6 text-[#E1E7EF]" />
      </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col font-semibold items-center  mt-4 space-y-4 bg-[#0D1321] py-4">
          {["Features", "Pricing", "Testimonials", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
