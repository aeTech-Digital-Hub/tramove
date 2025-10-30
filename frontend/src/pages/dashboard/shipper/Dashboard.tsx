import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import ShipperDashboard from "@/components/dashboard/shipper/ShipperDashboard";
import Shipments from './Shipments';
import Track from './Track';
import Reports from './Reports';
import Payments from './Payments';
import Notifications from './Notifications';
import Messages from './Messages';
import Profile from './Profile';
import ShipmentBookingForm from './ShipmentBookingForm'

const ShipperDashboardPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // In a real app, you would fetch user data from auth context or API
  const user = {
    name: "Adam Logistics",
    company: "Adam Logistics Ltd."
  };

  // Extract the page title from the path
  const getPageTitle = () => {
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    if (lastSegment === 'shipper') return 'Welcome, ' + user.name;
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  }

  return (
    <DashboardLayout userType="shipper" userName={user.name}>
      <h1 className="text-2xl font-bold mb-4">{getPageTitle()}</h1>
      <Routes>
        <Route index element={<ShipperDashboard user={user} />} />
        <Route path="shipments" element={<Shipments />} />
        <Route path="track" element={<Track />} />
        <Route path="reports" element={<Reports />} />
        <Route path="payments" element={<Payments />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path='book-shipment'  element={< ShipmentBookingForm />}/>
      </Routes>
    </DashboardLayout>
  );
};

export default ShipperDashboardPage;
