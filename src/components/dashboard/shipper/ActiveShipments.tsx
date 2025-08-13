import React from 'react';
import { FiPlus } from 'react-icons/fi';

interface ShipmentProps {
  id: string;
  origin: string;
  destination: string;
  status: 'Pending Assignment' | 'In Transit' | 'Cancelled';
}

const ActiveShipments: React.FC = () => {
  // Sample shipment data based on the image
  const shipments: ShipmentProps[] = [
    { id: '123456', origin: 'Accra', destination: 'Kumasi', status: 'Pending Assignment' },
    { id: '123456', origin: 'Tema', destination: 'Cape Coast', status: 'In Transit' },
    { id: '123456', origin: 'Accra', destination: 'Tamale', status: 'Cancelled' }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'Pending Assignment':
        return {
          borderColor: '#FBBF24',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          displayText: 'Pending Assignment'
        };
      case 'In Transit':
        return {
          borderColor: '#60A5FA',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
          displayText: 'In Transit'
        };
      case 'Cancelled':
        return {
          borderColor: '#F87171',
          bgColor: 'bg-red',
          textColor: 'text-white',
          displayText: 'Cancelled'
        };
      default:
        return {
          borderColor: '#D1D5DB',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          displayText: status
        };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Active Shipments</h2>
        <button className="bg-red text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
          <FiPlus size={20} />
        </button>
      </div>
      
      <div className="space-y-3">
        {shipments.map((shipment, index) => {
          const { borderColor, displayText, bgColor, textColor } = getStatusInfo(shipment.status);
          return (
            <div 
              key={index} 
              className="border rounded-md overflow-hidden mb-3 shadow-sm flex justify-between items-center pr-5"
              style={{ borderLeftWidth: '4px', borderLeftColor: borderColor }}
            >
              <div className="p-3">
                <p className="font-medium text-sm">Shipment #{shipment.id}</p>
                <p className="text-gray-500 text-xs my-1">{shipment.origin} → {shipment.destination}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                  <span className={`text-xs px-3 py-1 rounded-full ${bgColor} ${textColor}`}>
                    {displayText}
                  </span>
                </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-3">
        <button className="text-red text-xs flex items-center text-center">
          See all
        </button>
      </div>
    </div>
  );
};

export default ActiveShipments;
