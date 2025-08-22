import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AvailableShipment {
  id: string;
  from: string;
  to: string;
  weight: string;
  dimensions: string;
  budget: string;
  date: string;
  distance: string;
  bids: number;
}

const availableShipments: AvailableShipment[] = [
  {
    id: 'SHP003',
    from: 'Accra',
    to: 'Kumasi',
    weight: '500kg',
    dimensions: '2m × 1.5m × 1m',
    budget: '₵2,500',
    date: '2025-08-18',
    distance: '248 km',
    bids: 3
  },
  {
    id: 'SHP004',
    from: 'Tema',
    to: 'Takoradi',
    weight: '750kg',
    dimensions: '3m × 2m × 2m',
    budget: '₵3,200',
    date: '2025-08-19',
    distance: '227 km',
    bids: 1
  }
];

const BrowsePage = () => {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium">Distance</label>
            <select className="w-full mt-1 p-2 border rounded-md">
              <option>Any Distance</option>
              <option>Under 100km</option>
              <option>100km - 300km</option>
              <option>Over 300km</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Weight</label>
            <select className="w-full mt-1 p-2 border rounded-md">
              <option>Any Weight</option>
              <option>Under 500kg</option>
              <option>500kg - 1000kg</option>
              <option>Over 1000kg</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Date</label>
            <select className="w-full mt-1 p-2 border rounded-md">
              <option>Any Date</option>
              <option>Today</option>
              <option>Next 3 Days</option>
              <option>Next Week</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Budget</label>
            <select className="w-full mt-1 p-2 border rounded-md">
              <option>Any Budget</option>
              <option>Under ₵1,000</option>
              <option>₵1,000 - ₵3,000</option>
              <option>Over ₵3,000</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Available Shipments */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Available Shipments</h2>
        <div className="space-y-4">
          {availableShipments.map((shipment) => (
            <Card key={shipment.id} className="p-4 hover:bg-gray-50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Route</p>
                  <p className="font-medium">{shipment.from} → {shipment.to}</p>
                  <p className="text-sm text-gray-500">Distance: {shipment.distance}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cargo Details</p>
                  <p className="font-medium">{shipment.weight}</p>
                  <p className="text-sm text-gray-500">{shipment.dimensions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Budget</p>
                  <p className="font-medium">{shipment.budget}</p>
                  <Badge variant="secondary">{shipment.bids} bids</Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pickup Date</p>
                  <p className="font-medium">{shipment.date}</p>
                  <Button className="mt-2" size="sm">Place Bid</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BrowsePage;
