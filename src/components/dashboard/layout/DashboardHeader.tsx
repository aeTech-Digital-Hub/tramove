import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

interface DashboardHeaderProps {
  userName: string;
  userImage?: string;
  notificationCount?: number;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  userImage,
  notificationCount = 10,
}) => {
  return (
    <header className="bg-white shadow-sm py-3 px-6 flex items-center justify-between sticky top-0 z-10">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search shipment, transporter..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>

      {/* User Profile and Notifications */}
      <div className="flex items-center">
        {/* Notifications */}
        <div className="mr-6 relative">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <FiBell size={20} />
            {notificationCount >= 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center">
          <div className="mr-3 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
            {userImage ? (
              <img
                src={userImage}
                alt={userName}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium">{userName.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-gray-500">4.5</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
