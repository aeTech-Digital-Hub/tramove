import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Bell,
  Package,
  AlertCircle,
  MessageSquare,
  Clock,
  TrendingUp,
} from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'shipment',
      title: 'Shipment Status Update',
      description: 'Your shipment #TM-2023-001 has been picked up',
      time: '10 minutes ago',
      icon: <Package className="h-6 w-6" />,
      status: 'new',
    },
    {
      id: 2,
      type: 'message',
      title: 'New Bid Received',
      description: 'You have received a new bid for your shipment request',
      time: '1 hour ago',
      icon: <MessageSquare className="h-6 w-6" />,
      status: 'new',
    },
    {
      id: 3,
      type: 'alert',
      title: 'Delivery Delay',
      description: 'Shipment #TM-2023-002 may be delayed due to weather conditions',
      time: '2 hours ago',
      icon: <AlertCircle className="h-6 w-6" />,
      status: 'read',
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Successful',
      description: 'Payment for shipment #TM-2023-003 has been processed',
      time: '3 hours ago',
      icon: <TrendingUp className="h-6 w-6" />,
      status: 'read',
    },
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'shipment':
        return 'text-blue-500';
      case 'message':
        return 'text-green-500';
      case 'alert':
        return 'text-red-500';
      case 'payment':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6" />
          <Badge>2 New</Badge>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className="p-4">
            <div className="flex items-start gap-4">
              <div className={getNotificationColor(notification.type)}>
                {notification.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-sm text-gray-500">{notification.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{notification.time}</span>
                    {notification.status === 'new' && (
                      <Badge variant="default">New</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
