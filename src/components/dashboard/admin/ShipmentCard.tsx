import React from 'react';
import { FiPackage, FiTrendingUp } from 'react-icons/fi';

interface ShipmentCardProps {
  label: string;
  value: string;
  trendValue?: string;
  trendLabel?: string;
  showMenu?: boolean;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({
  label,
  value,
  trendValue,
  trendLabel,
  showMenu = false
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
            <FiPackage className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <h3 className="text-2xl font-semibold mt-1">{value}</h3>
            {trendValue && (
              <div className="flex items-center gap-1 text-sm mt-2">
                <div className="flex items-center text-green-600">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>{trendValue}</span>
                </div>
                {trendLabel && <span className="text-gray-500">{trendLabel}</span>}
              </div>
            )}
          </div>
        </div>
        {showMenu && (
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ShipmentCard;
