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
import { FiPlus } from 'react-icons/fi';

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  status: string;
  transporterId?: string;
  weight: string;
  cost: string;
  date: string;
}

const shipments: Shipment[] = [
  {
    id: 'SHP001',
    origin: 'Accra',
    destination: 'Kumasi',
    status: 'In Transit',
    transporterId: 'TRP001',
    weight: '500kg',
    cost: '₵2,500',
    date: '2025-08-15'
  },
  {
    id: 'SHP002',
    origin: 'Tema',
    destination: 'Takoradi',
    status: 'Pending',
    weight: '750kg',
    cost: '₵3,200',
    date: '2025-08-16'
  }
];

const ShipmentsPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">My Shipments</h2>
          <p className="text-sm text-gray-500">Manage and track your shipments</p>
        </div>
        <Button className="flex items-center gap-2">
          <FiPlus size={18} />
          New Shipment
        </Button>
      </div>

      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment.id}>
                <TableCell>{shipment.id}</TableCell>
                <TableCell>{shipment.origin}</TableCell>
                <TableCell>{shipment.destination}</TableCell>
                <TableCell>{shipment.weight}</TableCell>
                <TableCell>{shipment.cost}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    shipment.status === 'In Transit' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {shipment.status}
                  </span>
                </TableCell>
                <TableCell>{shipment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ShipmentsPage;
