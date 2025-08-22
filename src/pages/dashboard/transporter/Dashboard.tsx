import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import TransporterDashboardContent from "@/components/dashboard/transporter/TransporterDashboardContent";
import BrowsePage from "./Browse";
import ManagePage from "./Manage";
import EarningsPage from "./Earnings";
import NotificationsPage from "./Notifications";
import MessagesPage from "./Messages";
import ProfilePage from "./Profile";
import HelpPage from "./Help";

const TransporterDashboardPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // In a real app, you would fetch user data from auth context or API
  const user = {
    name: "Fast Delivery Services",
    company: "Fast Delivery Ltd."
  };

  // Extract the page title from the path
  const getPageTitle = () => {
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    if (lastSegment === 'transporter') return 'Welcome, ' + user.name;
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  };

  return (
    <DashboardLayout userType="transporter" userName={user.name}>
      <h1 className="text-2xl font-bold mb-4">{getPageTitle()}</h1>
      <Routes>
        <Route index element={<TransporterDashboardContent />} />
        <Route path="browse" element={<BrowsePage />} />
        <Route path="manage" element={<ManagePage />} />
        <Route path="earnings" element={<EarningsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="help" element={<HelpPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default TransporterDashboardPage;
