import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ShipperDashboardPage from "./pages/dashboard/shipper/Dashboard";
import AdminDashboardPage from "./pages/dashboard/admin/Dashboard";
import TransporterDashboardPage from "./pages/dashboard/transporter/Dashboard";
import Contact from "./pages/Contact";

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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes with Navbar and Footer */}
            <Route path="/" element={<><Navbar /><Index /><Footer /></>} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
            <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
            
            {/* Admin Dashboard Routes */}
            <Route path="/dashboard/admin/*" element={<AdminDashboardPage />} />

            {/* Shipper Dashboard Routes */}
            <Route path="/dashboard/shipper/*" element={<ShipperDashboardPage />} />

            {/* Transporter Dashboard Routes */}
            <Route path="/dashboard/transporter/*" element={<TransporterDashboardPage />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
            <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />

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
