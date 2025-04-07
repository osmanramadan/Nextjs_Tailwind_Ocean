import Testimonials from "./testimonials"


export default function Customers(){
    return (
        <div className="mt-20 md:mt-26 ">
            <div className="text-center text-[28px] sm:text-4xl md:text-[45px]  text-[#3CB7EF] font-[800] bg-gradient-to-r from-[#40bfff] via-[#2198FE] to-[#1CAAEB] bg-clip-text text-transparent">Meet our Customers
            </div>
            <Testimonials/>
        </div>
    )
}