import React, { useEffect } from 'react';
import StatsCard from './StatsCard';
import SpecialOffer from './SpecialOffer';
import ActiveShipments from './ActiveShipments';
import StatusDistribution from './StatusDistribution';
import PendingBids from './PendingBids';
import useAuthStore from '@/store/useAuthStore';
import useShipmentStore from '@/store/useShipmentStore';
import useBidStore from '@/store/useBidStore';

interface ShipperDashboardProps {
  user: {
    name: string;
    company?: string;
  };
}

const ShipperDashboard: React.FC<ShipperDashboardProps> = ({ user }) => {
  const { shipments, setShipments, loading: shipmentsLoading } = useShipmentStore();
  const { bids, setBids, loading: bidsLoading } = useBidStore();

  // In a real app, you would fetch data from your API here
  useEffect(() => {
    // Simulated API calls
    const fetchData = async () => {
      // Fetch shipments and bids data
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
        <p className="text-gray-600">Manage your shipments and track your order with ease.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatsCard 
          icon="package" 
          value="56" 
          label="Total Shipments" 
          bgColor="bg-blue-100" 
          textColor="text-blue-600" 
        />
        <StatsCard 
          icon="check" 
          value="42" 
          label="Active Shipment" 
          bgColor="bg-green-100" 
          textColor="text-green-600" 
        />
        <StatsCard 
          icon="clock" 
          value="14" 
          label="Pending Bids" 
          bgColor="bg-yellow-100" 
          textColor="text-yellow-600" 
        />
        <StatsCard 
          icon="dollar" 
          value="67,500" 
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
