// import React from 'react'
import Button from '../Button';
import premuim from '@/assets/fluent_premium-20-regular.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/herotrack1.jpg")] bg-no-repeat bg-cover bg-center h-screen relative'>
      <div className='bg-black/50 absolute top-0 left-0 bottom-0 right-0 h-screen'></div>
      <div className="flex items-center z-10">
        <div className='lg:flex flex-col items-start'>
          <div className='hidden lg:flex gap-2 place-content-center p-2  border border-red/70 rounded-full mt-[-3]'>
            <img src={premuim} alt="" />
            <p className='text-[12px] text-white w-fit'>Ghana's Premier Automotive Logistic Solution</p>
          </div>
          <div className='flex flex-col items-start mt-8'>
            <div className='p-2 m-1'>
              <h1 className='lg:text-6xl text-3xl font-bold lg:w-[70%]'>
                Your Partner in <span className='text-red'>Seamless Logistics</span> <br />  Across-Ghana
              </h1>
            </div>
            <div className='lg:w-2/4 pb-4 mt-8'>
              <p className='text-start p-2 text-[20px] font-meduim'>
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
                <button className='border border-red py-2 px-4 rounded-full hover:bg-rose-500 hover:text-white cursor-pointer ease-in-out duration-300'>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='m-auto'>
        <img src={heroimage} alt="" className='m-auto' />
      </div> */}

    </div>
  );
}

export default Hero