import Link from "next/link"

function BottomBanner() {
  return (
    <div className="w-full !py-3 !mt-20 m-auto ">
      <div className="max-w-6xl mx-auto px-2 ">
        <div className="!bg-[#1e2637] rounded-lg p-12">
          <div className="!bg-[#1e2637] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4 !bg-[#1e2637]">
              <h2 className="text-3xl sm:text-3xl md:text-4xl text-center md:text-start  text-[#3CB7EF] font-bold bg-gradient-to-r from-[#40bfff] via-[#2198FE] to-[#1CAAEB] bg-clip-text text-transparent">Let's try our service now!</h2>
              <p className="!bg-[#1e2637] mt-2 text-center md:text-start text-[#94A3B8]  text-bold md:text-[16px] text-[14px]">
                Experience the power of Ocean CRM dashboard for engineering <br className="hidden lg:block"></br> teams. Boost productivity and streamline
                collaboration. Get started today!
              </p>
            </div>
          
            <div className="m-auto md:m-0">
            <Link
              href="#"
              className="!bg-[#0284C7] hover:!bg-[#0891c2]/90 text-white px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap "
            >
              Get Started →
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner

