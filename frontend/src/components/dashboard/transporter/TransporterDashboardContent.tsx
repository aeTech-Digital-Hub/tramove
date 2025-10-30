import React from 'react';
import { Card } from '@/components/ui/card';
import { FiPackage, FiTruck, FiDollarSign, FiStar } from 'react-icons/fi';
import { Progress } from '@/components/ui/progress';
// import useAuthStore from '@/store/useAuthStore';
// import useShipmentStore from '@/store/useShipmentStore';
// import useBidStore from '@/store/useBidStore';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactElement;
  change?: string;
}

const StatCard: React.FC<StatsCardProps> = ({ title, value, icon, change }) => (
  <Card className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        {change && <p className="text-xs text-green-500 mt-1">↑ {change} from last month</p>}
      </div>
      <div className="text-blue-600">{icon}</div>
    </div>
  </Card>
);

interface ShipmentCardProps {
  id: string;
  from: string;
  to: string;
  status: string;
  price: string;
  distance: string;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({ id, from, to, status, price, distance }) => (
  <Card className="p-4">
    <div className="flex justify-between items-center mb-4">
      <h4 className="font-semibold">Shipment #{id}</h4>
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'In Transit' ? 'bg-blue-100 text-blue-700' : 
        status === 'Completed' ? 'bg-green-100 text-green-700' : 
        'bg-yellow-100 text-yellow-700'
      }`}>
        {status}
      </span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">From:</span>
        <span>{from}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">To:</span>
        <span>{to}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Price:</span>
        <span className="font-semibold">₵{price}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Distance:</span>
        <span>{distance}</span>
      </div>
    </div>
  </Card>
);

const TransporterDashboardContent: React.FC = () => {
  const activeShipments = [
    {
      id: "SH001",
      from: "Accra",
      to: "Kumasi",
      status: "In Transit",
      price: "2,500",
      distance: "248 km"
    },
    {
      id: "SH002",
      from: "Tema",
      to: "Takoradi",
      status: "Pending",
      price: "3,200",
      distance: "227 km"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Deliveries"
          value="5"
          icon={<FiTruck size={24} />}
          change="25%"
        />
        <StatCard
          title="Completed Deliveries"
          value="156"
          icon={<FiPackage size={24} />}
          change="10%"
        />
        <StatCard
          title="Total Earnings"
          value="₵45,230"
          icon={<FiDollarSign size={24} />}
          change="18%"
        />
        <StatCard
          title="Rating"
          value="4.8/5"
          icon={<FiStar size={24} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Vehicle Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Fuel Level</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Maintenance Status</span>
                <span className="text-sm font-medium">Good</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">8:00 AM - Pickup at Accra Central</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">11:30 AM - Delivery at Tema Port</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm">2:00 PM - Maintenance Check</span>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Active Shipments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeShipments.map(shipment => (
            <ShipmentCard key={shipment.id} {...shipment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransporterDashboardContent;
