import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// interface ShipmentProps {
//   id: string;
//   origin: string;
//   destination: string;
//   status: 'Pending Assignment' | 'In Transit' | 'Cancelled';
// }

interface Shipment {
  _id: string;
  origin: string;
  destination: string;
  status: string;
  name?: string;
  email?: string;
  phone?: string;
  createdAt?: string;
}

const shipper = JSON.parse(localStorage.getItem('shipper')!)

const ShipmentsPage: React.FC = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const token = localStorage.getItem('token')
  
  const getShipments = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/shipper/${shipper._id}/quotes`, {headers: { Authorization: `Bearer ${token}`}})
      console.log(response);
      console.log(response.data.shipments);
      setShipments(response.data.shipments)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {getShipments()}, [])

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'Pending Assignment':
        return {
          borderColor: '#FBBF24',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          displayText: 'Pending Assignment'
        };
      case 'In Transit':
        return {
          borderColor: '#60A5FA',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
          displayText: 'In Transit'
        };
      case 'Cancelled':
        return {
          borderColor: '#F87171',
          bgColor: 'bg-red',
          textColor: 'text-white',
          displayText: 'Cancelled'
        };
      default:
        return {
          borderColor: '#D1D5DB',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          displayText: status
        };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Active Shipments</h2>
        <Link to={'/get-a-quote'}>
          <button className="bg-red text-white rounded-full py-2 px-4 flex items-center justify-center shadow-md gap-3">
            New Quote
            <FiPlus size={20} className='bg-white text-red rounded-full' />
          </button>
        </Link>
      </div>
      
      <div className="space-y-3">
        {shipments.map((shipment, index) => {
          const { borderColor, displayText, bgColor, textColor } = getStatusInfo(shipment.status);
          return (
            <div 
              key={index} 
              className="border rounded-md overflow-hidden mb-3 shadow-sm flex justify-between items-center pr-5"
              style={{ borderLeftWidth: '4px', borderLeftColor: borderColor }}
            >
              
              <div className="p-3">
                <p className="font-medium text-sm">ID</p>
                <p className="text-gray-500 text-xs my-1">Shipment #{shipment._id}</p>
              </div>
              <div className="p-3">
                <p className="font-medium text-sm">Origin & Destination</p>
                <p className="text-gray-500 text-xs my-1">{shipment.origin} → {shipment.destination}</p>
              </div>
              <div className="p-3">
                <p className="font-medium text-sm">Shipper</p>
                <p className="text-gray-500 text-xs my-1">{shipment.name} → {shipment.email}</p>
              </div>
              <div className="p-3">
                <p className="font-medium text-sm">Contact</p>
                <p className="text-gray-500 text-xs my-1">{shipment.phone} → {shipment.email}</p>
              </div>
              <div className="p-3">
                <p className="font-medium text-sm">Date</p>
                <p className="text-gray-500 text-xs my-1">{shipment.createdAt} </p>
              </div>
              <div className="flex justify-between items-center mt-2">
                
                  <span className={`text-xs px-3 py-1 rounded-full ${bgColor} ${textColor}`}>
                    {displayText}
                  </span>
                </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-3">
        <button className="text-red text-xs flex items-center text-center">
          See all
        </button>
      </div>
    </div>
  );
};




// const ShipmentsPage : React.FC = () => {

//   const shipper = JSON.parse(localStorage.getItem("shipper")!);

//   const getShipments = async () => {
//     try {
//       const token = localStorage.getItem('token')
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/quote/get-quote/${shipper._id}`, {headers: { Authorization: `Bearer ${token}`}})
//       console.log(response);
//       if(response.data.success === false){
//         toast(response.data.message)
//       }
      
//     } catch (error) {
//       console.log(error);
//     }
//   }


//   useEffect(() => {
//     getShipments()
//   }, [shipper])

//   return (
//     <div className="space-y-6">
//       <div className='flex justify-between items-center'>
//         <article>
//           <h1 className="text-2xl font-bold"></h1>
//           <p>See your past history and get to book a shipment</p>
//         </article>
//         <article className='flex gap-2'>
//           <Button > export </Button>
//           <Button > + Request New Shipment</Button>
//         </article>
//       </div>

//       {/* filter */}
//       <article className='flex  gap-6'>
//         <div>
//           <h4>filter by Date</h4>
//           <select name="" id="">
//             <option value="">Last 7 Days</option>
//             <option value="">Last 14 Days</option>
//             <option value="">Last 21 Days</option>
//             <option value="">Last 30 Days</option>
//             <option value="">Last 60 Days</option>
//             <option value="">Last 90 Days</option>
//           </select>
//         </div>
//         <div>
//           <h4>filter by Status</h4>
//           <select name="" id="">
//             <option value="">All</option>
//             <option value="">Pending</option>
//             <option value="">Completed</option>
//             <option value="">Processing</option>
//             <option value="">Scheduled</option>
//             <option value="">Cancelled</option>
//           </select>
//         </div>
//       </article>

//       <article className='flex items-center justify-between'>
//         <table className='bg-gray-200 w-full'>
//           <th className='p-4'><h4 className='font-bold'>Shiopment ID</h4></th>
//           <th className='p-4'><h4 className='font-bold'>Date</h4></th>
//           <th className='p-4'><h4 className='font-bold'>Cargo</h4></th>
//           <th className='p-4'><h4 className='font-bold'>Location</h4></th>
//           <th className='p-4'><h4 className='font-bold'>Status</h4></th>
//           <th className='p-4'> <h4 className='font-bold'>Action</h4></th>
//         </table>
//       </article>
      
//         <table className=''>
//           <tbody>
//           <tr className='bg-white border-b '>
//         <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'> 
            
//             <p></p>
//         </th>
//         <td className='px-6 py-4'>
            
//         </td>
//         <td className='px-6 py-4'>
            
//         </td>
//         <td className='px-6 py-4 cursor-pointer'>
//             X
//         </td>
//     </tr>
//           </tbody>
//         </table>

//         <div className='flex items-center gap-4 justify-end'>
//           <div className='flex gap-2'>
//             <p>Previous</p>
//             <p>1</p>
//             <p>2</p>
//           </div>
//           <Link to={'book-shipment'}>
//             <Button>Next</Button>
//           </Link>
//         </div>
//     </div>
//   );
// };

export default ShipmentsPage;
