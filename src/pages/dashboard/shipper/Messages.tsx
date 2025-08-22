import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Messages = () => {
  const messages = [
    {
      id: 1,
      sender: 'Fast Delivery Services',
      subject: 'Bid Acceptance Confirmation',
      preview: 'Thank you for accepting our bid. We will start the pickup process...',
      time: '10:30 AM',
      status: 'unread',
    },
    {
      id: 2,
      sender: 'Express Logistics',
      subject: 'New Bid for Your Shipment',
      preview: 'We would like to offer our services for your shipment...',
      time: 'Yesterday',
      status: 'unread',
    },
    {
      id: 3,
      sender: 'Support Team',
      subject: 'Shipment Documentation',
      preview: 'Here are the required documents for your upcoming shipment...',
      time: '2 days ago',
      status: 'read',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Messages</h1>
        <div className="w-1/3">
          <Input type="search" placeholder="Search messages..." />
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sender</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Preview</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id} className="cursor-pointer hover:bg-gray-50">
                <TableCell className="font-medium">{message.sender}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell className="text-gray-500">{message.preview}</TableCell>
                <TableCell>{message.time}</TableCell>
                <TableCell>
                  <Badge variant={message.status === 'unread' ? 'default' : 'secondary'}>
                    {message.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Messages;
