import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Bell,
  Package,
  AlertCircle,
  MessageSquare,
  Clock,
} from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'shipment',
      title: 'New Shipment Request',
      description: 'You have a new shipment request from Accra to Kumasi',
      time: '10 minutes ago',
      icon: <Package className="h-6 w-6" />,
      status: 'new',
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      description: 'John Smith sent you a message about delivery details',
      time: '1 hour ago',
      icon: <MessageSquare className="h-6 w-6" />,
      status: 'read',
    },
    {
      id: 3,
      type: 'alert',
      title: 'Route Update',
      description: 'Your scheduled route has been updated due to road construction',
      time: '2 hours ago',
      icon: <AlertCircle className="h-6 w-6" />,
      status: 'read',
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Delivery Reminder',
      description: 'Upcoming delivery scheduled for tomorrow at 9:00 AM',
      time: '3 hours ago',
      icon: <Clock className="h-6 w-6" />,
      status: 'new',
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
      case 'reminder':
        return 'text-yellow-500';
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
          <Badge>4 New</Badge>
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
