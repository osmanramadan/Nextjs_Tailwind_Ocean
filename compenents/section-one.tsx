import FeacturesCompenents from "@/compenents/feactures-compenents";

export default function SectionOne(){
    return (
        <div className="container grid grid-cols-1 lg:grid-cols-2  mx-auto  md:px-7 px-3 text-center lg:text-start lg:mt-30 mt-15">
        <div className="py-22">
          <div className="text-3xl sm:text-4xl md:text-5xl  text-[#3CB7EF] font-bold bg-gradient-to-r from-[#40bfff] via-[#2198FE] to-[#1CAAEB] bg-clip-text text-transparent">Powerful features to <br className="hidden lg:block"></br>help you manage  all your leads.</div>
          <div className="mt-5 text-[#94A3B8] text-center lg:text-start text-bold md:text-xl text-[18px] ">
            Apsum dolor sit amet consectetur. Aliquam elementum   elementum in ultrices. Dui maecenas ut eros turpis ultrices <br className="hidden lg:block"></br> metus morbi aliquet vel
          </div>
          <button className="group w-43 h-11 !bg-[#0284C7] hover:!bg-[#0EA5E9] text-[18px] md:text-xl text-white font-medium mt-4 py-1 px-1 rounded-md">
            Get Started  <span className="!ml-1 font-bold  !bg-[#0284C7]  group-hover:!bg-[#0EA5E9]">→</span>
          </button>
          </div>
        <div>
        
        <div className="items">
          <FeacturesCompenents/>
        </div>
        
    </div>
  </div>
)
}