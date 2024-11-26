


import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full py-14 px-4  bg-[#FFFFFF] text-center overflow-x-hidden'>
      <div className='p-8 gap-8 lg:flex justify-between'>
        <div>
          <p className='text-[#000000] text-lg font-semibold lg:text-left '>Subscribe to our newsletter</p>
          <p className='text-base text-[#000000] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <button className='w-full sm:w-[265px] h-[48px] border-[1px] border-[#000000] rounded-[5px] bg-[#FFFFFF] p-3 text-base text-left'>Enter your email</button>
            <button className='w-full sm:w-[119px] h-[48px] border-[1px] border-[#000000] rounded-[5px] bg-[#FFFFFF] p-3 text-base'>Subscribe</button>
          </div>
          <p className='text-xs text-[#000000] mt-2 lg:text-left'>By subscribing you agree to with our <span className='text-xs text-[#000000] underline'>Privacy Policy</span></p>
        </div>
      </div>

      <div className='lg:w-[1120px] mx-auto gap-10 flex flex-col lg:flex-row justify-evenly items-center lg:justify-items-start lg:place-items-start lg:mr-6'>
        <div className='py-[29px] gap-10 lg:mr-6 '>
          <Image
            src='/Ddsgnr Library@3x.svg'
            alt='logo'
            width={130.6}
            height={40}
          />
        </div>
        <div className='lg:text-left lg:mt-4 '>
        <h2 className='w-full sm:w-[250px] gap-4 text-base font-semibold mt-4 text-[#000000] mb-4 '>  Courses</h2>
          <div className='text-sm flex flex-col gap-4'>
            <p>Business</p>
            <p>Development</p>
            <p>Technology</p>
            <p>Design</p>
            <p>Programming</p>
          </div>
        </div>

        <div className='lg:text-left lg:mt-4' >
          <h2 className='w-full sm:w-[250px] gap-4 text-base font-semibold mt-4 mb-4'>Resources</h2>
          <div className='text-sm flex flex-col gap-4'>
            <p>Career</p>
            <p>Resume</p>
            <p>Learning</p>
            <p>Interview Preparation</p>
            <p>Jobs</p>
          </div>
        </div>

        <div className='lg:text-left lg:mt-4' >
         <h2 className='w-full sm:w-[250px] gap-4 text-base font-semibold mt-4 mb-4'> About Us</h2>
          <div className='text-sm flex flex-col gap-4'>
            <p>Contact</p>
            <p>Help/Support</p>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
            <p>Partners</p>
          </div>
        </div>
      </div>

      <div className='w-full h-[1px] bg-[#000000] mt-8 '></div>

      <div className='max-w-[1120px] mx-auto flex flex-col sm:flex-row justify-between mt-4 px-2 lg:mx-auto lg:ml-2 '>
        <div className='flex flex-col sm:flex-row gap-2'>
          <p>2023 Ddsgnr. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className='flex gap-3 mt-2 mb-6'>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Footer;
