import Splashbtn from "@/compenents/splashbtn";
import Splashbtns from "@/compenents/splashbtns";

export default function Home() {
  return (
    <div className="splash text-white flex items-center justify-center">
      <div className="mt-24">
          <Splashbtn/>
          <div className="text-center mx-3 text-3xl md:mx-2 md:text-5xl mt-5  text-[#3CB7EF]   font-bold bg-gradient-to-r from-[#40bfff] via-[#66C6F3] to-[#00ccff] bg-clip-text text-transparent">A CRM dashboard for engineering teams</div>
          
          <div className="mt-8 mx-4  md:mx-2 text-[#94A3B8] text-center text-bold md:text-xl text-[16px] ">
            Boost engineering team’s productivity with Ocean CRM dashboard that streamlines<br></br>project management, collaboration, and data-driven decision-making.
      </div>
      <Splashbtns/>
     
      
      </div>
    </div>
  );
}
