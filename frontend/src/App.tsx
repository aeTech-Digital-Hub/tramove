import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
//import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ShipperDashboardPage from "./pages/dashboard/shipper/Dashboard";
import AdminDashboardPage from "./pages/dashboard/admin/Dashboard";
import TransporterDashboardPage from "./pages/dashboard/transporter/Dashboard";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import GetStarted from "./pages/GetStarted";
import ShipperRegistration from "./pages/auth/ShipperRegistration";
import TransporterRegistration from "./pages/auth/TransporterRegistration";
import TransporterLogin from "./pages/auth/TransporterLogin";
import ShipperLogin from "./pages/auth/ShipperLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import Logout from "./pages/auth/LogOut";
import { ToastContainer } from 'react-toastify';

import { lazy, Suspense } from "react";

const Services = lazy(() => import("@/pages/Services"));



const queryClient = new QueryClient();

const App = () => {
  // Mock role, replace with context or auth logic
  const role = 'admin'; // 'shipper' | 'admin' | 'transporter'

  // Dashboard page imports (replace with actual components)
  // import AdminDashboardPage from './pages/dashboard/admin/Dashboard';
  // import TransporterDashboardPage from './pages/dashboard/transporter/Dashboard';
  // import ShipperDashboardPage from './pages/dashboard/shipper/Dashboard';

  // Role-based dashboard route
  const DashboardRoute = () => {
    if (role === 'admin') {
      return <AdminDashboardPage />;
    }
    if (role === 'shipper') {
      return <ShipperDashboardPage />;
    }
    if (role === 'transporter') {
      return <TransporterDashboardPage />;
    }
    return <NotFound />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes with Navbar and Footer */}
            <Route path="/" element={<><Navbar /><Index /><Footer /></>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
           
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />      
            <Route path="/get-a-quote" element={<><Navbar /><Quote /><Footer /></>} />      
            <Route path="/get-started" element={<><Navbar /><GetStarted /><Footer /></>} /> 
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
            </Suspense>


            {/* Auth Pages */}
            <Route path="/shipper-registration" element={<><Navbar /><ShipperRegistration /><Footer /></>} /> 
            <Route path="/shipper-login" element={<><Navbar /><ShipperLogin /><Footer /></>} /> 
            <Route path="/transporter-registration" element={<><Navbar /><TransporterRegistration /><Footer /></>} /> 
            <Route path="/transporter-login" element={<><Navbar /><TransporterLogin /><Footer /></>} /> 
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/admin-login" element={<><Navbar /><AdminLogin /><Footer /></>} />

            {/* Admin Dashboard Routes */}
            <Route path="/dashboard/admin/*" element={<AdminDashboardPage />} />

            {/* Shipper Dashboard Routes */}
            <Route path="/dashboard/shipper/*" element={<ShipperDashboardPage />} />

            {/* Transporter Dashboard Routes */}
            <Route path="/dashboard/transporter/*" element={<TransporterDashboardPage />} />

            {/* Role-based dashboard route */}
            <Route path="/dashboard/*" element={<DashboardRoute />} />

            {/* Catch-all route */}
            <Route path="*" element={<><Navbar /><NotFound /><Footer /></>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
