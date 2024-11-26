import React from 'react'
import Image from 'next/image'
import { FaRegStar } from "react-icons/fa";

const Coursesname = () => {
    return (
     <div className="lg:w-[1280px] w-screen lg:px-16 lg:py-28 py[48px] px-[24px] bg-[#FFFFFF] overflow-x-hidden">
        <div className='flex justify-between  items-center flex-col '>
            <h1 className="text-center lg:text-[56px] text-[32px] font-bold text-[#000000]">Courses</h1>
            <p className="text-lg text-center text-[#000000]">Your Ultimate Guide to learning</p>
        
        <div className='flex justify-between items-center w-[336px] mt-12'>

        <div className='px-4 py-2'> 
        <p className='underline underline-offset-8 text-base'>Popular</p></div>
        <p className='text-base'>Recommended</p>
        <p className='text-base'>Best Price</p>

        </div>
            
            <div className='lg:w-[1280px] w-[380px] m-10 lg:flex gap-[32px] '>
                <div className='lg:w-[416px] bg-[#F7F7F7] rounded-[5px] lg:ml-6'>
                    <Image
                    src="/Image1.svg"
                    alt="design"
                    width={416}
                    height={300}
                    />
                    <div className='flex justify-between mt-2 mx-[16px] '>
                        <p className='text-sm font-semibold text-[#000000]'>Design</p>
                    <div className='flex'>
                        <p className='text-[#D9D9D9] justify-center items-center flex '><FaRegStar /></p>
                        <p className='text-sm font-semibold text-[#000000]'>5.0</p>

                        </div>   
                    </div>

                    <h5 className='text-2xl font-bold flex  mt-5 pl-4'>UX/UI Design 201</h5>
                    <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                     <div className='mt-5 pb-6 mb-6 pl-4'>
                     <button className='w-[120px] h-[40px] py-2 px-5 border-[1px] border-[#000000] rounded-[5px] text-base'>Enroll Now</button>
                     <button className='w-[120px] h-[40px] py-2 px-5 text-base'>$400</button>
                     </div>
                </div>

           

                {/* 2 */}

                <div className='lg:w-[416px] bg-[#F7F7F7] rounded-[5px] '>
                    <Image
                    src="/Image2.svg"
                    alt="design"
                    width={416}
                    height={300}
                   
                    />
                    
                    
                    
                    <div className='flex justify-between mt-2 mx-[16px]'>
                        <p className='text-sm font-semibold text-[#000000] pb-[24px] '>Programming</p>
                    <div className='flex'>
                        <p className='text-[#D9D9D9] justify-center items-center  '><FaRegStar /></p>
                        <p className='text-sm font-semibold text-[#000000]'>5.0</p>

                        </div>   
                    </div>

                    <h5 className='text-2xl font-bold flex  mt-5 pl-4'>Introduction to Python</h5>
                    <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                     <div className='mt-5 pb-6 mb-6 pl-4'>
                     <button className='w-[120px] h-[40px] py-2 px-5 border-[1px] border-[#000000] rounded-[5px] text-base'>Enroll Now</button>
                     <button className='w-[120px] h-[40px] py-2 px-5 text-base'>$400</button>
                     </div>
                </div>


                {/* 3 */}


                <div className='lg:w-[416px] bg-[#F7F7F7] rounded-[5px] flex-row '>
                    <Image
                    src="/Image3.svg"
                    alt="design"
                    width={416}
                    height={300}
                    />
                    <div className='flex justify-between mt-2 mx-[16px]'>
                        <p className='text-sm font-semibold text-[#000000] pb-[24px]'>Buisness</p>
                    <div className='flex'>
                        <p className='text-[#D9D9D9] justify-center items-center'><FaRegStar /></p>
                        <p className='text-sm font-semibold text-[#000000]'>5.0</p>

                        </div>   
                    </div>

                    <h5 className='text-2xl font-bold flex  mt-5 pl-4'>Data Analysis for beginners</h5>
                    <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                     <div className='mt-5 pb-6  pl-4'>
                     <button className='w-[120px] h-[40px] py-2 px-5 border-[1px] border-[#000000] rounded-[5px] text-base'>Enroll Now</button>
                     <button className='w-[120px] h-[40px] py-2 px-5 text-base'>$400</button>
                     </div>
                </div>
                </div>

                
                <div className='w-[1280px] m-10 lg:flex gap-[32px] hidden'>
                <div className='w-[416px] bg-[#F7F7F7] rounded-[5px] pb-6 ml-6'>
                    <Image
                    src="/Image4.svg"
                    alt="design"
                    width={416}
                    height={300}
                    />
                    <div className='flex justify-between mt-2 '>
                        <p className='text-sm font-semibold text-[#000000] pl-4'>Art</p>
                    <div className='flex'>
                        <p className='text-[#D9D9D9] justify-center items-center flex '><FaRegStar /></p>
                        <p className='text-sm font-semibold text-[#000000]'>5.0</p>

                        </div>   
                    </div>

                    <h5 className='text-2xl font-bold flex  mt-5 pl-4'>Art Specialization</h5>
                    <p className='text-base pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                     <div className='mt-5 pl-4'>
                     <button className='w-[120px] h-[40px] py-2 px-5 border-[1px] border-[#000000] rounded-[5px] text-base '>Enroll Now</button>
                     <button className='w-[120px] h-[40px] py-2 px-5 text-base'>$400</button>
                     </div>
                </div>

           

                {/* 2 */}

                <div className='w-[416px] bg-[#F7F7F7] rounded-[5px] flex-row'>
                    <Image
                    src="/Image5.svg"
                    alt="design"
                    width={416}
                    height={300}
                    />
                    <div className='flex justify-between mt-2 '>
                        <p className='text-sm font-semibold text-[#000000] pl-4'>Law</p>
                    <div className='flex'>
                        <p className='text-[#D9D9D9] justify-center items-center flex '><FaRegStar /></p>
                        <p className='text-sm font-semibold text-[#000000]'>5.0</p>

                        </div>   
                    </div>

                    <h5 className='text-2xl font-bold flex  mt-5 pl-4'>Rule of Law</h5>
                    <p className='text-base pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                     <div className='mt-5 pl-4'>
                     <button className='w-[120px] h-[40px] py-2 px-5 border-[1px] border-[#000000] rounded-[5px] text-base'>Enroll Now</button>
                     <button className='w-[120px] h-[40px] py-2 px-5 text-base'>$400</button>
                     </div>
                </div>


                {/* 3 */}


                <div className='w-[416px] bg-[#F7F7F7] rounded-[5px] flex-row'>
                    <Image
                    src="/Image6.svg"
                    alt="design"
                    width={416}
                    height={300}
                    />
                    <div className='flex justify-between mt-2 '>
                        <p className='text-sm font-semibold text-[#000000] pl-4'>Tech</p>
                    <div className='flex'>
                        <p className='text-[#D9D9D9] justify-center items-center flex '><FaRegStar /></p>
                        <p className='text-sm font-semibold text-[#000000]'>5.0</p>

                        </div>   
                    </div>

                    <h5 className='text-2xl font-bold flex  mt-5 pl-4'>Introduction to webflow</h5>
                    <p className='text-base pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                     <div className='mt-5 pl-4'>
                     <button className='w-[120px] h-[40px] py-2 px-5 border-[1px] border-[#000000] rounded-[5px] text-base'>Enroll Now</button>
                     <button className='w-[120px] h-[40px] py-2 px-5 text-base'>$400</button>
                     </div>
                </div>
                </div>
                <div className='flex justify-center items-center  '>
<button className="w-auto h-auto py-3  px-6 mt-2 mb-8 border-[1px] border-[#000000] justify-center items-center  rounded-[5px] text-base flex ">View All Courses</button>
</div>         
        </div>
          

     </div>

    )
}

export default Coursesname

