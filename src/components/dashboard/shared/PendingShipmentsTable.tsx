import React from 'react';

// Define shipment type
export interface PendingShipment {
  id: string;
  shipper: string;
  cargoType: string;
  route: string;
  eta: string;
  quote: number;
  status?: string;
}

interface PendingShipmentsTableProps {
  shipments: PendingShipment[];
  isLoading: boolean;
  onAdjustQuote?: (shipmentId: string) => void;
  onAssignTransporter?: (shipmentId: string) => void;
  onViewDetails?: (shipmentId: string) => void;
  onTrack?: (shipmentId: string) => void;
  showActions?: boolean;
  title?: string;
  description?: string;
  customActions?: {
    label: string;
    onClick: (shipmentId: string) => void;
    className?: string;
  }[];
}

const PendingShipmentsTable: React.FC<PendingShipmentsTableProps> = ({
  shipments,
  isLoading,
  onAdjustQuote,
  onAssignTransporter,
  onViewDetails,
  onTrack,
  showActions = true,
  title = "Pending Shipments",
  description = "Shipments waiting for transporter assignment",
  customActions = []
}) => {
  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <div className='flex flex-col gap-2 mb-4'>
        <h1 className='font-semibold text-xl'>{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border rounded-2xl">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <div className='w-full flex text-gray-500 items-center justify-between px-3'>
                <th className="text-left text-sm py-3">Shipment ID</th>
                <th className="text-left text-sm py-3">Shipper</th>
                <th className="text-left text-sm py-3">Cargo type</th>
                <th className="text-left text-sm py-3">Route</th>
                <th className="text-left text-sm py-3">ETA</th>
                <th className="text-left text-sm py-3">Quote</th>
              </div>
              {showActions && <th className="text-left py-3"></th>}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  Loading pending shipments...
                </td>
              </tr>
            ) : shipments.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  No pending shipments found
                </td>
              </tr>
            ) : (
              shipments.map((shipment, index) => (
                <tr key={`${shipment.id}-${index}`} className={`text-sm border rounded-lg ${index !== shipments.length - 1 ? 'border-b' : ''}`}>
                  <div className='w-full flex items-center justify-between px-6 font-semibold'>
                    <td className="py-4">{shipment.id}</td>
                    <td className="py-4">{shipment.shipper}</td>
                    <td className="py-4">{shipment.cargoType}</td>
                    <td className="py-4">{shipment.route}</td>
                    <td className="py-4">{shipment.eta}</td>
                    <td className="py-4">₵ {shipment.quote.toLocaleString()}</td>
                  </div>
                  {showActions && (
                    <td className="py-4 flex gap-2 w-full justify-end items-end">
                      {onAdjustQuote && (
                        <button 
                          onClick={() => onAdjustQuote(shipment.id)}
                          className="px-4 py-2 bg-gray-100 text-gray-600 border border-gray-600 rounded-full hover:bg-gray-50"
                        >
                          Adjust Quote
                        </button>
                      )}
                      {onAssignTransporter && (
                        <button 
                          onClick={() => onAssignTransporter(shipment.id)}
                          className="px-4 py-2 text-white bg-gradient-to-t from-red to-deep-red rounded-full hover:bg-[#E60023]/90"
                        >
                          Assign Transporter
                        </button>
                      )}
                      {onViewDetails && (
                        <button 
                          onClick={() => onViewDetails(shipment.id)}
                          className="px-4 py-2 bg-gray-100 text-gray-600 border border-gray-600 rounded-full hover:bg-gray-50"
                        >
                          View Details
                        </button>
                      )}
                      {onTrack && (
                        <button 
                          onClick={() => onTrack(shipment.id)}
                          className="px-4 py-2 bg-blue-100 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50"
                        >
                          Track
                        </button>
                      )}
                      {customActions && customActions.map((action, i) => (
                        <button 
                          key={i}
                          onClick={() => action.onClick(shipment.id)}
                          className={action.className || "px-4 py-2 bg-gray-100 text-gray-600 border border-gray-600 rounded-full hover:bg-gray-50"}
                        >
                          {action.label}
                        </button>
                      ))}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export type { PendingShipment };
export default PendingShipmentsTable;
