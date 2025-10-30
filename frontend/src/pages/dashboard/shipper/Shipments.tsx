import Button from '@/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';


const ShipmentsPage : React.FC = () => {

  return (
    <div className="space-y-6">
      <div className='flex justify-between items-center'>
        <article>
          <h1 className="text-2xl font-bold"></h1>
          <p>See your past history and get to book a shipment</p>
        </article>
        <article className='flex gap-2'>
          <Button > export </Button>
          <Button > + Request New Shipment</Button>
        </article>
      </div>

      {/* filter */}
      <article className='flex  gap-6'>
        <div>
          <h4>filter by Date</h4>
          <select name="" id="">
            <option value="">Last 7 Days</option>
            <option value="">Last 14 Days</option>
            <option value="">Last 21 Days</option>
            <option value="">Last 30 Days</option>
            <option value="">Last 60 Days</option>
            <option value="">Last 90 Days</option>
          </select>
        </div>
        <div>
          <h4>filter by Status</h4>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Pending</option>
            <option value="">Completed</option>
            <option value="">Processing</option>
            <option value="">Scheduled</option>
            <option value="">Cancelled</option>
          </select>
        </div>
      </article>

      <article className='flex items-center justify-between'>
        <table className='bg-gray-200 w-full'>
          <th className='p-4'><h4 className='font-bold'>Shiopment ID</h4></th>
          <th className='p-4'><h4 className='font-bold'>Date</h4></th>
          <th className='p-4'><h4 className='font-bold'>Cargo</h4></th>
          <th className='p-4'><h4 className='font-bold'>Location</h4></th>
          <th className='p-4'><h4 className='font-bold'>Status</h4></th>
          <th className='p-4'> <h4 className='font-bold'>Action</h4></th>
        </table>
      </article>
      
        <table className=''>
          <tbody>
           
          </tbody>
        </table>

        <div className='flex items-center gap-4 justify-end'>
          <div className='flex gap-2'>
            <p>Previous</p>
            <p>1</p>
            <p>2</p>
          </div>
          <Link to={'book-shipment'}>
            <Button>Next</Button>
          </Link>
        </div>
    </div>
  );
};

export default ShipmentsPage;
