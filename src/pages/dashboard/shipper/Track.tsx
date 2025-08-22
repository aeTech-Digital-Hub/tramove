import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FiSearch } from 'react-icons/fi';

// Importing map image as placeholder
import mapImage from '@/assets/Map.png';

const TrackPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Card className="flex-1 p-6">
          <h2 className="text-lg font-semibold mb-4">Track Shipment</h2>
          <div className="flex gap-2">
            <Input 
              placeholder="Enter tracking number" 
              className="flex-1"
            />
            <Button className="flex items-center gap-2">
              <FiSearch />
              Track
            </Button>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="aspect-video relative">
          <img 
            src={mapImage} 
            alt="Map View" 
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Add map markers or shipment route visualization here */}
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="font-semibold">Shipment Status</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Package Picked Up</p>
                <p className="text-sm text-gray-500">Accra Central Depot</p>
                <p className="text-sm text-gray-500">August 15, 2025 - 09:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">In Transit</p>
                <p className="text-sm text-gray-500">On route to Kumasi</p>
                <p className="text-sm text-gray-500">August 15, 2025 - 11:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Expected Delivery</p>
                <p className="text-sm text-gray-500">Kumasi Main Hub</p>
                <p className="text-sm text-gray-500">August 15, 2025 - 04:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TrackPage;
