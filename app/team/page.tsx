import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Team = () => {
  return (
    <div className="lg:W-[1280px] w-screen lg:py-28 lg:px-16 py-[48px] px-[24px] bg-[#F7F7F7] center overflow-x-hidden">
      <h2 className="text-center lg:text-5xl text-[32px] font-bold text-[#000000]">
        Our team
      </h2>
      <p className="text-lg fonnt-normal text-center text-[#000000] mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </p>
      <div className="gap-12 mt-10 lg:flex ">
        <div className="w-[394.67px] flex justify-center flex-col items-center px-auto ">
          <Image src="/team1.svg" alt="design" width={80} height={80} />

          <div className="mt-2 justify-center items-center ">
            <p className="text-xl font-semibold text-center">James Nduku</p>
            <p className="text-lg  text-center">Marketing Coordinator</p>
          </div>
          <div className="flex lg:mt-14 my-6 gap-3.5 text-lg">
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
          </div>
</div>
          {/* 2 */}

          <div className="w-[394.67px] flex justify-center flex-col items-center mt-6">
          <Image src="/team2.svg" alt="design" width={80} height={80} />

          <div className="mt-2">
            <p className="text-xl font-semibold text-center">Joseph Munyambu</p>
            <p className="text-lg text-center">Nursing Assistant</p>
          </div>
          <div className="flex lg:mt-14 my-6 gap-3.5 text-lg">
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
          </div>
</div>

{/* 3 */}

<div className="w-[394.67px] flex justify-center flex-col items-center gap-y-3.5 mt-6">
          <Image src="/team3.svg" alt="design" width={80} height={80} />

          <div className="mt-2">
            <p className="text-xl font-semibold text-center">Joseph Ngumbau</p>
            <p className="text-lg  text-center">Medical Assistant</p>
          </div>
          <div className="flex lg:mt-14 my-6 gap-3.5 text-lg">
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
          </div>
</div>
        <button className="w-auto h-[40px] mx-auto my-10 py-[8px] px-[16px] border-[1px] border-[#000000] rounded-[5px] text-[16px] flex justify-center items-center lg:hidden">View All</button>
      </div>



{/* 4 */}

      <div className="gap-12 mt-10 lg:flex hidden">
        <div className="w-[394.67px] flex justify-center flex-col items-center ">
          <Image src="/team4.svg" alt="design" width={80} height={80} />

          <div className="mt-2">
            <p className="text-xl font-semibold text-center">Erick Kipkemboi</p>
            <p className="text-lg  text-center">Web Designer</p>
          </div>
         
</div>
          {/* 5 */}

          <div className="w-[394.67px] flex justify-center flex-col items-center ">
          <Image src="/team5.svg" alt="design" width={80} height={80} />

          <div className="mt-2">
            <p className="text-xl font-semibold text-center">Stephen Kerubo</p>
            <p className="text-lg text-center">President of Sales</p>
          </div>
          
</div>

{/* 6 */}

<div className="w-[394.67px] flex justify-center flex-col items-center ">
          <Image src="/team6.svg" alt="design" width={80} height={80} />

          <div className="mt-2">
            <p className="text-xl font-semibold text-center">John Leboo</p>
            <p className="text-lg  text-center">Dog Trainer</p>
          </div>
         
</div>
        
      </div>
    </div>
  );
};

export default Team;
