import Image from "next/image"
import V1 from "@/app/assets/V1.png"
import V2 from "@/app/assets/V2.png"
const Hero = () => {
    return(
        <>
        <div className=" flex justify-center items-center w-[1920px] h-[829px] top-[92px] px-[220px] py-[140px] bg-[#043873] text-white border-1 border-gray-900">
            <div className="flex flex-col w-[656px] h-[361px] gap-[60px] border-1 border-gray-900">
                <div className="flex flex-col gap-6 w-[656px] h-[238px] border-1 border-blue-900">
                    <h2 className="inter font-bold text-[64px] leading-[77.45px] tracking-[-0.02em]"> Get More Done with whitepace</h2>
                    <p className="inter text-lg leading-[30px] tracking-[-0.02em]">
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                </div> 
                <button className="flex justify-center items-center w-[219px] h-[63px] bg-[#4f9cf9] rounded-lg p-5 gap-[10px]">
                    <p className="inter font-[500px] text-lg w-[159px] h-[23px] leading-[23px] tracking-[-0.02em] text-[#ffffff]">Try Whitepace free</p>
                    <div className="flex justify-center items-center w-[10px] h-[10px] border-1   border-white">
                    <Image src={V1} alt='-' className="w-[10px] top-[31.5px] left-[189px] "/>
                    <Image src={V2} alt='-' className="w-[5px] h-[10px] top-[26.5px] left-[194px] "/>
                    </div>
                </button>
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
        </div>
        </>
    )
}
export default Hero

// flex justify-between items-center  