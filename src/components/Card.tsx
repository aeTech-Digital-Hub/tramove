import React from 'react'
import Button from './Button';
import assets from '@/assets/assets';

const Card = () => {
  return (
    <div>
      <div className="container flex items-center justify-center p-10 border-b border-gray-200 mt-10">
        <div className="flex flex-col">
          <h2 className="font-semibold text-4xl m-6">
            Ready To <span className="text-red">Streamline ?</span> Your{" "}
            <span className="text-red">Logistics</span>, Get Started Today!
          </h2>
          <div className="items-start p-5 w-60 text-center">
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="w-4/5">
          <img src={assets.deliveryTrack3} alt="" className="w-100%" />
        </div>
      </div>
    </div>
  );
}

export default Card