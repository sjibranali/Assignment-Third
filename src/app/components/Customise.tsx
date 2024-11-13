import Image from "next/image"
import V1 from "@/app/assets/V1.png"
import V2 from "@/app/assets/V2.png"
const Customise = () => {
    return(
        <>
        <div className=" flex justify-center items-center w-[1921px] h-[812.09px] top-[3268px] left-[1px] px-[220px] py-[140px] gap-[98px] bg-[#ffffff] text-[#212529] border-1 border-gray-900">
            <div className="w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]"></div>
            <div className="flex flex-col w-[669px] h-[411px] gap-[60px] border-1 border-gray-900">
                <div className="flex flex-col gap-6 w-[669px] h-[288px] border-1 border-blue-900">
                    <h1 className="inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] w-[669px] h-[174px]">Customise it to <br/> your needs</h1>
                    <p className="inter font-normal text-lg leading-[30px] tracking-[-0.02em] w-[669px] h-[90px]">
                    Customise the app with plugins, custom themes and multiple text editors (Rich <br/> Text or Markdown). Or create your own scripts and plugins using the Extension<br/> API.
                    </p>
                </div> 
                <button className="flex justify-center items-center w-[171px] h-[63px] bg-[#4f9cf9] rounded-lg px-10 py-5 gap-[10px]">
                    <p className="inter font-[500px] text-lg w-[67px] h-[23px] leading-[23px] tracking-[-0.02em] text-[#ffffff]">Lets Go</p>
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
export default Customise

// flex justify-between items-center  
