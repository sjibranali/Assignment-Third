import Image from "next/image"
import Sponsors from "@/app/assets/Sponsors.png"
const OurSponsors = () => {
    return(
        <>
        <div className=" flex flex-col justify-center items-center w-[1922px] h-[538px] top-[4654px] gap-[100px] px-[220px] py-[140px]   text-[#212529] border-1 border-gray-900">
            <h1 className="inter font-bold text-center text-[72px] leading-[87.14px] tracking-[-0.02em] w-[1482px] h-[87px]">Our sponsors</h1>
            <Image src={Sponsors} alt='Sponsors' className="w-[1482px] h-[71px]"/>    
            
          
            
        </div>
        </>
    )
}
export default OurSponsors

