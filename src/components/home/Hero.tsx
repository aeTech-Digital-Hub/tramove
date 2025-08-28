import React from 'react'
import Button from '../Button';
import premuim from '@/assets/fluent_premium-20-regular.png';
import heroimage from '@/assets/heroImage.png'


const Hero = () => {
  return (
    <div className="container mx-auto py-10 bg-[#FFF4F6] h-[110vh] mb-25">
      <div className="flex items-center justify-center">
        <div className='flex flex-col items-center justify-center'>
          <div className='flex gap-2 place-content-center p-2  border solid rounded-full w-1/2 mt-3'>
            <img src={premuim} alt="" />
            <p className='text-[12px] text-red'>Ghana's Premier Automotive Logistic Solution</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='p-2 m-1'>
              <h1 className='text-3xl bold text-center font-semibold'>
                Your Partner in <span className='text-red'>Seamless Logistics</span> <br /> Across Ghana
              </h1>
            </div>
            <div className='w-3/4'>
              <p className='text-center p-2'>
                Tramove simplifies cargo transport in Ghana with vetted carriers
                transparent pricing, and real-time tracking
              </p>
            </div>
            <div className='flex gap-2'>
              <div><Button>Get Started</Button></div>
              <div className='bg-transparent'><Button >Learn More</Button></div>
            </div>
          </div>
        </div>
      </div>

      <div >
        <img src={heroimage} alt="" />
      </div>

    </div>
  );
}

export default Hero