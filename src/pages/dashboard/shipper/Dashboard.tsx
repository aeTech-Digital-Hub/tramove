import React from 'react';
import ShipperDashboard from '../../../components/dashboard/shipper/ShipperDashboard';
import DashboardLayout from '../../../components/dashboard/layout/DashboardLayout';

const ShipperDashboardPage: React.FC = () => {
  // In a real app, you would fetch user data from auth context or API
  const user = {
    name: "Adam Logistics",
    company: "Adam Logistics Ltd."
  };

  return (
    <DashboardLayout 
      userType="shipper"
      userName={user.name}
      // userImage could be added here if available
    >
      <ShipperDashboard user={user} />
    </DashboardLayout>
  );
};

export default ShipperDashboardPage;
