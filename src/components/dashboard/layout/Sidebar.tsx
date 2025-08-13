import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { 
  FiHome, 
  FiPackage, 
  FiMap, 
  FiFileText, 
  FiCreditCard, 
  FiBell, 
  FiMessageSquare, 
  FiUser, 
  FiLogOut 
} from 'react-icons/fi';

interface SidebarProps {
  userType: 'shipper' | 'transporter';
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const basePath = `/dashboard/${userType}`;
  
  const menuItems = [
    { name: 'Home', icon: FiHome, path: basePath },
    { name: 'Shipment', icon: FiPackage, path: `${basePath}/shipments` },
    { name: 'Track', icon: FiMap, path: `${basePath}/track` },
    { name: 'Report', icon: FiFileText, path: `${basePath}/reports` },
    { name: 'Payment', icon: FiCreditCard, path: `${basePath}/payments` },
  ];

  const notificationCount = 3; // This would come from your notification system
  const messageCount = 1; // This would come from your messaging system

  return (
    <div className="h-screen w-60 bg-white shadow-lg flex flex-col fixed left-0 top-0">
      <div className="p-4 border-b">
        <Link to="/">
          <img src={logo} alt="Tarmove" className="h-8" />
        </Link>
      </div>
      
      <nav className="flex-grow">
        <ul className="mt-6 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-4 text-sm transition-colors  ${
                  isActive(item.path)
                    ? 'bg-[#FFCBD4] text-deep-red font-medium border-l-4 border-red'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3 text-deep-red" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <ul className="mt-2 space-y-2">
          <li>
            <Link
              to={`${basePath}/notifications`}
              className="flex items-center px-6 py-3 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <div className="relative">
                <FiBell className="w-5 h-5 mr-3 text-red" />
                {notificationCount >= 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </div>
              Notification
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/messages`}
              className="flex items-center px-6 py-3 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <div className="relative">
                <FiMessageSquare className="w-5 h-5 mr-3 text-red" />
                {messageCount >= 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {messageCount}
                  </span>
                )}
              </div>
              Message
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/profile`}
              className="flex items-center px-6 py-3 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <FiUser className="w-5 h-5 mr-3 text-red" />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto mb-8">
        <Link
          to="/logout"
          className="flex items-center px-6 py-3 text-sm text-red hover:bg-gray-100 transition-colors"
        >
          <FiLogOut className="w-5 h-5 mr-3 text-red" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
