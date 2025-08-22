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

interface Earning {
  id: string;
  shipmentId: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending';
  fee: number;
  netAmount: number;
}

const earnings: Earning[] = [
  {
    id: 'E001',
    shipmentId: 'SHP001',
    amount: 2500,
    date: '2025-08-15',
    status: 'completed',
    fee: 125,
    netAmount: 2375
  },
  {
    id: 'E002',
    shipmentId: 'SHP002',
    amount: 3200,
    date: '2025-08-16',
    status: 'pending',
    fee: 160,
    netAmount: 3040
  }
];

const EarningsPage = () => {
  const totalEarnings = earnings.reduce((sum, earning) => sum + earning.amount, 0);
  const totalFees = earnings.reduce((sum, earning) => sum + earning.fee, 0);
  const netEarnings = earnings.reduce((sum, earning) => sum + earning.netAmount, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <p className="text-2xl font-bold mt-1">₵{totalEarnings.toLocaleString()}</p>
          <p className="text-xs text-green-500 mt-1">↑ 15% from last month</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Platform Fees</p>
          <p className="text-2xl font-bold mt-1">₵{totalFees.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">5% of total earnings</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Net Earnings</p>
          <p className="text-2xl font-bold mt-1">₵{netEarnings.toLocaleString()}</p>
          <p className="text-xs text-blue-500 mt-1">Available for withdrawal</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Earnings History</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Shipment</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Platform Fee</TableHead>
              <TableHead>Net Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {earnings.map((earning) => (
              <TableRow key={earning.id}>
                <TableCell>{earning.id}</TableCell>
                <TableCell>{earning.shipmentId}</TableCell>
                <TableCell>₵{earning.amount.toLocaleString()}</TableCell>
                <TableCell>₵{earning.fee.toLocaleString()}</TableCell>
                <TableCell>₵{earning.netAmount.toLocaleString()}</TableCell>
                <TableCell>{earning.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    earning.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {earning.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default EarningsPage;
