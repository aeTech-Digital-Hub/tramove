import React, { useEffect, useState } from 'react';
import StatsCard from './StatsCard';
import SpecialOffer from './SpecialOffer';
import ActiveShipments from './ActiveShipments';
import StatusDistribution from './StatusDistribution';
import PendingBids from './PendingBids';
import axios from 'axios';
// import useAuthStore from '@/store/useAuthStore';
// import useShipmentStore from '@/store/useShipmentStore';
// import useBidStore from '@/store/useBidStore';

interface ShipperDashboardProps {
  user: {
    name: string;
    company?: string;
  };
}

const ShipperDashboard: React.FC<ShipperDashboardProps> = ({ user }) => {
  // const { shipments, setShipments, loading: shipmentsLoading } = useShipmentStore();
  // const { bids, setBids, loading: bidsLoading } = useBidStore();
  const [shipments, setShipments] = useState([])
  const shipper = JSON.parse(localStorage.getItem('shipper')!)
  useEffect(() => {
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
   
    getShipments();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
        <p className="text-gray-600">Manage your shipments and track your order with ease.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <StatsCard 
          icon="package" 
          value={shipments?shipments.length : 0} 
          label="Total Shipments" 
          bgColor="bg-blue-100" 
          textColor="text-blue-600" 
        />
        <StatsCard 
          icon="check" 
          value={shipments?shipments.length : 0} 
          label="Active Shipment" 
          bgColor="bg-green-100" 
          textColor="text-green-600" 
        />
        {/* <StatsCard 
          icon="clock" 
          value="0" 
          label="Pending Bids" 
          bgColor="bg-yellow-100" 
          textColor="text-yellow-600" 
        /> */}
        <StatsCard 
          icon="dollar" 
          value={shipments?shipments.length : 0} 
          label="Total Spent" 
          bgColor="bg-green-100" 
          textColor="text-green-600" 
        />
      </div>

      <SpecialOffer />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ActiveShipments />
        <StatusDistribution />
      </div>

      <PendingBids />
    </div>
  );
};

export default ShipperDashboard;
