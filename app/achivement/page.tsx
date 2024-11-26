import React from 'react'

const Acheivement = () => {
  return (
    <div className='lg:w-[1280] w-[428px] bg-[#FFFFFF] py-[48px] px-[24px] '>
      <div className='lg:w-[1152px]  mx-auto flex  flex-col justify-center items-center w-[385px]'>
        <h2 className='lg:text-5xl text-[32px] font-bold text-center text-[#000000] lg:w-[1152px] lg:flex justify-center items-center'>Our Achivements</h2>
        <p className='text-center text-lg text-[#000000] mt-8 hidden lg:flex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br/> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <p className='text-center text-lg text-[#000000] mt-8 lg:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div className='lg:flex justify-around my-8 w-[380px] items-center lg:w-[1152px] grid grid-cols-2 gap-4 '>
        
        <div className='w-[182px]'><h3 className='text-[40px] font-bold text-[#000000] text-center'>+200</h3><p className='text-base text-center text-[#000000]'>Courses</p></div>
        <div className='w-[182px]'><h3 className='text-[40px] font-bold text-[#000000] text-center'>50K</h3><p className='text-base text-center text-[#000000]'>Mentors</p></div> 
        
        
        <div><h3 className='text-[40px] font-bold text-[#000000] text-center'>370K</h3><p className='text-base text-center text-[#000000]'>Students</p></div>
        <div><h3 className='text-[40px] font-bold text-[#000000] text-center'>100+</h3><p className='text-base text-center text-[#000000]'>Recognition</p></div>
    
      </div>
    </div>
  )
}

export default Acheivement

