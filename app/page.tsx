import FeacturesCompenents from "@/compenents/feactures-compenents";
import Splashbtn from "@/compenents/splashbtn";
import Splashbtns from "@/compenents/splashbtns";



export default function Home() {

  return (
    <div className="splash text-white flex items-center justify-center">

      <div className="mt-24">

      <Splashbtn/>

          <div className="text-center  mx-3  md:mx-4 text-3xl md:text-5xl mt-5 text-[#3CB7EF] font-bold bg-gradient-to-r from-[#40bfff] via-[#66C6F3] to-[#00ccff] bg-clip-text text-transparent">A CRM dashboard for engineering teams</div>
          
          <div className="mt-8 px-4 mx-4  md:mx-2 text-[#94A3B8] text-center text-bold md:text-xl text-[16px] ">
            Boost engineering team’s productivity with Ocean CRM dashboard that streamlines<br></br>project management, collaboration, and data-driven decision-making.
          </div>
      <Splashbtns/>

      <div className="splash-img  flex justify-center mt-10 px-2">
      <img 
        src="/images/Hero-image.svg" 
        className="w-11/12 sm:w-2/3 md:w-2/3 lg:w-[700px] xl:w-[650px] 2xl:w-[1000px] max-w-full h-auto mx-auto"
        alt="Hero Image"
        />
      </div>


      <div className="partners grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-30 py-2 md:!px-14 lg:!px-34 ">
          <div className="p-4 flex items-center justify-center">
          <img 
        src="/images/partners/company-1.svg" 
        alt="Hero Image"
        />
          </div>
          <div className="p-4 flex items-center justify-center">
          <img 
        src="/images/partners/company-2.svg" 
        alt="Hero Image"
        />
          </div>
          <div className="p-4 flex items-center justify-center">
          <img 
        src="/images/partners/company-3.svg" 
        alt="Hero Image"
        />
          </div>
          <div className="p-4 flex items-center justify-center">
          <img 
        src="/images/partners/company-4.svg" 
        alt="Hero Image"
        />
          </div>
          <div className="p-4 flex items-center justify-center">
          <img 
        src="/images/partners/company-5.svg" 
        alt="Hero Image"
        />
          </div>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2 sm:mx-2 md:px-15 px-3 mx-5 text-center lg:text-start lg:mt-30 mt-15">
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


      </div>
    </div>
  );
}
