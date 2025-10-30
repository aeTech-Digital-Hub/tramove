import Button from '@/components/Button';
import React from 'react';


const TrackPage : React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold"></h1>
      <p>Stay updated with real-time tracking and delivery milestones</p>

      <div className='border border-green-200 p-4 bg-white shadow rounded'>
        <h2 className='text-2xl py-4 font-semibold'>Track your shipment</h2>
        <div className='flex items-center gap-4' >
          <input type="text" placeholder='Enter your shipment ID or tracking munber' className='w-[90%] border border-gray-400 p-4 text-[18px] rounded' />
          <Button>Track</Button>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
