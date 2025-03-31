import Link from "next/link";
import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-18">
      <div className="container mx-auto px-6 md:px-18 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-start mb-4">
              <Link href={"/"}>
                <div className="flex items-center bg-[#0E1627] rounded-lg">
                  { /* Logo Icon */}
                  <div className="w-8 h-8 flex items-center justify-center mr-2">
                    <img src="/favicon.ico" alt="Logo Image" className="w-full h-full" />
                  </div>
                  {/* Brand Name + Dot (inline) */}
                  <span className="text-white text-[15px] font-bold flex items-center">
                    Ocean<span className="text-[#0369A1] mt-2 md:mt-0 text-2xl">•</span>
                  </span>
                </div>
              </Link>
            </div>
            <p className="mt-2 sm:text-start text-[#94A3B8]  text-bold md:text-[15px] text-[14px] mb-6">Making the world a better place through constructing elegant hierarchies.</p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <Link key={index} href={href} className="text-gray-400 hover:text-[#0276B4] transition-transform duration-300 hover:-translate-y-1">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {[
            { title: "Solutions", links: ["Pricing", "Documentation", "Guides", "API Status"] },
            { title: "Support", links: ["Pricing", "Documentation", "Guides", "API Status"] },
            { title: "Company", links: ["About", "Blog", "Jobs", "Press", "Partners"] },
            { title: "Legal", links: ["Claim", "Privacy", "Terms"] },
          ].map((section, index) => (
            <div key={index} className="sm:col-span-1 md:col-span-1 lg:col-span-1 w-full sm:w-1/2">
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2 ">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:translate-x-1">
                    <Link href="#" className="text-gray-400 text-[14px] transition-transform duration-300 hover:!text-[#0276B4] ">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 p-3">
          <p className="text-center sm:text-start text-[#94A3B8]  text-bold md:text-[15px] text-[14px] ">© 2023 Ocean, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
