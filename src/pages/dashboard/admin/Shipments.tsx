import React from 'react'
import ShipmentCard from '@/components/dashboard/admin/ShipmentCard'

const Shipments = () => {
  return (
    <div className='space-y-6'>
      <div className="flex items-center justify-between">
        <div className='flex flex-col gap-1'>
          <h1 className="text-2xl font-bold w-[400px]">Shipments</h1>
          <p>Manage and track all shipments across Ghana.</p>
        </div>
        <div className="">
          <button 
            className="px-4 py-2 text-white bg-gradient-to-t from-red to-deep-red rounded-full hover:bg-[#E60023]/90"
          >
            New Shipment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <ShipmentCard
          label="Total Shipments"
          value="88"
          trendValue="+8%"
          trendLabel="from last month"
          showMenu
        />
        <ShipmentCard
          label="In Transit"
          value="10"
          trendValue="4"
          trendLabel="arriving today"
        />
        <ShipmentCard
          label="Assigned"
          value="10"
          trendValue="+2%"
          trendLabel="from yesterday"
        />
        <ShipmentCard
          label="Delivered"
          value="9"
          trendValue="+2%"
          trendLabel="on time from last week"
        />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Shipments