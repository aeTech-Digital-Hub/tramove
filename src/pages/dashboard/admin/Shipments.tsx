
import React, { useState, useEffect } from 'react';
import PendingShipmentsTable, { type PendingShipment } from '@/components/dashboard/shared/PendingShipmentsTable';
import AssignTransporterModal from '@/components/dashboard/admin/AssignTransporterModal';
import CreateShipmentModal from '@/components/dashboard/admin/CreateShipmentModal';
import AdjustQuoteModal from '@/components/dashboard/admin/AdjustQuoteModal';
import { FiDownload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Interface for shipment history
interface ShipmentHistory {
  id: string;
  transporter: string;
  route: string;
  date: string;
  value: number;
  status: 'Delivered' | 'In Transit' | 'Pending' | 'Cancelled';
}

const Shipments = () => {
  const [pendingShipments, setPendingShipments] = useState<PendingShipment[]>([]);
  const [shipmentHistory, setShipmentHistory] = useState<ShipmentHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isCreateShipmentModalOpen, setIsCreateShipmentModalOpen] = useState(false);
  const [isAdjustQuoteModalOpen, setIsAdjustQuoteModalOpen] = useState(false);
  const [selectedShipmentId, setSelectedShipmentId] = useState<string>('');
  const [selectedShipment, setSelectedShipment] = useState<PendingShipment | null>(null);
  const [dateFilter, setDateFilter] = useState('Last 30 days');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchId, setSearchId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Simulate API fetch for pending shipments
  useEffect(() => {
    const fetchPendingShipments = async () => {
      try {
        // Mock data for pending shipments
        const MOCK_SHIPMENTS: PendingShipment[] = [
          {
            id: 'SH-7852',
            shipper: 'Adam Logistics',
            cargoType: 'Electronics',
            route: 'Accra to Tamale',
            eta: '2023-05-20',
            quote: 1500
          },
          {
            id: 'SH-7852',
            shipper: 'Adam Logistics',
            cargoType: 'Machine',
            route: 'Accra to Tamale',
            eta: '2023-05-20',
            quote: 3000
          }
        ];
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPendingShipments(MOCK_SHIPMENTS);
      } catch (error) {
        console.error('Error fetching pending shipments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPendingShipments();
  }, []);

  // Simulate API fetch for shipment history
  useEffect(() => {
    const fetchShipmentHistory = async () => {
      try {
        // Mock data for shipment history
        const MOCK_HISTORY: ShipmentHistory[] = [
          {
            id: 'SH-78452',
            transporter: 'Kwame Truck',
            route: 'Accra to Takoradi',
            date: '2025-05-08',
            value: 2500,
            status: 'Delivered'
          },
          {
            id: 'SH-40135',
            transporter: 'Volta Movers',
            route: 'Kumasi to Accra',
            date: '2025-05-08',
            value: 3800,
            status: 'Delivered'
          },
          {
            id: 'SH-27135',
            transporter: 'Northern Express',
            route: 'Tema to Ho',
            date: '2025-05-08',
            value: 3600,
            status: 'In Transit'
          }
        ];
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setShipmentHistory(MOCK_HISTORY);
      } catch (error) {
        console.error('Error fetching shipment history:', error);
      } finally {
        setIsHistoryLoading(false);
      }
    };

    fetchShipmentHistory();
  }, []);

  const handleAdjustQuote = async (shipmentId: string) => {
    // Find the shipment in the pending shipments array
    const shipment = pendingShipments.find(s => s.id === shipmentId);
    
    if (shipment) {
      setSelectedShipment(shipment);
      setSelectedShipmentId(shipmentId);
      setIsAdjustQuoteModalOpen(true);
    }
  };

  const handleAssignTransporter = async (shipmentId: string) => {
    setSelectedShipmentId(shipmentId);
    setIsAssignModalOpen(true);
  };

  const handleViewDetails = (shipmentId: string) => {
    console.log('Viewing details for shipment:', shipmentId);
    // Add view details logic here
  };

  const handleExport = () => {
    console.log('Exporting shipment data');
    // Add export logic here
  };
  
  const handleCreateShipment = (shipmentData: {
    origin: string;
    destination: string;
    transporter: string;
    shipmentType: string;
    weight: string;
    value: string;
    shipmentDate: string;
    note: string;
  }) => {
    console.log('Creating new shipment:', shipmentData);
    
    // Generate a new ID for the shipment
    const newShipmentId = `SH-${Math.floor(10000 + Math.random() * 90000)}`;
    
    // Create a new pending shipment from the data
    const newPendingShipment: PendingShipment = {
      id: newShipmentId,
      shipper: 'Adam Logistics', // Default shipper or get from context
      cargoType: shipmentData.shipmentType,
      route: `${shipmentData.origin} to ${shipmentData.destination}`,
      eta: shipmentData.shipmentDate,
      quote: parseFloat(shipmentData.value.replace(/,/g, ''))
    };
    
    // Add the new shipment to the list
    setPendingShipments(prevShipments => [newPendingShipment, ...prevShipments]);
    
    // Show a success message or notification here
    alert(`Shipment ${newShipmentId} created successfully!`);
  };
  
  return (
    <div className='space-y-6'>
      <div className="flex items-center justify-between">
        <div className='flex flex-col gap-1'>
          <h1 className="text-2xl font-bold w-[400px]">Shipments</h1>
          <p>Manage and track all shipments across Ghana.</p>
        </div>
        <div className="">
          <button 
            onClick={() => setIsCreateShipmentModalOpen(true)}
            className="px-4 py-2 text-white bg-gradient-to-t from-red to-deep-red rounded-full hover:bg-[#E60023]/90"
          >
            New Shipment
          </button>
        </div>
      </div>
      
      {/* Pending Shipments Table - Matches the top section of the image */}
      <div className="border border-dotted border-blue-300 rounded-lg">
        <PendingShipmentsTable
          shipments={pendingShipments}
          isLoading={isLoading}
          onAdjustQuote={handleAdjustQuote}
          onAssignTransporter={handleAssignTransporter}
          title="Pending Shipments"
          description="Shipments waiting for transporter assignment"
        />
      </div>

      {/* Shipment History Section - Matches the bottom section of the image */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Shipment history</h2>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50"
          >
            <FiDownload className="h-4 w-4" />
            Export
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          {/* Date Filter */}
          <div className="flex-1 min-w-[180px]">
            <label className="block text-sm text-gray-500 mb-1">Filter by Date</label>
            <select 
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 90 days">Last 90 days</option>
              <option value="All time">All time</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex-1 min-w-[180px]">
            <label className="block text-sm text-gray-500 mb-1">Filter by Status</label>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="All">All</option>
              <option value="Delivered">Delivered</option>
              <option value="In Transit">In Transit</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Shipment ID Search */}
          <div className="flex-1 min-w-[180px]">
            <label className="block text-sm text-gray-500 mb-1">Shipment ID</label>
            <input 
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter shipment ID"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Shipment History Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-3 px-4 font-medium">Shipment ID</th>
                <th className="py-3 px-4 font-medium">Transporter</th>
                <th className="py-3 px-4 font-medium">Route</th>
                <th className="py-3 px-4 font-medium">Date</th>
                <th className="py-3 px-4 font-medium">Value</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {isHistoryLoading ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">
                    Loading shipment history...
                  </td>
                </tr>
              ) : shipmentHistory.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">
                    No shipment history found
                  </td>
                </tr>
              ) : (
                shipmentHistory.map((shipment) => (
                  <tr key={shipment.id} className="border-b text-sm">
                    <td className="py-4 px-4">{shipment.id}</td>
                    <td className="py-4 px-4">{shipment.transporter}</td>
                    <td className="py-4 px-4">{shipment.route}</td>
                    <td className="py-4 px-4">{shipment.date}</td>
                    <td className="py-4 px-4">₵{shipment.value.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <span 
                        className={`px-2 py-1 rounded-md text-xs ${
                          shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                          shipment.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {shipment.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleViewDetails(shipment.id)}
                        className="text-red hover:text-deep-red border border-red rounded-full px-4"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-500 text-sm">
            Showing {Math.min(1, shipmentHistory.length)} to {Math.min(shipmentHistory.length, 10)} of {shipmentHistory.length} entries
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-1 rounded border ${currentPage === 1 ? 'text-gray-400 border-gray-200' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button className="px-3 py-1 rounded bg-red-500 text-white">1</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
            <span className="px-1">...</span>
            <button 
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AssignTransporterModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        shipmentId={selectedShipmentId}
      />

      <CreateShipmentModal 
        isOpen={isCreateShipmentModalOpen}
        onClose={() => setIsCreateShipmentModalOpen(false)}
        onCreate={handleCreateShipment}
      />

      {selectedShipment && (
        <AdjustQuoteModal
          isOpen={isAdjustQuoteModalOpen}
          onClose={() => {
            setIsAdjustQuoteModalOpen(false);
            setSelectedShipment(null);
          }}
          shipment={selectedShipment}
          onSaveQuote={(newQuote) => {
            // Update the shipment in the list with the new quote
            setPendingShipments(prevShipments => 
              prevShipments.map(shipment => 
                shipment.id === selectedShipment.id 
                  ? {...shipment, quote: newQuote} 
                  : shipment
              )
            );
            setIsAdjustQuoteModalOpen(false);
            setSelectedShipment(null);
          }}
        />
      )}
    </div>
  )
}

export default Shipments