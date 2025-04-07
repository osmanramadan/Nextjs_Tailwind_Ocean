import Splashbtns from "./splashbtns";


export default function Splash(){
    return (<div>
      <div className="mt-3 text-center mx-auto  text-3xl md:text-5xl mt-5 text-[#3CB7EF] font-bold bg-gradient-to-r from-[#40bfff] via-[#66C6F3] to-[#00ccff] bg-clip-text text-transparent">
        A CRM dashboard for engineering teams
      </div>

      {/* Description */}
      <div className="mt-8 px-4 mx-4 md:mx-2 text-[#94A3B8] text-center font-bold md:text-xl text-[16px]">
        Boost engineering team’s productivity with Ocean CRM dashboard that
        streamlines
        <br />
        project management, collaboration, and data-driven decision-making.
      </div>

      {/* Buttons */}
      <Splashbtns />

      {/* Hero Image */}
      <div className="splash-img flex justify-center mt-10 px-2">
        <img
          src="/images/Hero-image.svg"
          className="w-11/12 sm:w-2/3 md:w-2/3 lg:w-[700px] xl:w-[650px] 2xl:w-[1000px] max-w-full h-auto mx-auto"
          alt="Hero Image"
        />
      </div>
    </div>)

}