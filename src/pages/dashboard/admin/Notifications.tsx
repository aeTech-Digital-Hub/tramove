import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Notification {
  id: string;
  isNew?: boolean;
  message: string;
  application?: boolean;
  date: string;
  read: boolean;
}

const NotificationsPage = () => {
  const [notifications] = useState<Notification[]>([
    {
      id: "1",
      isNew: true,
      message: "Emmanuel Addo has applied to become a transporter. Review their application.",
      date: "Today, 1:15PM (GMT)",
      read: false,
      application: true,
    },
    {
      id: "2",
      isNew: true,
      message: "New shipment request from Samuel Osei. Check the details and approve or reject.",
      date: "Today, 10:30AM (GMT)",
      read: false,
      application: false,
    },
    {
      id: "3",
      isNew: false,
      message: "System maintenance scheduled for tomorrow at 2:00AM GMT. The system will be down for approximately 30 minutes.",
      date: "Yesterday, 5:45PM (GMT)",
      read: false,
      application: false,
    }
  ]);

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex flex-col space-y-5">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Notifications</h1>
          <p className="text-gray-500 mt-1">View and manage your system notifications</p>
        </div>

        {/* Notification container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div className="relative">
              <button className="flex items-center gap-2 text-sm px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                <span>All Notifications</span>
                <FiChevronDown className="text-gray-500" />
              </button>
            </div>
            <div className="flex items-center gap-5">
              <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                Mark all as Read
              </button>
              <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700">
                Clear all
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div>
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className="group px-6 py-4 border-b border-gray-200 hover:bg-gray-50 relative transition-colors duration-150"
              >
                <div className="flex items-start gap-3">
                  {notification.isNew && (
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-1.5" />
                  )}
                  <div className="flex-1 pr-16">
                    <p className="text-gray-800 leading-relaxed">{notification.message}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">{notification.date}</span>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        Mark as read
                      </button>
                    </div>
                  </div>
                </div>
                {notification.isNew && (
                  <div className="absolute right-6 top-4 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded">
                    New
                  </div>
                )}
                {notification.application && (
                  <div className="absolute right-20 top-4 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    Application
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
