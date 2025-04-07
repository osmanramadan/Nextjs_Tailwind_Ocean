import Link from "next/link"

function BottomBanner() {
  return (
    <div className="!py-10 !mt-25 ">
        <div className="!bg-[#1e2637] rounded-lg p-6 sm:!p-16 mx-5">
          <div className="container   px-3 !bg-[#1e2637]  flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4 !bg-[#1e2637]">
              <h2 className="text-4xl sm:text-4xl md:text-5xl text-center md:text-start  text-[#3CB7EF] font-bold bg-gradient-to-r from-[#40bfff] via-[#2198FE] to-[#1CAAEB] bg-clip-text text-transparent">Let's try our service now!</h2>
              <p className="!bg-[#1e2637] mt-2 text-center md:text-start text-[#94A3B8]  text-[900]  text-[17px] md:text-[19px]">
                Experience the power of Ocean CRM dashboard for engineering <br className="hidden lg:block"></br> teams. Boost productivity and streamline
                collaboration. Get started today!
              </p>
            </div>
          
            <div className="m-auto md:m-0">
            <Link
              href="#"
              className="!bg-[#0284C7] hover:!bg-[#0891c2]/90 text-white px-8 py-[11px] rounded-md font-medium transition-colors whitespace-nowrap "
            >
              Get Started →
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner

