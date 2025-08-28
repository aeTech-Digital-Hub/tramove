import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import type { PendingShipment } from '@/components/dashboard/shared/PendingShipmentsTable';

interface AdjustQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveQuote: (newQuote: number) => void;
  shipment: PendingShipment;
}

const AdjustQuoteModal: React.FC<AdjustQuoteModalProps> = ({
  isOpen,
  onClose,
  onSaveQuote,
  shipment
}) => {
  const shipmentId = shipment.id;
  const currentQuote = shipment.quote;
  
  // Calculate the base quote (approx 93% of total)
  const initialBaseQuote = Math.round(currentQuote * 0.93);
  // Service fee is the difference
  const initialServiceFee = currentQuote - initialBaseQuote;

  const [baseQuote, setBaseQuote] = useState(initialBaseQuote);
  const [serviceFee, setServiceFee] = useState(initialServiceFee);
  const [finalQuote, setFinalQuote] = useState(currentQuote);
  const [isEditing, setIsEditing] = useState(false);
  const [view, setView] = useState<'edit' | 'success'>('edit');

  // Reset the form when opening
  useEffect(() => {
    if (isOpen) {
      setBaseQuote(initialBaseQuote);
      setServiceFee(initialServiceFee);
      setFinalQuote(currentQuote);
      setIsEditing(false);
      setView('edit');
    }
  }, [isOpen, currentQuote, initialBaseQuote, initialServiceFee]);

  const handleBaseQuoteChange = (value: string) => {
    const numValue = parseInt(value.replace(/,/g, '')) || 0;
    setBaseQuote(numValue);
    setFinalQuote(numValue + serviceFee);
  };

  const handleServiceFeeChange = (value: string) => {
    const numValue = parseInt(value.replace(/,/g, '')) || 0;
    setServiceFee(numValue);
    setFinalQuote(baseQuote + numValue);
  };

  const handleAdjustClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSaveQuote(finalQuote);
    setIsEditing(false);
    // Instead of using showSuccess, switch to success view
    setView('success');
  };

  const handleCancelClick = () => {
    // Reset to original values
    setBaseQuote(initialBaseQuote);
    setServiceFee(initialServiceFee);
    setFinalQuote(currentQuote);
    setIsEditing(false);
  };

  const handleSuccessClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  // Show success notification if needed
  if (view === 'success') {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-xs p-4 relative">
          <div className="flex justify-end">
            <button 
              onClick={handleSuccessClose} 
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={16} />
            </button>
          </div>
          
          <h3 className="text-base font-semibold mb-1">Quote Updated</h3>
          <p className="text-sm text-gray-600 mb-3">
            {shipmentId} has been updated successfully to ₵{finalQuote.toLocaleString()}
          </p>
          
          <button
            onClick={handleSuccessClose}
            className="w-full px-4 py-2 bg-gradient-to-b from-red to-deep-red text-white rounded-full hover:bg-red-600 text-sm"
          >
            OK
          </button>
        </div>
      </div>
    );
  }

  // Show the quote adjustment modal
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Shipment Quote</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-6">
            Current pricing and adjustment options
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Base Quote</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  GH₵
                </span>
                <input
                  type="text"
                  value={baseQuote.toLocaleString()}
                  onChange={(e) => handleBaseQuoteChange(e.target.value)}
                  className="w-full pl-12 p-2 border border-gray-300 rounded"
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Fee (7%)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  GH₵
                </span>
                <input
                  type="text"
                  value={serviceFee.toLocaleString()}
                  onChange={(e) => handleServiceFeeChange(e.target.value)}
                  className="w-full pl-12 p-2 border border-gray-300 rounded"
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Final Quote</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  GH₵
                </span>
                <input
                  type="text"
                  value={finalQuote.toLocaleString()}
                  className="w-full pl-12 p-2 border border-gray-300 rounded font-semibold"
                  disabled
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancelClick}
                  className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveClick}
                  className="px-4 py-2 bg-gradient-to-b from-red to-deep-red text-white rounded-full hover:bg-red-600"
                >
                  Save Quote
                </button>
              </>
            ) : (
              <button
                onClick={handleAdjustClick}
                className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
              >
                Adjust Quote
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustQuoteModal;
