import Image from "next/image"
import V1 from "@/app/assets/V1.png"
import V2 from "@/app/assets/V2.png"
const YourWork = () => {
    return(
        <>
        <div className=" flex justify-center items-center w-[1921px] h-[574.09px] top-[4080px] left-[1px] px-[220px] py-[140px]  bg-[#043873] text-[#ffffff] border-1 border-gray-900">
            <div className="flex flex-col items-center w-[1481px] h-[294px] gap-[60px] border-1 border-gray-900">
                <div className="flex flex-col items-center gap-6 w-[1064px] h-[171px] border-1 border-blue-900">
                    <h1 className="inter font-bold text-center text-[72px] leading-[87.14px] tracking-[-0.02em] w-[1064px] h-[87px]">Your work, everywhere you are</h1>
                    <p className="inter font-normal text-lg text-center leading-[30px] tracking-[-0.02em] w-[1064px] h-[60px]">
                    Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                    </p>
                </div> 
                <button className="flex justify-center items-center w-[195px] h-[63px] bg-[#4f9cf9] rounded-lg px-10 py-5 gap-[10px]">
                    <p className="inter font-[500px] text-lg w-[91px] h-[23px] leading-[23px] tracking-[-0.02em] text-[#ffffff]">Try Taskey</p>
                    <div className="flex justify-center items-center w-[10px] h-[10px] border-1   border-white">
                    <Image src={V1} alt='-' className="w-[10px] top-[31.5px] left-[189px] "/>
                    <Image src={V2} alt='-' className="w-[5px] h-[10px] top-[26.5px] left-[194px] "/>
                    </div>
                </button>
            </div>
            
        </div>
        </>
    )
}
export default YourWork

// flex justify-between items-center  