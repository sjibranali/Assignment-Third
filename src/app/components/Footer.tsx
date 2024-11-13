import Image from "next/image"
import logo from "@/app/assets/Logo.png"
const Footer = () => {
    return(
        <>
        <div className=" flex justify-center items-center w-[1920px] h-[461px] top-[5195px] gap-[200px] px-[220px] pt-[140px] pb-8   text-[#ffffff] bg-[#043873] border-1 border-gray-900">
            <div className="flex flex-col w-[1480px] h-[289px] gap-[100px]  border-1 border-gray-900">
                <div className="flex w-[1480px] h-[169px] gap-[100px]  border-1 border-gray-900">
                    {/* 1 */}
                    <div className="flex flex-col w-[295px] h-[169px] gap-[15px]  border-1 border-gray-900" >
                        <Image src={logo} alt='logo' className="w-[191px] h-[34px] border-1 border-gray-900"/>
                        <p className=" w-[240px] h-[120px] inter font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">
                        whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </p>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col w-[295px] h-[127px]   border-1 border-gray-900" >
                    <ul className=" flex flex-col gap-y-[15px]">    
                    <li className="w-[68px] h-[22px] inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] ">Product</li>
                    <li className="w-[72px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] text-[#FFE492] ">Overview</li>
                    <li className="w-[50px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">Pricing</li>
                    <li className="w-[177px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">Customer stories</li>
                    </ul>
                    </div>
                    {/* 3 */}
                    <div className="flex flex-col w-[295px] h-[130px]   border-1 border-gray-900" >
                    <ul className=" flex flex-col gap-y-4">    
                    <li className="w-[91px] h-[22px] inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] ">Resources</li>
                    <li className="w-[33px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">Blog</li>
                    <li className="w-[128px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">Guides & tutorials</li>
                    <li className="w-[130px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">Help center</li>
                    </ul>
                    </div>
                    {/* 4 */}
                    <div className="flex flex-col w-[295px] h-[130px]   border-1 border-gray-900" >
                    <ul className=" flex flex-col gap-y-4">    
                    <li className="w-[83px] h-[22px] inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] ">Company</li>
                    <li className="w-[66px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">About us</li>
                    <li className="w-[62px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">Careers</li>
                    <li className="w-[99px] h-[20px] inter font-normal text-base leading-[20px] tracking-[-0.02em] ">Media kit</li>
                    </ul>
                    </div>
                </div>
                <div className="flex w-[1480px] h-[20px] justify-center  items-center border-1 border-gray-900">
                    <p className="inter font-normal text-base text-nowrap leading-5 tracking-[-0.02em] w-[169px] h-[20px] gap-[60px]  border-1 border-gray-900">©2021 Whitepace LLC.</p>
                </div>

            </div>
            
          
            
        </div>
        </>
    )
}
export default Footer

{/* <h1 className="inter font-bold text-center text-[72px] leading-[87.14px] tracking-[-0.02em] w-[1482px] h-[87px]">Our sponsors</h1>
            <Image src={Sponsors} alt='Sponsors' className="w-[1482px] h-[71px]"/>     */}
            