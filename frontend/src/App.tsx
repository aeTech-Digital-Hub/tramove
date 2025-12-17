import { lazy, Suspense } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const About = lazy(() =>import("./pages/About"));
const Services = lazy(() => import ("./pages/Services"));
import NotFound from "./pages/NotFound";
const Index = lazy(() => import( "./pages/Index"))
const Navbar = lazy(() => import("./components/layout/Navbar"));
const Footer = lazy (() => import ( "./components/layout/Footer"));
const ShipperDashboardPage = lazy (() => import ( "./pages/dashboard/shipper/Dashboard"));
const  AdminDashboardPage = lazy(() =>  import("./pages/dashboard/admin/Dashboard"));
const TransporterDashboardPage = lazy(() => import( "./pages/dashboard/transporter/Dashboard"));
const Contact = lazy(() => import ("./pages/Contact"));
const Quote = lazy (() => import ("./pages/Quote"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const ShipperRegistration = lazy(() =>import( "./pages/auth/ShipperRegistration"));
const TransporterRegistration = lazy(() => import ( "./pages/auth/TransporterRegistration"));
const TransporterLogin = lazy(() => import ( "./pages/auth/TransporterLogin"));
const ShipperLogin = lazy(() => import ("./pages/auth/ShipperLogin"));
const AdminLogin = lazy(() => import ("./pages/auth/AdminLogin"));
const Logout = lazy(() => import ( "./pages/auth/LogOut"));
import { ToastContainer } from 'react-toastify';



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
          <Suspense fallback={<div>....loading</div>}>
          <Routes>
            {/* Public routes with Navbar and Footer */}
              <Route path="/" element={<><Navbar /><Index /><Footer /></>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
            <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />      
            <Route path="/get-a-quote" element={<><Navbar /><Quote /><Footer /></>} />      
            <Route path="/get-started" element={<><Navbar /><GetStarted /><Footer /></>} /> 


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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
