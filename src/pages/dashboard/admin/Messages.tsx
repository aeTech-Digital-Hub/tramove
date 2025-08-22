import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Message {
  id: string;
  from: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
}

const messages: Message[] = [
  {
    id: "M1",
    from: "Adam Logistics",
    subject: "Shipment Delay",
    content: "Our shipment will be delayed by 2 hours...",
    date: "2025-08-15 10:30",
    read: false
  },
  {
    id: "M2",
    from: "Fast Delivery",
    subject: "New Route Request",
    content: "We would like to request a new delivery route...",
    date: "2025-08-14 15:45",
    read: true
  }
];

const MessagesPage = () => {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>From</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id} className={message.read ? "" : "font-medium bg-gray-50"}>
                <TableCell>
                  <span className={`w-2 h-2 rounded-full inline-block ${message.read ? 'bg-gray-300' : 'bg-blue-500'}`} />
                </TableCell>
                <TableCell>{message.from}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default MessagesPage;
