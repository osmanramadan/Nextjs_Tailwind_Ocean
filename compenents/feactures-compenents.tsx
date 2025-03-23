import React from 'react';

const features = [
  {
    title: "Reporting dashboard",
    description: "Generate insightful reports and analytics with our reporting dashboard feature, empowering data-driven decision-making for engineering teams.",
    image: "/images/bar-chart.webp"
  },
  {
    title: "Meeting scheduling",
    description: "Effortlessly schedule meetings, coordinate availability, and send automated reminders with the meeting scheduling feature, ensuring seamless collaboration.",
    image: "/images/calendar.webp"
  },
  {
    title: "100% secured",
    description: "Enhance data protection with robust security features, ensuring confidentiality, integrity, and compliance for your engineering team's CRM dashboard.",
    image: "/images/protect.webp"
  }
];

export default function FeaturesComponent() {
  return (
    <div>
      {features.map((feature, index) => (
        <div className="h-auto  py-4 px-2 flex flex-col lg:flex-row justify-between items-center  group hover:!bg-[#1E293B] hover:border-[#0EA5E9] cursor-pointer hover:border-[0.5px] hover:rounded-lg">
        <div className="group-hover:!bg-[#1E293B] px-7">
            <img
                src={feature.image}
                alt={feature.title}
                className="group-hover:!bg-[#1E293B]"
            />
        </div>
        <div className="group-hover:!bg-[#1E293B]">
            <h1 className="text-slate-100 font-bold text-base  group-hover:!bg-[#1E293B] ">{feature.title}
            </h1>
            <span className="text-[#94A3B8] text-center lg:text-start text-bold md:text-[14px] text-[17px]  group-hover:!bg-[#1E293B] ">{feature.description}</span>
        </div>
        </div>
        ))}
    </div>
    );
}



