import axios from 'axios';
import React, { useEffect, useState } from 'react';

// interface BidProps {
//   transporter: string;
//   id?: string;
//   rating?: number;
//   logo?: string;
//   bidAmount: string;
//   location: string;
//   vehicle: string;
// }

const PendingBids: React.FC = () => {
//   // Sample bid data
//   const bids: BidProps[] = [
//     {
//       transporter: "9e-784t2",
//       bidAmount: "₵1,200",
//       location: "Accra → Kumasi",
//       vehicle: "5-Ton Truck"
//     },
//     {
//       transporter: "Accra Movers Ltd",
//       rating: 4.3,
//       bidAmount: "₵1,350",
//       location: "Accra → Kumasi",
//       vehicle: "7-Ton Refrigerated"
//     }
//   ];


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
  const token = localStorage.getItem('token')


  const [shipments, setShipments] = useState<Shipment[]>([])
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

  return (
    <div className="bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold p-4">Previous Shipments</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Shipper</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Shipment Id</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Location</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment, index) => (
              <tr key={index} className={index < shipments.length - 1 ? "border-b" : ""}>
                <td className="py-4 px-4">
                  {shipment.status === 'delivered' ? (
                    <div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3 text-white">
                          {shipment._id.charAt(0)}
                        </div>
                        <span>{shipment.name}</span>
                      </div>
                      <div className="ml-11 flex items-center">
                        <span className="text-xs text-yellow-500">★</span>
                        <span className="text-xs text-gray-500 ml-1">{shipment.phone}</span>
                      </div>
                    </div>
                  ) : (
                    <span>{shipment.name}</span>
                  )}
                </td>
                <td className="py-4 px-4">{shipment.createdAt}</td>
                <td className="py-4 px-4">{shipment.origin} → {shipment.destination}</td>
                <td className="py-4 px-4">{shipment.status}</td>
                <td className="py-4 px-4">
                  <button className="bg-white text-red-600 border border-red-600 rounded-full px-4 py-1 text-xs hover:bg-red-50 transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingBids;
