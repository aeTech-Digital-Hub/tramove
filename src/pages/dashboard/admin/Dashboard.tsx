import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import AdminDashboardContent from "@/components/dashboard/admin/AdminDashboardContent";
import TransportersPage from "./Transporters";
import ShippersPage from "./Shippers";
import ShipmentsPage from "./Shipments";
import EarningsPage from "./Earnings";
import MessagesPage from "./Messages";
import NotificationsPage from "./Notifications";
import SettingsPage from "./Settings";

const AdminDashboardPage: React.FC = () => {
  // const location = useLocation();
  // const path = location.pathname;
  
  // Extract the page title from the path
  // const getPageTitle = () => {
  //   const segments = path.split('/');
  //   const lastSegment = segments[segments.length - 1];
  //   if (lastSegment === 'admin') return 'Dashboard Overview';
  //   return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  // };

  return (
    <DashboardLayout userType="admin" userName="Admin">
      <Routes>
        <Route index element={<AdminDashboardContent />} />
        <Route path="shipments" element={<ShipmentsPage />} />
        <Route path="transporters" element={<TransportersPage />} />
        <Route path="shippers" element={<ShippersPage />} />
        <Route path="earnings" element={<EarningsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AdminDashboardPage;
