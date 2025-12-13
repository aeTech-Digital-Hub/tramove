import React from 'react';
import { FiPackage, FiCheck, FiClock, FiDollarSign } from 'react-icons/fi';

interface StatsCardProps {
  icon: 'package' | 'check' | 'clock' | 'dollar';
  value: number | string;
  label: string;
  bgColor: string;
  textColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label, bgColor, textColor }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'package':
        return <FiPackage className="w-6 h-6" />;
      case 'check':
        return <FiCheck className="w-6 h-6" />;
      case 'clock':
        return <FiClock className="w-6 h-6" />;
      case 'dollar':
        return <FiDollarSign className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 py-6 flex flex-col items-center">
      <div className={`${bgColor} ${textColor} p-3 rounded-full mb-3`}>
        {renderIcon()}
      </div>
      <h3 className="text-xl font-bold">{value}</h3>
      <p className="text-gray-500 text-sm text-center">{label}</p>
    </div>
  );
};

export default StatsCard;
