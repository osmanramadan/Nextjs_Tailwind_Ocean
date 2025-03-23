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
        <div key={index} className="h-auto md:h-45 lg:h-auto mt-2  py-5 px-2 flex flex-col lg:flex-row justify-between items-center  group hover:!bg-[#1E293B] hover:border-[#0284C7] cursor-pointer hover:!border-[0.9px] hover:rounded-lg">
        <div className="group-hover:!bg-[#1E293B] px-7">
            <img
                src={feature.image}
                alt={feature.title}
                className="group-hover:!bg-[#1E293B] h-10 w-20 md:h-12 md:w-26 lg:h-12 lg:w-25"
            />
        </div>
        <div className="group-hover:!bg-[#1E293B] ">
            <h1 className="text-slate-100 font-bold text-base  group-hover:!bg-[#1E293B] mt-2 ">{feature.title}
            </h1>
            <span className="text-[#94A3B8] text-center lg:text-start text-bold md:text-[16px] text-[17px]  group-hover:!bg-[#1E293B] ">{feature.description}</span>
        </div>
        </div>
        ))}
    </div>
    );
}



