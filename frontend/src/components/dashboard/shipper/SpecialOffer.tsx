import React from 'react';
import { FiVolume2 } from 'react-icons/fi';

const SpecialOffer: React.FC = () => {
  return (
    <div className="bg-yellow-100 rounded-lg p-4 mb-6 flex items-center">
      <div className="bg-yellow-400 rounded-full p-2 mr-4">
        <FiVolume2 className="text-white text-xl" />
      </div>
      <div>
        <h3 className="font-bold text-lg">Special offer!</h3>
        <p>10% off for your first 10 orders! Book now to save on shipping costs.</p>
      </div>
    </div>
  );
};

export default SpecialOffer;
