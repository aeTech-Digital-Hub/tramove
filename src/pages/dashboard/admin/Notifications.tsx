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

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "N1",
    type: "success",
    title: "New Registration",
    message: "New transporter registered: Quick Delivery Services",
    date: "2025-08-15 09:15",
    read: false
  },
  {
    id: "N2",
    type: "warning",
    title: "Delayed Shipment",
    message: "Shipment #SH001 is running behind schedule",
    date: "2025-08-14 16:20",
    read: true
  },
  {
    id: "N3",
    type: "info",
    title: "System Update",
    message: "System maintenance scheduled for tonight",
    date: "2025-08-14 11:30",
    read: true
  }
];

const getNotificationColor = (type: Notification['type']) => {
  switch (type) {
    case 'success': return 'bg-green-100 text-green-800';
    case 'warning': return 'bg-yellow-100 text-yellow-800';
    case 'error': return 'bg-red-100 text-red-800';
    default: return 'bg-blue-100 text-blue-800';
  }
};

const NotificationsPage = () => {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow key={notification.id} className={notification.read ? "" : "font-medium bg-gray-50"}>
                <TableCell>
                  <span className={`w-2 h-2 rounded-full inline-block ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`} />
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${getNotificationColor(notification.type)}`}>
                    {notification.type}
                  </span>
                </TableCell>
                <TableCell>{notification.title}</TableCell>
                <TableCell>{notification.message}</TableCell>
                <TableCell>{notification.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default NotificationsPage;
