"use client";
import { useState } from "react";

const PricingTable = () => {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      name: "Freelancer",
      desc:"The essentials to provide your best work for your clients.",
      price: { monthly: 15, annually: 144 },
      features: ["5 products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"],
    },
    {
      name: "Startup",
      desc:"A plan that scales with your rapidly growing business.",
      price: { monthly: 30, annually: 288 },
      features: ["25 products", "Up to 10,000 subscribers", "Advanced analytics", "24-hour support response time", "Marketing automations"],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      desc:"Dedicated support and infrastructure for your company.",
      price: { monthly: 48, annually: 576 },
      features: ["Unlimited products", "Unlimited subscribers", "Advanced analytics", "1-hour, dedicated support response time", "Marketing automations", "Custom reporting tools"],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white py-7">
      {/* Billing Toggle */}
      <div className="flex !bg-[#1E293B] p-1 rounded-lg mb-6">
        <button 
          className={`px-2 py-1 rounded-lg ${billing === "monthly" ? "!bg-[#0284C7]" : "!bg-[#1E293B]"}`}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button 
          className={`px-2 py-1 rounded-lg ${billing === "annually" ? "!bg-[#0284C7]" : "!bg-[#1E293B]"}`}
          onClick={() => setBilling("annually")}
        >
          Annually
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="container   md:px-7 px-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {plans.map((plan, index) => (
          <div 
          key={index}
            
            className={`p-4 py-9 rounded-lg max-w-full relative flex flex-col flex-wrap ${
            plan.mostPopular ? "!bg-[#1E293B] border border-[#0284C7]" : "bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A] border border-gray-700"
          }`}
          >
            {/* Most Popular Badge (beside title) */}
            <div className={`mt-4 flex items-center justify-between space-x-2  flex-wrap ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`} >
              <h2 className={`text-[15px] font-semibold ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`}>{plan.name}</h2>
              {plan.mostPopular && (
                <span className="text-[13px] font-semibold px-2 py-1 rounded-full !bg-[#0284C7] text-white">
                  Most Popular
                </span>
              )}
            </div>
            <div className={`mt-3 text-[#94A3B8] text-bold md:text-[17px] text-[13px]  break-words ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`}>
                    {plan.desc}
                  </div>

            <p className={`text-3xl font-bold mt-4 ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`} >${plan.price[billing]}<span className={`text-[13px] !text-[#C8D2DE] ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`}>{billing =="monthly"?"/month":"/year"}</span></p>
            <button className={`w-full mt-6 py-1 rounded-md hover:opacity-80 ${plan.mostPopular?"!bg-[#0EA5E9]":"!bg-[#1E293B]"}`}>
              Buy Plan
            </button>
            <ul className={`mt-4 space-y-2 ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`}>
              {plan.features.map((feature, i) => (
                <li key={i}  className={`flex items-center space-x-2 break-words ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`}>
                  <span  className={`font-bold ${plan.mostPopular?"text-[#0284C7]  !bg-[#1E293B]":"text-[#0284C7]  bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`}>✓</span>
                  <span className={`whitespace-normal break-words ${plan.mostPopular?"!bg-[#1E293B]":"bg-gradient-to-r from-[#0F172A] via-[#0C2944] to-[#0F172A]"}`}>{feature}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
