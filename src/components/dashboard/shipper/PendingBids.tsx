import React from 'react';

interface BidProps {
  transporter: string;
  id?: string;
  rating?: number;
  logo?: string;
  bidAmount: string;
  location: string;
  vehicle: string;
}

const PendingBids: React.FC = () => {
  // Sample bid data
  const bids: BidProps[] = [
    {
      transporter: "9e-784t2",
      bidAmount: "₵1,200",
      location: "Accra → Kumasi",
      vehicle: "5-Ton Truck"
    },
    {
      transporter: "Accra Movers Ltd",
      rating: 4.3,
      bidAmount: "₵1,350",
      location: "Accra → Kumasi",
      vehicle: "7-Ton Refrigerated"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold p-4">Pending Bids</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Transporter</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Bid Amount</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Location</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Vehicle</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr key={index} className={index < bids.length - 1 ? "border-b" : ""}>
                <td className="py-4 px-4">
                  {bid.rating ? (
                    <div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3 text-white">
                          {bid.transporter.charAt(0)}
                        </div>
                        <span>{bid.transporter}</span>
                      </div>
                      <div className="ml-11 flex items-center">
                        <span className="text-xs text-yellow-500">★</span>
                        <span className="text-xs text-gray-500 ml-1">{bid.rating}</span>
                      </div>
                    </div>
                  ) : (
                    <span>{bid.transporter}</span>
                  )}
                </td>
                <td className="py-4 px-4">{bid.bidAmount}</td>
                <td className="py-4 px-4">{bid.location}</td>
                <td className="py-4 px-4">{bid.vehicle}</td>
                <td className="py-4 px-4">
                  <button className="bg-white text-red-600 border border-red-600 rounded-full px-4 py-1 text-xs hover:bg-red-50 transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingBids;
