import Image from "next/image"
import V1 from "@/app/assets/V1.png"
import V2 from "@/app/assets/V2.png"
import WTI from "@/app/assets/WTI.png"
const ProjectManagement = () => {
    return(
        <>
        <div className=" flex flex-col justify-center items-center gap-[100px] w-[1920px] h-[1588px] top-[921px] left-[1px] px-[220px] py-[140px] bg-[#ffffff] text-[#212529] border-1 border-gray-900">
            {/* First div of Project Management */}
            <div className=" flex justify-center items-center gap-[60px] w-[1480px] h-[547px]  border-1 border-gray-900">
                <div className="flex flex-col w-[672px] h-[411px] gap-[60px] border-1 border-yellow-500">
                    <div className="flex flex-col gap-6 w-[672px] h-[288px] border-1 border-blue-900">
                        <h2 className="inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em]"> Project <br/>Management</h2>
                        <p className="inter text-lg font-normal leading-[30px] tracking-[-0.02em]">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them <br/> to a note.
                        </p>
                    </div> 
                    <button className="flex justify-center items-center w-[201px] h-[63px] bg-[#4f9cf9] rounded-md px-10 py-5 gap-[10px]">
                        <p className="inter font-[500px] text-lg w-[97px] h-[23px] leading-[23px] tracking-[-0.02em] text-[#ffffff]">Get Started</p>
                        <div className="flex justify-center items-center w-[10px] h-[10px] border-1   border-white">
                        <Image src={V1} alt='-' className="w-[10px] top-[31.5px] left-[189px] "/>
                        <Image src={V2} alt='-' className="w-[5px] h-[10px] top-[26.5px] left-[194px] "/>
                        </div>
                    </button>
                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
            </div>

            {/* Second div of Work Together */}
            <div className=" flex justify-center items-center gap-[100px] w-[1480px] h-[661px]  border-1 border-gray-900">
                {/* image div */}
                <div className="flex w-[710px] h-[661px] border-1  border-[#dcd046]">
                    {/* Group 327 */}
                    <div className="flex justify-center items-center w-[710px] h-[661px]">
                        <Image src={WTI} alt='Work together'></Image>
                    </div>                    
                </div>
                
                {/* text div */}
                <div className="flex flex-col w-[670px] h-[294px] gap-[60px] border-1 border-yellow-500">
                    <div className="flex flex-col gap-6 w-[670px] h-[171px] border-1 border-blue-900">
                        <h1 className="inter font-bold w-[670px] h-[87px] text-[72px] leading-[87.14px] tracking-[-0.02em]"> Work together</h1>
                        <p className="inter w-[670px] h-[60px] text-lg font-normal leading-[30px] tracking-[-0.02em]">
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                        </p>
                    </div> 
                    <button className="flex justify-center items-center w-[186px] h-[63px] bg-[#4f9cf9] rounded-md px-10 py-5 gap-[10px]">
                        <p className="inter font-[500px] text-lg w-[82px] h-[23px] leading-[23px] tracking-[-0.02em] text-[#ffffff]">Try it now</p>
                        <div className="flex justify-center items-center w-[10px] h-[10px] border-1   border-white">
                        <Image src={V1} alt='-' className="w-[10px] top-[31.5px] left-[189px] "/>
                        <Image src={V2} alt='-' className="w-[5px] h-[10px] top-[26.5px] left-[194px] "/>
                        </div>
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default ProjectManagement

// flex justify-between items-center  