import React, { type ReactNode } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
// import useUIStore from '@/store/useUIStore';
// import useAuthStore from '@/store/useAuthStore';

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'shipper' | 'transporter' | 'admin';
  userName?: string;
  userImage?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  userType,
  userName = 'Adam Logistics',
  userImage
}) => {
  // const { isSidebarOpen, _toggleSidebar } = useUIStore();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar userType={userType} />
      <div className="ml-60 flex-1 flex flex-col">
        <DashboardHeader 
          userName={userName} 
          userImage={userImage}
          notificationCount={3} 
        />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
