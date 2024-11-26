import React from 'react'
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram,FaTwitter, FaFacebookF,FaLinkedin} from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { AlertDialogDemo } from '../alert';
import Link from 'next/link';


const Header = () => {
  return (
    <div className='w-screen  bg-[#F7F7F7] overflow-x-hidden'>
      <div className='py-3 max-w-screen-custom  bg-[#F7F7F7] w-[1154px] h-[54px] justify-center items-center gap-8 ml-auto mr-auto hidden xl:flex xl:w-screen' >
        <div className='px-4 gap-2 xl:flex justify-center items-center  '>
        
        <h3 className='text-sm font-roboto text-black w-[205px] '>Phone Number:956 742 455 678</h3>
        <div className='w-[30px] text-[#676767] py-4 px-[1px] text-4xl text-normal '><RxDividerVertical /></div>
        <h3  className='text-sm font-roboto text-left text-black py-5 pl-2 '>Email:<span>info@ddsgnr.com</span></h3>
        <div className='flex w-[736px]  gap-4  mr-auto'>
            <div className='flex p-5 text-right gap-x-3 pl-96 text-lg justify-center items-center ml-auto '>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        </div>
        </div>
        </div>
      </div>

      
    <div className='h-[72px] border-y-[#676767] border-solid border-y-[1px] lg:w-screen lg:flex  w-[428px] justify-center bg-[#F7F7F7] items-center'>
        <div className='lg:w-[1152px] w:[380px] flex justify-between px-5 lg:px-[64px] lg:py-[29px] '>
            <div className='flex justify-center items-center gap-[8.02px]'>
                <Image
                src='/Frame 1.png'
                alt='logo'
                width={32}
                height={30} 
                />

                <h1 className='font-bold text-[25.07px] p-2'>Ddsgnr</h1>
                
            </div>

            <div className='justify-center items-center flex lg:hidden'>
              <ul className='justify-center items-center flex'>
                <li><RxHamburgerMenu /></li>
              </ul>
            </div>

            <div className='w-[910px] h-[44px] gap-8 bg-[#FFFFFF] ml-12 justify-center  items-center lg:flex hidden'>

            
           

                <ul className='font-normal gap-x-8   lg:flex hidden'>
                   
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/courses'><li>Courses</li></Link>
                    <Link href='/coursesname'><li>Services</li></Link>
                    <Link href='/achivement'><li>Acheivement</li></Link>
                    <Link href='/team'> <li>About Us</li></Link>
                    <Link href='/testimonials'><li>Testimonial</li></Link>
                </ul>

                
                
            
            <div className='w-[191px] gap-x-4 justify-center items-center m-2 lg:flex hidden bg-[#FFFFFF]'>
                <div className='w-[80px] h-[40px] border-[1px] border-solid border-[#000000] rounded-[5px] justify-center items-center flex'>Login</div>
                <div className='w-[95px] h-[40px] bg-[#000000] rounded-[5px] text-[#FFFFFF]'><AlertDialogDemo/></div>

            </div>
            


            </div>
           

        </div>

    </div>
    </div>
  )
}

export default Header
