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
import { DatePickerWithRange } from '@/components/ui/date-range-picker';

interface Report {
  id: string;
  period: string;
  totalShipments: number;
  successRate: string;
  avgDeliveryTime: string;
  totalCost: string;
}

const reports: Report[] = [
  {
    id: 'REP001',
    period: 'August 2025',
    totalShipments: 45,
    successRate: '98%',
    avgDeliveryTime: '2.3 days',
    totalCost: '₵25,400'
  },
  {
    id: 'REP002',
    period: 'July 2025',
    totalShipments: 38,
    successRate: '95%',
    avgDeliveryTime: '2.5 days',
    totalCost: '₵21,800'
  }
];

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      {/* Report Filters */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Report Filters</h2>
        <div className="flex gap-4 flex-wrap">
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily Report</SelectItem>
              <SelectItem value="weekly">Weekly Report</SelectItem>
              <SelectItem value="monthly">Monthly Report</SelectItem>
              <SelectItem value="yearly">Yearly Report</SelectItem>
            </SelectContent>
          </Select>
          <DatePickerWithRange />
        </div>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-500">Total Shipments</p>
          <p className="text-2xl font-bold mt-1">83</p>
          <p className="text-xs text-green-500 mt-1">↑ 18% vs last period</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Success Rate</p>
          <p className="text-2xl font-bold mt-1">96.5%</p>
          <p className="text-xs text-green-500 mt-1">↑ 2.5% vs last period</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Avg Delivery Time</p>
          <p className="text-2xl font-bold mt-1">2.4 days</p>
          <p className="text-xs text-red-500 mt-1">↓ 0.2 days vs last period</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-500">Total Cost</p>
          <p className="text-2xl font-bold mt-1">₵47,200</p>
          <p className="text-xs text-yellow-500 mt-1">↑ 15% vs last period</p>
        </Card>
      </div>

      {/* Reports Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Report History</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>Total Shipments</TableHead>
              <TableHead>Success Rate</TableHead>
              <TableHead>Avg Delivery Time</TableHead>
              <TableHead>Total Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.period}</TableCell>
                <TableCell>{report.totalShipments}</TableCell>
                <TableCell>{report.successRate}</TableCell>
                <TableCell>{report.avgDeliveryTime}</TableCell>
                <TableCell>{report.totalCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ReportsPage;
