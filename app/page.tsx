import Image from "next/image";
import { ButtonDemo,ButtonOutline } from "./button";



export default function Home() {
  return (
    <div className="lg:w-[1280px] max-w-screen-custom  bg-[#FFFFFF] lg:flex flex-col ">
      <div className="justify-center items-center lg:pl-[60px] py:[64px] px-20 pr-[80px] mt-12 gap-6 lg:mt-44 w-[358px] pl-6">
        <h1 className="lg:text-[56px] text-[40px]  font-bold text-[#000000] lg:w-[580px]  w-[380px] ">Learn new skills online with ease</h1>
        <p className="font-normal text-lg lg:text-[18px] mt-5 lg:w-[500px] w-[380px] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

        <div className="gap-2 flex justify-center items-center lg:float-left mt-10 w-auto  mx-auto pl-24 lg:pl-0 ">
        <div className="w-[178px]  py-[12px] px-[24px] h-[48px] bg-[#000000] justify-center items-center flex text-[#FFFFFF] rounded-[5px] text-4 font-normal"><ButtonDemo/></div>
        <div className="w-[178px]  p-4 h-[48px] justify-center items-center flex text-[#000000] border-[1px] border-[#000000] rounded-[5px] text-4 font-normal"><ButtonOutline /></div>
        </div>
        </div>
      
       
      
      <div className="flex right-0 gap-12 absolute mt-20 lg:mt-0">
        <Image
        src="/hero.jpeg"
        alt="heroimage"
        width={500}
        height={900}
        
         />
      </div>

      
    </div>
  );
}
