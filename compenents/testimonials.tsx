"use client";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Taha",
      role: "Team Leader",
      image: "/images/testimonials/user-1.webp", // Replace with actual image path
      feedback: "CRM Dashboard Boosted Our Engineering Team's Productivity And Efficiency. Highly Recommended!",
    },
    {
      name: "Abdellah Massoudi",
      role: "Startup Founder",
      image: "/images/testimonials/user-2.webp", // Replace with actual image path
      feedback: "Game-Changer For Our Engineering Team, Revolutionizing Project Management And Collaboration.",
    },
    {
      name: "Omar Fahed",
      role: "Team Member",
      image: "/images/testimonials/user-3.webp", // Replace with actual image path
      feedback: "Simplified Project Manament, Improved Communication, And Empowered Decision-Making. Highly Endorsed!",
    }
  ];

  return (
    <div className="bg-[#0F172A] text-white py-7 !px-2 ">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 rounded-lg flex flex-col items-center sm:items-start group hover:!bg-[#1E293B]">
            <span className="font-bold group-hover:!bg-[#1E293B]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-10 h-10 text-sky-600 group-hover:!bg-[#1E293B]"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg></span>
            <p className="mt-2 text-center sm:text-start text-[#94A3B8]  text-bold md:text-[15px] text-[13px] group-hover:!bg-[#1E293B]">{testimonial.feedback}</p>
            <div className="flex items-center mt-4 group-hover:!bg-[#1E293B]">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full group-hover:!bg-[#1E293B]"
              />
              
              <div className="ml-3 text-left group-hover:!bg-[#1E293B]">
                
                <h3 className="text-sm font-bold group-hover:!bg-[#1E293B]">{testimonial.name}</h3>
                <p className="text-[#0EA5E9] text-xs group-hover:!bg-[#1E293B]">{testimonial.role}</p>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
