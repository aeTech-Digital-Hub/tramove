import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'

// Define shipper interface
interface Shipper {
  id: string;
  name: string;
  route: string;
  vehicleType: string;
  rating: number;
  shipments: number;
  status: 'active' | 'inactive';
}

interface NewShipperForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  route: string;
  vehicleType: string;
}

const Shippers = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedShipper, _setSelectedShipper] = useState<Shipper | null>(null);
  const [newShipperForm, setNewShipperForm] = useState<NewShipperForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    route: '',
    vehicleType: ''
  });
  
  // const handleViewProfile = (shipper: Shipper) => {
  //   setSelectedShipper(shipper);
  //   setIsProfileModalOpen(true);
  // };
  
  // Sample data for activeShippers
  const [activeShippers] = useState<Shipper[]>([
    {
      id: "SH001",
      name: "John Doe",
      route: "Lagos - Abuja",
      vehicleType: "Truck",
      rating: 4.8,
      shipments: 24,
      status: "active"
    },
    {
      id: "SH002",
      name: "Jane Smith",
      route: "Ibadan - Kano",
      vehicleType: "Van",
      rating: 4.5,
      shipments: 18,
      status: "active"
    },
    {
      id: "SH003",
      name: "Robert Johnson",
      route: "Port Harcourt - Kaduna",
      vehicleType: "Truck",
      rating: 4.9,
      shipments: 32,
      status: "active"
    }
  ]);

  return (
    <div className='space-y-5'>
      <div className="flex items-center justify-between">
        <div className='flex flex-col gap-1'>
          <h1 className="text-2xl font-bold w-[400px]">Shippers</h1>
          <p>Manage registered shippers and their details.</p>
        </div>
        <div className="">
          <button
            className="px-4 py-2 text-white bg-gradient-to-t from-red to-deep-red rounded-full hover:bg-[#E60023]/90"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add Shippers
          </button>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 w-full'>
        <div className='bg-white rounded-lg shadow-sm p-6 w-60 flex flex-col gap-2 items-center'>
          <h3 className='text-sm font-semibold'>Total Shippers</h3>
          <p className='text-2xl font-bold'>8</p>
          <p className='text-sm text-gray-500'>+8 this quarter</p>
        </div>
        <div className='bg-white rounded-lg shadow-sm p-6 w-60 flex flex-col gap-2 items-center'>
          <h3 className='text-sm font-semibold'>Total Shippers</h3>
          <p className='text-2xl font-bold'>8</p>
          <p className='text-sm text-gray-500'>+8 this quarter</p>
        </div>
        <div className='bg-white rounded-lg shadow-sm p-6 w-60 flex flex-col gap-2 items-center'>
          <h3 className='text-sm font-semibold'>Total Shippers</h3>
          <p className='text-2xl font-bold'>8</p>
          <p className='text-sm text-gray-500'>+8 this quarter</p>
        </div>
        <div className='bg-white rounded-lg shadow-sm p-6 w-60 flex flex-col gap-2 items-center'>
          <h3 className='text-sm font-semibold'>Total Shippers</h3>
          <p className='text-2xl font-bold'>8</p>
          <p className='text-sm text-gray-500'>+8 this quarter</p>
        </div>
      </div>

      {/* Registered shippers */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-semibold">Registered Shippers</h2>
            <button 
              className="flex items-center gap-2 px-4 py-2 border border-red text-red rounded-full hover:bg-red-50"
              >
                <FiDownload className="h-4 w-4" />
                Export
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-4">View and manage all shippers in the system</p>
          
          <div className="flex justify-start gap-8 mb-4">
            <div className="flex items-center flex-col gap-2">
              <p className="text-sm">Filter by Status</p>
              <div className="relative">
                <select className="border rounded-md py-2 px-3 pr-8 text-sm appearance-none">
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
            <div className="relative flex flex-col gap-1">
              <p>Name</p>
              <input 
                type="text"
                placeholder="Enter name"
                className="border rounded-md py-2 px-3 text-sm"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-600 text-sm">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Route</th>
                  <th className="py-3 px-4">Vehicle</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4">Shipment</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {activeShippers.map((shipper, index) => (
                  <tr key={`reg-${shipper.id}-${index}`} className="border-t text-sm">
                    <td className="py-4 px-4">{shipper.id}</td>
                    <td className="py-4 px-4">{shipper.name}</td>
                    <td className="py-4 px-4">{shipper.route}</td>
                    <td className="py-4 px-4">{shipper.vehicleType}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {shipper.rating}
                      </div>
                    </td>
                    <td className="py-4 px-4">{shipper.shipments}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 ${
                        shipper.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      } rounded-full text-xs`}>
                        {shipper.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2 ml-6">
                        <button className="text-gray-400 hover:text-gray-600">⋮</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-end gap-2 mt-4">
            <div className="flex items-center">
              <button className="px-3 py-1 border rounded-md flex items-center text-sm">
                Previous
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center bg-red text-white rounded-md">1</button>
              <button className="w-8 h-8 flex items-center justify-center border rounded-md">2</button>
              <button className="w-8 h-8 flex items-center justify-center border rounded-md">3</button>
            </div>
            <div className="flex items-center">
              <button className="px-3 py-1 bg-gradient-to-b from-red to-deep-red text-white rounded-md flex items-center text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Shipper Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Add New Shipper</h2>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            
            <div className="p-4">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newShipperForm.name}
                    onChange={(e) => setNewShipperForm({...newShipperForm, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newShipperForm.email}
                    onChange={(e) => setNewShipperForm({...newShipperForm, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newShipperForm.phone}
                    onChange={(e) => setNewShipperForm({...newShipperForm, phone: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newShipperForm.company}
                    onChange={(e) => setNewShipperForm({...newShipperForm, company: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Route</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newShipperForm.route}
                    onChange={(e) => setNewShipperForm({...newShipperForm, route: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={newShipperForm.vehicleType}
                    onChange={(e) => setNewShipperForm({...newShipperForm, vehicleType: e.target.value})}
                  >
                    <option value="">Select vehicle type</option>
                    <option value="truck">Truck</option>
                    <option value="van">Van</option>
                    <option value="bike">Bike</option>
                  </select>
                </div>
              </form>
            </div>
            
            <div className="flex justify-end p-4 border-t gap-2">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setIsAddModalOpen(false);
                  setIsSuccessModalOpen(true);
                }}
                className="px-4 py-2 bg-gradient-to-b from-red to-deep-red text-white rounded-md hover:opacity-90"
              >
                Add Shipper
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Shipper Added Successfully</h2>
              <p className="text-gray-600 mb-6">The new shipper has been added to your system.</p>
              <button 
                onClick={() => setIsSuccessModalOpen(false)}
                className="px-4 py-2 bg-gradient-to-b from-red to-deep-red text-white rounded-md hover:opacity-90 w-full"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && selectedShipper && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Shipper Profile</h2>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-semibold text-gray-600">
                    {selectedShipper.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{selectedShipper.name}</h3>
                  <div className="flex items-center">
                    <span className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>{selectedShipper.rating}</span>
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">{selectedShipper.shipments} shipments</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-b py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">ID</p>
                    <p className="font-medium">{selectedShipper.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`px-2 py-1 ${
                      selectedShipper.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    } rounded-full text-xs`}>
                      {selectedShipper.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Vehicle Type</p>
                    <p className="font-medium">{selectedShipper.vehicleType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Preferred Route</p>
                    <p className="font-medium">{selectedShipper.route}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="w-20 text-gray-500">Email:</span>
                    <span>shipper@example.com</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 text-gray-500">Phone:</span>
                    <span>+234 812 345 6789</span>
                  </div>
                  <div className="flex">
                    <span className="w-20 text-gray-500">Company:</span>
                    <span>Logistics Ltd.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end p-4 border-t">
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="px-4 py-2 bg-gradient-to-b from-red to-deep-red text-white rounded-md hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shippers