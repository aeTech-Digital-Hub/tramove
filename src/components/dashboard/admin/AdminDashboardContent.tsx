import React, { useState, useEffect } from 'react';
import StatsCard from '../shipper/StatsCard';
import AssignTransporterModal from './AssignTransporterModal';
import SuccessModal from './SuccessModal';
import AdjustQuoteModal from './AdjustQuoteModal';
import PendingShipmentsTable, { type PendingShipment } from '../shared/PendingShipmentsTable';

// Mock data structure
interface TransporterApplication {
  id: string;
  shipper?: string;
  cargoType?: string;
  route?: string;
  eta?: string;
  quote?: number;
  location?: string;
  name?: string;
  vehicleType?: string;
  capacity?: string;
}

// interface TransporterApplication {
//   id: string;
//   name: string;
//   vehicleType: string;
//   capacity: string;
//   location: string;
// }

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

const TRANSPORTER_APPLICATION: TransporterApplication[] = [
  {
    id: 'SH-7852',
    name: 'Adam Logistics',
    vehicleType: 'Electronics',
    capacity: '5 Tons',
    location: 'Accra to Tamale',
  },
  {
    id: 'SH-7852',
    name: 'Adam Logistics',
    vehicleType: 'Machine',
    capacity: '20 Tons',
    location: 'Accra to Tamale',
  }
];

const AdminDashboardContent: React.FC = () => {
  const [pendingShipments, setPendingShipments] = useState<PendingShipment[]>([]);
  const [transporterApplications, setTransporterApplications] = useState<TransporterApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isAdjustQuoteModalOpen, setIsAdjustQuoteModalOpen] = useState(false);
  const [selectedShipmentId, setSelectedShipmentId] = useState<string>('');
  const [selectedShipment, setSelectedShipment] = useState<PendingShipment | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Simulate API fetch
  useEffect(() => {
    const fetchPendingShipments = async () => {
      try {
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

  const fetchTransporterApplications = async () => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTransporterApplications(TRANSPORTER_APPLICATION);
    } catch (error) {
      console.error('Error fetching transporter applications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransporterApplications();
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

  const handleApproveTransporter = async (_transporterId: string, transporterName: string) => {
    // TODO: Add API call to approve transporter
    setSuccessMessage(`${transporterName}'s application has been approved successfully`);
    setShowSuccessModal(true);
  };

  const handleRejectTransporter = async (_transporterId: string, transporterName: string) => {
    // TODO: Add API call to reject transporter
    setSuccessMessage(`${transporterName}'s application has been rejected`);
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setSuccessMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 w-[400px]">Admin Dashboard</h1>
        <div className="flex gap-2 w-full justify-end items-end">
          <button 
            className="px-4 py-2 bg-gray-100 text-gray-600 border border-gray-600 rounded-full hover:bg-gray-50"
          >
            Manage Transporter
          </button>
          <button 
            className="px-4 py-2 text-white bg-gradient-to-t from-red to-deep-red rounded-full hover:bg-[#E60023]/90"
          >
            Shipment Queue
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
        textColor='text-green-700'
        icon='package'
        bgColor='bg-green-300'
          label="Pending Shipments"
          value="62"
        />
        <StatsCard
        textColor='text-deep-red'
          bgColor='bg-red/40'
          icon='check'
          label="Active Shipments"
          value="2,567"
        />
        <StatsCard
        textColor='text-blue-700'
        icon='package'
            bgColor='bg-blue-300'
          label="Pending Transporters"
          value="18"
        />
        <StatsCard
        textColor='text-yellow-700'
        icon='dollar'
          bgColor='bg-yellow-300'
          label="Total Revenue"
          value="₵24.8K"
        />
      </div>
      
      <PendingShipmentsTable
        shipments={pendingShipments}
        isLoading={isLoading}
        onAdjustQuote={handleAdjustQuote}
        onAssignTransporter={handleAssignTransporter}
        title="Pending Shipments"
        description="Shipments waiting for transporter assignment"
      />

      <div className='bg-white rounded-lg shadow p-4'>
        <div className='flex flex-col gap-2 mb-4'>
          <h1 className='font-semibold text-xl'>New Transporter Application</h1>
          <p className="text-gray-500 text-sm">Transporter waiting for approval</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border rounded-2xl">
            <thead>
              <tr className="text-sm text-gray-600 border-b">
                <div className='w-full flex items-center justify-between px-3'>
                  <th className="text-left text-sm py-3">Shipment ID</th>
                  <th className="text-left text-sm py-3">Name</th>
                  <th className="text-left text-sm py-3">Vehicle type</th>
                  <th className="text-left text-sm py-3">Capacity</th>
                  <th className="text-left text-sm py-3">Location</th>
                </div>
                <th className="text-left py-3"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">
                    Loading pending shipments...
                  </td>
                </tr>
              ) : transporterApplications.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">
                    No pending shipments found
                  </td>
                </tr>
              ) : (
                transporterApplications.map((shipment, index) => (
                  <tr key={`${shipment.id}-${index}`} className={`text-sm border rounded-lg ${index !== transporterApplications.length - 1 ? 'border-b' : ''}`}>
                    <div className='w-full flex items-center justify-between px-6'>
                      <td className="py-4">{shipment.id}</td>
                      <td className="py-4">{shipment.name}</td>
                      <td className="py-4">{shipment.vehicleType}</td>
                      <td className="py-4">{shipment.capacity}</td>
                      <td className="py-4">{shipment.location}</td>
                    </div>
                    <div className='flex gap-2 w-full justify-between items-center pl-4'>
                      <button 
                        onClick={() => handleAdjustQuote(shipment.id)}
                        className="px-2 py-2 w-32 bg-gray-100 text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50"
                      >
                        View Profile
                      </button>
                      <td className="py-4 flex gap-2 w-full justify-end items-end">
                        <button 
                          onClick={() => handleRejectTransporter(shipment.id, shipment.name ?? "")}
                          className="px-4 py-2 bg-gray-100 text-red border border-red rounded-full hover:bg-gray-50"
                        >
                          Reject
                        </button>
                        <button 
                          onClick={() => handleApproveTransporter(shipment.id, shipment.name ?? "")}
                          className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                        >
                          Approve
                        </button>
                      </td>
                    </div>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AssignTransporterModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        shipmentId={selectedShipmentId}
      />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        message={successMessage}
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
  );
};

export default AdminDashboardContent;
