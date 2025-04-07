import BottomBanner from "@/compenents/bottom-banner";
import Customers from "@/compenents/customers";
import Partners from "@/compenents/partners";
import Plans from "@/compenents/plans";
import SectionOne from "@/compenents/section-one";
import SectionThree from "@/compenents/section-three";
import SectionTwo from "@/compenents/section-two";
import Splash from "@/compenents/splash";
import Splashbtn from "@/compenents/splashbtn";



export default function Home() {

  return (
    <div className="text-white flex items-center justify-center">

      <div className="mt-45">
        <Splashbtn/>
        <Splash/>
        
        <Partners/>

        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>

        {/* plans */}
        <Plans/>

        {/* customers */}
        <Customers/>

        {/* bottom banner */}
        <BottomBanner/>
        
      </div>
    </div>
  );
}
