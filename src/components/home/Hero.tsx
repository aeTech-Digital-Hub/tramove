// import React from 'react'
import Button from '../Button';
import premuim from '@/assets/fluent_premium-20-regular.png';
import heroimage from '@/assets/heroImage.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="m-auto py-10 bg-[#FFF4F6] lg:h-[100vh] mb-25">
      <div className="flex items-center justify-center">
        <div className='lg:flex flex-col items-center justify-center'>
          <div className='hidden lg:flex gap-2 place-content-center p-2  border solid rounded-full lg:w-1/2 mt-3'>
            <img src={premuim} alt="" />
            <p className='text-[12px] text-red'>Ghana's Premier Automotive Logistic Solution</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='p-2 m-1'>
              <h1 className='lg:text-3xl text-2xl bold text-center font-semibold '>
                Your Partner in <span className='text-red'>Seamless Logistics</span> <br />  Across-Ghana
              </h1>
            </div>
            <div className='lg:w-3/4 pb-4'>
              <p className='text-center p-2'>
                Tramove simplifies cargo transport in Ghana with vetted carriers
                transparent pricing, and real-time tracking
              </p>
            </div>
            <div className='flex gap-2 p-4 items-center'>
              <Link to={'/get-started'}>
                <div>
                  <Button>Get Started</Button>
                </div>
              </Link>
              <div>
                <Link to={'/about'}>
                <button className='border border-rose-400 py-2 px-4 rounded-full hover:bg-rose-600 hover:text-white cursor-pointer ease-in-out duration-300'>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='m-auto'>
        <img src={heroimage} alt="" className='m-auto' />
      </div>

    </div>
  );
}

export default Hero