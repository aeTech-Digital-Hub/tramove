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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Payment {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  method: string;
}

const payments: Payment[] = [
  {
    id: 'PAY001',
    date: '2025-08-15',
    description: 'Shipment #SHP001 to Kumasi',
    amount: '₵2,500',
    status: 'completed',
    method: 'Mobile Money'
  },
  {
    id: 'PAY002',
    date: '2025-08-16',
    description: 'Shipment #SHP002 to Takoradi',
    amount: '₵3,200',
    status: 'pending',
    method: 'Bank Transfer'
  }
];

const PaymentsPage = () => {
  return (
    <div className="space-y-6">
      {/* Payment Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-500">Total Spent</p>
          <p className="text-2xl font-bold mt-1">₵12,450</p>
          <p className="text-xs text-green-500 mt-1">↑ 12% from last month</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Pending Payments</p>
          <p className="text-2xl font-bold mt-1">₵3,200</p>
          <p className="text-xs text-yellow-500 mt-1">2 payments pending</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Available Balance</p>
          <p className="text-2xl font-bold mt-1">₵5,800</p>
          <p className="text-xs text-blue-500 mt-1">Updated 5 mins ago</p>
        </Card>
      </div>

      {/* Payment Methods */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
        <div className="flex gap-4">
          <Select defaultValue="momo">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="momo">Mobile Money</SelectItem>
              <SelectItem value="bank">Bank Transfer</SelectItem>
              <SelectItem value="card">Credit Card</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Payment History */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Payment History</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.description}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    payment.status === 'completed' ? 'bg-green-100 text-green-700' :
                    payment.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {payment.status}
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

export default PaymentsPage;
