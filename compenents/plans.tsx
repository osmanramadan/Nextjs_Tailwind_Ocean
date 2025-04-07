import PricingTable from "./pricing-table";


export default function Plans(){
    return (
        <div className="mt-20 md:mt-26">
        <div className="text-center text-2xl sm:text-3xl text-[26px] md:text-[40px]  text-[#3CB7EF] font-bold bg-gradient-to-r from-[#40bfff] via-[#2198FE] to-[#1CAAEB] bg-clip-text text-transparent">Find a plan to power your projects</div>
          <PricingTable/>
      </div>
    )
}