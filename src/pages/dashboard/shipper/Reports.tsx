import Button from '@/components/Button';
import { useState } from 'react'
import { LuDownload } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { FaChevronDown } from 'react-icons/fa'

// Define interfaces for our data types
// interface Transaction {
//   id: string;
//   shipper: string;
//   date: string;
//   amount: string;
//   status: 'paid' | 'income';
//   balance: string;
// }

const ReportsPage : React.FC = () => {
  const [timeFilter, _setTimeFilter] = useState('Month');
  // const transactions: Transaction[] = [
  //   { id: 'SH-78493', shipper: 'Adam Logistics', date: 'May 2, 2025', amount: '₦750.00', status: 'paid', balance: 'GHS 38,000.00' },
  //   { id: 'SH-40138', shipper: 'Taiwood Goods', date: 'May 3, 2025', amount: '₦980.50', status: 'paid', balance: 'GHS 25,000.00' },
  //   { id: 'SH-37135', shipper: 'Temo Distributors', date: 'May 3, 2025', amount: '₦545.75', status: 'income', balance: 'GHS 18,000.00' },
  // ];

  return (
    <div className="space-y-6">
      <div className='flex justify-between items-center'>
        <p>Gain insights into your logistics performance</p>
        <Button> <LuDownload /> Export Report</Button>
      </div>

      <div className='lg:flex gap-4'>
        <article className='border border-gray-200 p-4 shadow w-[50%]'>
          <div className='flex items-center justify-between'>
            <CiDeliveryTruck fill='blue' className='size-14 bg-blue-200 p-2 rounded-full'  />
            <input type="month" placeholder='month' className='p-2 border border-gray-600 rounded text-[18px]'/>
          </div>
          <div className='p-2'> 
            <h3 className='font-bold text-[28px]'>0</h3>
            <p className='font-semibold text-[18px] py-2'>Shipment Volume</p>
            <div className='flex items-center gap-2'>
            <FaArrowUp className='text-green-500' />
            <p className='text-green-500 text-[18px]'>0%  vs last month</p>
            </div>
            <div className='py-2 flex justify-between items-center font-semibold'>
              <div className='flex gap-2 items-center'>
              <p className='bg-green-500 p-3 rounded-full'></p>
              <p>On-time: 0 (0%)</p>
              </div>
              <div className='flex gap-2 items-center'>
              <p className='bg-red p-3 rounded-full'></p>
                <p>Delay: 4</p>
              </div>
            </div>
          </div>
        </article>

        <article className='border border-gray-200 p-4 shadow w-[50%]'>
          <div className='flex items-center justify-between'>
            <TbMoneybag className='size-14 bg-blue-200 p-2 rounded-full outline-green-500'  />
            <input type="month" placeholder='month' className='p-2 border border-gray-600 rounded text-[18px]'/>
          </div>
          <div className='p-2'> 
            <h3 className='font-bold text-[28px]'>GHS 0.00</h3>
            <p className='font-semibold text-[18px] py-2'>Cost Analysis</p>
            <div className='flex items-center gap-2'>
            <FaArrowUp className='text-green-500' />
            <p className='text-green-500 text-[18px]'>0%  vs last month</p>
            </div>
            <div className='py-2 flex justify-between items-center font-semibold'>
              <div className='flex gap-2 items-center'>
              <p className='bg-green-500 p-3 rounded-full'></p>
              <p>Avg: cost/shipment: GHS 0 .00</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* chat */}
         <div className="bg-white rounded-lg shadow-sm p-4">
                   <div className="flex items-center justify-between mb-4">
                     <h2 className="text-lg font-semibold">Cost Trends</h2>
                     <div className="relative">
                       <button className="flex items-center border rounded-md px-3 py-1 text-sm">
                         {timeFilter} <FaChevronDown className="ml-2" size={12} />
                       </button>
                     </div>
                   </div>
                   <div className="h-80 bg-white p-4 relative">
                     {/* <div className="flex justify-between items-center mb-4">
                       <h3 className="font-medium">Monthly Earnings (2025)</h3>
                       <div className="flex items-center gap-2 text-sm">
                         <div className="flex items-center gap-1">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <span className="text-gray-600">Income</span>
                         </div>
                       </div>
                     </div> */}
                     
                     {/* Y-axis labels */}
                     <div className="absolute left-0 top-14 bottom-10 flex flex-col justify-between text-xs text-gray-500">
                       <span>₦100k</span>
                       <span>₦80k</span>
                       <span>₦60k</span>
                       <span>₦40k</span>
                       <span>₦20k</span>
                       <span>₦0</span>
                     </div>
                     
                     {/* Horizontal grid lines */}
                     <div className="absolute left-10 right-4 top-14 bottom-10">
                       <div className="h-full flex flex-col justify-between">
                         <div className="border-t border-gray-100 w-full"></div>
                         <div className="border-t border-gray-100 w-full"></div>
                         <div className="border-t border-gray-100 w-full"></div>
                         <div className="border-t border-gray-100 w-full"></div>
                         <div className="border-t border-gray-100 w-full"></div>
                         <div className="border-t border-gray-100 w-full"></div>
                       </div>
                     </div>
                     
                     {/* Chart bars */}
                     <div className="h-[170px] ml-10 mr-4 mt-14 flex items-end justify-between">
                       <div className="w-[7%] h-[33%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦33k</div>
                       </div>
                       <div className="w-[7%] h-[20%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦20k</div>
                       </div>
                       <div className="w-[7%] h-[40%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦40k</div>
                       </div>
                       <div className="w-[7%] h-[25%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦25k</div>
                       </div>
                       <div className="w-[7%] h-[60%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦60k</div>
                       </div>
                       <div className="w-[7%] h-[75%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦75k</div>
                       </div>
                       <div className="w-[7%] h-[40%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦40k</div>
                       </div>
                       <div className="w-[7%] h-[33%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦33k</div>
                       </div>
                       <div className="w-[7%] h-[60%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦60k</div>
                       </div>
                       <div className="w-[7%] h-[20%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦20k</div>
                       </div>
                       <div className="w-[7%] h-[75%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦75k</div>
                       </div>
                       <div className="w-[7%] h-full bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦100k</div>
                       </div>
                     </div>
                     
                     {/* X-axis labels */}
                     <div className="flex justify-between mt-2 text-xs text-gray-500 ml-10 mr-4">
                       <span>Jan</span>
                       <span>Feb</span>
                       <span>Mar</span>
                       <span>Apr</span>
                       <span>May</span>
                       <span>Jun</span>
                       <span>Jul</span>
                       <span>Aug</span>
                       <span>Sep</span>
                       <span>Oct</span>
                       <span>Nov</span>
                       <span>Dec</span>
                     </div>
                   </div>
                 </div>
    </div>
  );
};

export default ReportsPage;
