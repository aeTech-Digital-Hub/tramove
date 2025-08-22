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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ActiveShipment {
  id: string;
  pickup: string;
  delivery: string;
  customer: string;
  status: 'in_transit' | 'loading' | 'unloading' | 'completed';
  cargo: string;
  eta: string;
}

const activeShipments: ActiveShipment[] = [
  {
    id: 'SHP001',
    pickup: 'Accra Central',
    delivery: 'Kumasi Main Hub',
    customer: 'Adam Logistics',
    status: 'in_transit',
    cargo: '500kg General Cargo',
    eta: '2 hours'
  },
  {
    id: 'SHP002',
    pickup: 'Tema Port',
    delivery: 'Takoradi',
    customer: 'Beta Shipping',
    status: 'loading',
    cargo: '750kg Container',
    eta: 'Pending'
  }
];

const getStatusBadge = (status: ActiveShipment['status']) => {
  const styles = {
    in_transit: 'bg-blue-100 text-blue-800',
    loading: 'bg-yellow-100 text-yellow-800',
    unloading: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800'
  };

  return styles[status];
};

const ManagePage = () => {
  return (
    <Tabs defaultValue="active" className="space-y-4">
      <TabsList>
        <TabsTrigger value="active">Active Shipments</TabsTrigger>
        <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>

      <TabsContent value="active" className="space-y-4">
        {/* Vehicle Status */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Vehicle Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <p className="text-sm text-gray-500">Fuel Level</p>
              <p className="text-2xl font-bold mt-1">75%</p>
              <p className="text-xs text-yellow-500">Refuel needed soon</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-gray-500">Next Maintenance</p>
              <p className="text-2xl font-bold mt-1">500 km</p>
              <p className="text-xs text-blue-500">Regular check-up</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-gray-500">Current Location</p>
              <p className="text-2xl font-bold mt-1">N6 Highway</p>
              <p className="text-xs text-green-500">On schedule</p>
            </Card>
          </div>
        </Card>

        {/* Active Shipments */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Active Deliveries</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Pickup</TableHead>
                <TableHead>Delivery</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeShipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell>{shipment.id}</TableCell>
                  <TableCell>{shipment.pickup}</TableCell>
                  <TableCell>{shipment.delivery}</TableCell>
                  <TableCell>{shipment.customer}</TableCell>
                  <TableCell>{shipment.cargo}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(shipment.status)}>
                      {shipment.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>{shipment.eta}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Update</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </TabsContent>

      <TabsContent value="scheduled" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Deliveries</h2>
          {/* Add scheduled deliveries table here */}
        </Card>
      </TabsContent>

      <TabsContent value="completed" className="space-y-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Completed Deliveries</h2>
          {/* Add completed deliveries table here */}
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ManagePage;
