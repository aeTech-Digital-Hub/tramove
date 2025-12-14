import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.webp';
import { 
  FiHome, 
  FiPackage, 
  FiMap, 
  FiFileText, 
  FiCreditCard, 
  FiBell, 
  FiMessageSquare, 
  FiUser, 
  FiLogOut,
  FiTruck,
  FiSettings
} from 'react-icons/fi';

interface SidebarProps {
  userType: 'shipper' | 'transporter' | 'admin';
}

type MenuItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  badge?: number;
};

const Sidebar: React.FC<SidebarProps> = () => {
  const location = useLocation();
  // Detect role from URL: /dashboard/{role}
  const match = location.pathname.match(/^\/dashboard\/(admin|shipper|transporter)/);
  const detectedType = match ? match[1] : 'admin';
  const isActive = (path: string) => location.pathname === path;
  const basePath = `/dashboard/${detectedType}`;
  const notificationCount = 9;
  const messageCount = 1;

  let menuItems: MenuItem[] = [];
  if (detectedType === 'admin') {
    menuItems = [
      { name: 'Overview', icon: FiHome, path: basePath },
      { name: 'Shipment', icon: FiPackage, path: `${basePath}/shipments` },
      { name: 'Transporters', icon: FiTruck, path: `${basePath}/transporters` },
      { name: 'Shippers', icon: FiUser, path: `${basePath}/shippers` },
      { name: 'Earnings', icon: FiCreditCard, path: `${basePath}/earnings` },
      { name: 'Notification', icon: FiBell, path: `${basePath}/notifications`, badge: notificationCount },
      { name: 'Message', icon: FiMessageSquare, path: `${basePath}/messages`, badge: messageCount },
      { name: 'Settings', icon: FiSettings, path: `${basePath}/settings` },
    ];
  } else if (detectedType === 'transporter') {
    menuItems = [
      { name: 'Home', icon: FiHome, path: basePath },
      { name: 'Browse', icon: FiPackage, path: `${basePath}/browse` },
      { name: 'Manage', icon: FiFileText, path: `${basePath}/manage` },
      { name: 'Earnings', icon: FiCreditCard, path: `${basePath}/earnings` },
      { name: 'Notification', icon: FiBell, path: `${basePath}/notifications`, badge: notificationCount },
      { name: 'Message', icon: FiMessageSquare, path: `${basePath}/messages`, badge: messageCount },
      { name: 'Profile', icon: FiUser, path: `${basePath}/profile` },
      { name: 'Help', icon: FiFileText, path: `${basePath}/help` },
    ];
  } else if (detectedType === 'shipper') {
    menuItems = [
      { name: 'Home', icon: FiHome, path: basePath },
      { name: 'Shipment', icon: FiPackage, path: `${basePath}/shipments` },
      { name: 'Track', icon: FiMap, path: `${basePath}/track` },
      //{ name: 'Report', icon: FiFileText, path: `${basePath}/reports` },
      // { name: 'Payment', icon: FiCreditCard, path: `${basePath}/payments` },
      // { name: 'Notification', icon: FiBell, path: `${basePath}/notifications`, badge: notificationCount },
      // { name: 'Message', icon: FiMessageSquare, path: `${basePath}/messages`, badge: messageCount },
      // { name: 'Profile', icon: FiUser, path: `${basePath}/profile` },
    ];
  }

  return (
    <div className="h-screen w-60 bg-white shadow-lg flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b">
        <Link to="/">
          <img src={logo} alt="Tarmove" className="h-8" />
        </Link>
      </div>
      <nav className="flex-grow">
        <ul className="mt-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm transition-colors relative ${
                  isActive(item.path)
                    ? 'bg-[#FFCBD4] text-[#E60023] font-medium border-l-4 border-[#E60023]'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${isActive(item.path) ? 'text-[#E60023]' : 'text-gray-400'}`} />
                {item.name}
                {item.badge && (
                  <span className="absolute right-6 bg-[#E60023] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto mb-8">
        <Link
          to="/shipper-login"
          className="flex items-center px-6 py-3 text-sm text-[#E60023] hover:bg-gray-100 transition-colors"
        >
          <FiLogOut className="w-5 h-5 mr-3 text-[#E60023]" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
