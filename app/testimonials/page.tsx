import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";


const Testimonials = () => {
  return (
    <div className="lg:w-[1280px] w-[428px] lg:py-28 lg:px-16 py-[48px] px-[24px] bg-[#F7F7F7] lg:gap-6 gap-[48px] overflow-x-hidden">
      <div>
        <h4 className="text-[32px] font-bold text-[#000000] lg:hidden w-auto justify-center items-center flex text-center">What Our Student Say</h4>
        <h2 className="text-5xl font-bold text-[#000000] hidden lg:block">
          Customer testimonials
        </h2>
        <p className="text-lg text-[#000000] mt-2 mb-14 text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
       <div className="flex gap-8 w-[1152px]">
      <div className="w-[362.67px] gap-12 ">
        <div className=" p-8 border-[1px] border-[#000000]">
          <p className="flex gap-1 p-2">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </p>
          <p className="text-lg py-2 ">
            "Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi 
            quis viverra ornare."
          </p>

          <div className="w-[394.67px]   flex gap-5 ">
            <Image src="/Avatar Image1.svg" alt="design" width={56} height={56} className="border-none border-rounded-full"/>
            

            <div className="mt-2">
              <p className="text-xl font-semibold ">Stephen Kerubo</p>
              <p className="text-lg ">President of Sales</p>
            </div>
          </div>
        </div>
      </div>



      {/* 2 */}

      <div className="w-[362.67px] gap-12 hidden lg:block">
        <div className=" p-8 border-[1px] border-[#000000]">
          <p className="flex gap-1 p-2">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </p>
          <p className="text-lg py-2 ">
            "Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi 
            quis viverra ornare."
          </p>

          <div className="w-[394.67px]   flex gap-5 ">
            <Image src="/Avatar Image2.svg" alt="design" width={56} height={56} className="border-none border-rounded-full"/>
            

            <div className="mt-2">
              <p className="text-xl font-semibold ">Stephen Kerubo</p>
              <p className="text-lg ">President of Sales</p>
            </div>
          </div>
        </div>
      </div>


      {/* 3 */}

      <div className="w-[362.67px] gap-12 hidden lg:block ">
        <div className=" p-8 border-[1px] border-[#000000]">
          <p className="flex gap-1 p-2">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </p>
          <p className="text-lg py-2 ">
            "Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi 
            quis viverra ornare."
          </p>

          <div className="w-[394.67px]   flex gap-5 ">
            <Image src="/Avatar Image3.svg" alt="design" width={56} height={56} className="border-none border-rounded-full"/>
            

            <div className="mt-2">
              <p className="text-xl font-semibold ">Stephen Kerubo</p>
              <p className="text-lg ">President of Sales</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="flex justify-between lg:w-[1152px] w-[380px] gap-2  mt-10">
      <div className="w-[72px] flex gap-2 ">
      
       <Image src='/Dotblack.svg' alt='dot' width={8} height={8} />
       <Image src='/Dot.svg' alt='dot' width={8} height={8} />
       <Image src='/Dot.svg' alt='dot' width={8} height={8} />
       <Image src='/Dot.svg' alt='dot' width={8} height={8} />
       <Image src='/Dot.svg' alt='dot' width={8} height={8} />
      

      </div>


      <div className="flex gap-2 w-[111px]">
        <div className="flex gap-[15px] border-[1px] border-[#000000] rounded-full w-[48px] h-[48px] p-3 justify-center items-center">< FaArrowLeft/></div>
        <div className="flex gap-[15px] border-[1px] border-[#000000] rounded-full  w-[48px] h-[48px] p-3 justify-center items-center">< FaArrowRight/></div>
      </div>

      </div>

      
    
      

    </div>

   
  );
};

export default Testimonials;
