import React from 'react'
import Image from 'next/image'

const Partners = () => {
  return (
    <div className='lg:w-screen w-screen h-[228px]  lg:flex lg:mt-[240px] mt-[700px] overflow-x-hidden'>
      <div className="lg:py-20 lg:pr-16 lg:bg-[#F7F7F7] lg:w-screen lg:px-6 bg-[#FFFFFF] py-[48px] pr-[24px]">
        <div className='lg:flex gap-4 '>
          <h5 className='text-[#000000] lg:text-2xl text-[18px] hidden lg:flex  '>Trusted by 2000+ companies worldwide.</h5>
          <h5 className='lg:hidden px-4 '>Trusted by the world best companies <br/> [social proof to build credibility]</h5>
       
        <div className='  h-[56px] lg:flex mx-4 lg:gap-[19.12px] lg:justify-between mt-4 grid grid-cols-3 gap-4  w-screen'>
          <Image
          src='/Airbnb Logo.svg'
          alt='logo'
          width={123.8}
          height={38.52}
          />
           <Image
          src='/Airbnb Logo 2.svg'
          alt='logo'
          width={123.8}
          height={38.52}
          />
           <Image
          src='/Airbnb Logo 3.svg'
          alt='logo'
          width={123.8}
          height={38.52}
          />
           <Image
          src='/Airbnb Logo 4.svg'
          alt='logo'
          width={123.8}
          height={38.52}
          />
           <Image
          src='/Airbnb Logo 5.svg'
          alt='logo'
          width={123.8}
          height={38.52}
          />
           <Image
          src='/Airbnb Logo 6.svg'
          alt='logo'
          width={123.8}
          height={38.52}
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
