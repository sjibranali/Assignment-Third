import Image from "next/image"
import logo from "@/app/assets/Logo.png"
const Navbar = () => {
    return(
        <>
        <div className=" flex justify-between items-center w-[1920px] h-[92px] px-[220px] py-4 bg-[#043873]">
            <div className="w-[191px] h-[34px]"> 
                <Image src={logo} alt='logo'/>
            </div>
            <div className="flex justify-between w-[737.5px] h-[60px] items-center">
                <div className=" w-[549px] h-[23px] ">
                    <ul className="flex flex-row gap-8 text-white">
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="w-[126px] h-[60px]">
                    <button className="px-10 py-4 rounded-lg bg-[#ffe492]">Login</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar