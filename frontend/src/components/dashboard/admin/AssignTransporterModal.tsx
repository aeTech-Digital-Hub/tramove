import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FiStar } from 'react-icons/fi';
import SuccessModal from './SuccessModal';

interface AssignTransporterModalProps {
  isOpen: boolean;
  onClose: () => void;
  shipmentId: string;
}

interface TransporterOption {
  id: string;
  name: string;
  vehicleType: string;
  rating: number;
  location: string;
}

const transporterOptions: TransporterOption[] = [
  {
    id: 'TR-001',
    name: 'Kwame Mensah',
    vehicleType: 'Flatbed Truck',
    rating: 4.5,
    location: 'Accra'
  },
  {
    id: 'TR-002',
    name: 'Akosua Transport Ltd',
    vehicleType: 'Enclosed Trailer',
    rating: 4.5,
    location: 'Tema'
  },
  {
    id: 'TR-003',
    name: 'Emmanuel Logistics',
    vehicleType: 'FTow Truck',
    rating: 4.5,
    location: 'Kumasi'
  }
];

const AssignTransporterModal: React.FC<AssignTransporterModalProps> = ({
  isOpen,
  onClose,
  shipmentId
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAssign = (transporterId: string) => {
    const selectedTransporter = transporterOptions.find(t => t.id === transporterId);
    if (selectedTransporter) {
      setSuccessMessage(`${selectedTransporter.name} has been assigned to transport Shipment ${shipmentId} successfully`);
      setShowSuccess(true);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Assign Transporter to Shipment {shipmentId}</DialogTitle>
            <p className="text-sm text-gray-500">Select a transporter from the list below to assign to this shipment</p>
          </DialogHeader>

        <div className="mt-4 space-y-3">
          {transporterOptions.map((transporter) => (
            <div key={transporter.id} className="flex justify-between items-center p-3 border rounded-lg">
              <div className="space-y-1">
                <h3 className="font-medium">{transporter.name}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{transporter.vehicleType} • </span>
                  <div className="flex items-center ml-1">
                    <FiStar className="fill-current text-yellow-400 w-4 h-4" />
                    <span className="ml-1">{transporter.rating}</span>
                  </div>
                  <span className="ml-1">• {transporter.location}</span>
                </div>
              </div>
              <button
                onClick={() => handleAssign(transporter.id)}
                className="px-4 py-1 bg-gradient-to-t from-red to-deep-red rounded-full text-white hover:bg-[#E60023]/90"
              >
                Assign
              </button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>

    <SuccessModal
      isOpen={showSuccess}
      onClose={handleSuccessClose}
      message={successMessage}
    />
    </>
  );
};

export default AssignTransporterModal;
