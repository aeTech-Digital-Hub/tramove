import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const StatusDistribution: React.FC = () => {
  // For a real implementation, you would use a chart library like Chart.js or Recharts
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Status Distribution</h2>
        <div className="flex items-center border rounded px-2 py-1 text-sm">
          <span className="mr-1">Month</span>
          <FiChevronDown size={16} />
        </div>
      </div>
      
      <div className="flex justify-center my-4">
        {/* This is a placeholder for the actual chart - in production use a chart library */}
        <div className="relative w-32 h-32">
          {/* Donut chart simulation - Green section (83%) */}
          <div className="absolute inset-0 rounded-full border-[10px] border-[#4ADE80]"></div>
          {/* Red section (17%) - positioned at the top right */}
          <div className="absolute inset-0 rounded-full border-[10px] border-transparent border-t-[#FF6B6B] border-r-[#FF6B6B] rotate-[60deg]"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold">83%</span>
            <span className="text-xs text-gray-500">On-Time</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-6">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#4ADE80] rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">On-Time</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#FF6B6B] rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Delayed</span>
        </div>
      </div>
    </div>
  );
};

export default StatusDistribution;
