import React, { useState } from 'react';
import { FiX, FiCalendar } from 'react-icons/fi';

interface CreateShipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (shipment: {
    origin: string;
    destination: string;
    transporter: string;
    shipmentType: string;
    weight: string;
    value: string;
    shipmentDate: string;
    note: string;
  }) => void;
}

const CreateShipmentModal: React.FC<CreateShipmentModalProps> = ({
  isOpen,
  onClose,
  onCreate
}) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [transporter, setTransporter] = useState('');
  const [shipmentType, setShipmentType] = useState('');
  const [weight, setWeight] = useState('');
  const [value, setValue] = useState('');
  const [shipmentDate, setShipmentDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      origin,
      destination,
      transporter,
      shipmentType,
      weight,
      value,
      shipmentDate,
      note
    });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setOrigin('');
    setDestination('');
    setTransporter('');
    setShipmentType('');
    setWeight('');
    setValue('');
    setShipmentDate('');
    setNote('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Create New Shipment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-4">
            Enter the details for the new shipment. Click save when you're done.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Accra"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Kumasi"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Transporter</label>
                <div className="relative">
                  <select
                    value={transporter}
                    onChange={(e) => setTransporter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded appearance-none"
                    required
                  >
                    <option value="" disabled>Select transporter</option>
                    <option value="Kwame Truck">Kwame Truck</option>
                    <option value="Volta Movers">Volta Movers</option>
                    <option value="Northern Express">Northern Express</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Shipment Type</label>
                <div className="relative">
                  <select
                    value={shipmentType}
                    onChange={(e) => setShipmentType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded appearance-none"
                    required
                  >
                    <option value="" disabled>Select type</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Machine">Machine</option>
                    <option value="General Goods">General Goods</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="100kg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Value (₵)</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="1,400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Shipment Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={shipmentDate}
                    onChange={(e) => setShipmentDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Pick a date"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FiCalendar className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded h-24"
                placeholder="Any special instruction or note about the shipment"
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-b from-red to-deep-red text-white rounded-full hover:bg-red-600"
              >
                Create Shipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateShipmentModal;
