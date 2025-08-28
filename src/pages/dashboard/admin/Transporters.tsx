import React, { useState } from 'react'
// import { FaArrowDown, FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

// Types for our data
interface Transporter {
  id: string;
  name: string;
  vehicleType: string;
  capacity: string;
  location: string;
  route?: string;
  rating?: number;
  shipments?: number;
  status?: 'Active';
  completedShipments: number;
  currentShipments: number;
  email?: string;
  phone?: string;
  contactPerson?: string;
  joinedDate?: string;
  licenseNumber?: string;
  description?: string;
}

interface TransporterApplication {
  id: string;
  name: string;
  vehicleType: string;
  capacity: string;
  location: string;
}

interface NewTransporterForm {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  route: string;
  vehicles: string;
  description: string;
}

const Transporters = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'active'>('pending');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedTransporter, setSelectedTransporter] = useState<Transporter | null>(null);
  const [formData, setFormData] = useState<NewTransporterForm>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    route: '',
    vehicles: '',
    description: ''
  });
  
  // Mock data for active transporters
  const activeTransporters: Transporter[] = [
    {
      id: 'SH-78452',
      name: 'Kwame Truck',
      vehicleType: '12',
      capacity: '2 Tons',
      location: 'Accra',
      route: 'Accra',
      rating: 4.5,
      shipments: 67,
      status: 'Active',
      completedShipments: 24,
      currentShipments: 2,
      email: 'kwametruck@gmail.com',
      phone: '+233 20 123 4567',
      contactPerson: 'Kwame Mensah',
      joinedDate: 'Jan 15, 2023',
      licenseNumber: 'LIC-12345-GH',
      description: 'Kwame Truck is a leading logistics provider in Accra with over 5 years of experience in transportation services.'
    },
    {
      id: 'SH-40135',
      name: 'Volta Movers',
      vehicleType: '3',
      capacity: '2 Tons',
      location: 'Tema',
      route: 'Kumasi',
      rating: 4.2,
      shipments: 12,
      status: 'Active',
      completedShipments: 24,
      currentShipments: 2,
      email: 'info@voltamovers.com',
      phone: '+233 30 456 7890',
      contactPerson: 'Emmanuel Addo',
      joinedDate: 'Mar 22, 2023',
      licenseNumber: 'LIC-67890-GH',
      description: 'Volta Movers specializes in medium to large cargo transportation across the country.'
    },
    {
      id: 'SH-27135',
      name: 'Northern Express',
      vehicleType: '7',
      capacity: '2 Tons',
      location: 'Accra',
      route: 'Tema',
      rating: 4.0,
      shipments: 19,
      status: 'Active',
      completedShipments: 24,
      currentShipments: 2,
      email: 'contact@northernexpress.com',
      phone: '+233 50 789 1234',
      contactPerson: 'Aisha Mohammed',
      joinedDate: 'Apr 10, 2023',
      licenseNumber: 'LIC-45678-GH',
      description: 'Northern Express provides reliable transportation services focusing on northern routes with a growing fleet.'
    }
  ];
  
  // Mock data for transporter applications
  const transporterApplications: TransporterApplication[] = [
    {
      id: 'TR-7852',
      name: 'Kwame Mensah',
      vehicleType: 'Flatbed Truck',
      capacity: '2 Tons',
      location: 'Accra',
    },
    {
      id: 'TR-7122',
      name: 'Abussa Transport Ltd',
      vehicleType: 'Flatbed Truck',
      capacity: '2 Tons',
      location: 'Kumasi',
    },
    {
      id: 'TR-5122',
      name: 'Emmanuel Logistics',
      vehicleType: 'Tow Truck',
      capacity: '1 Tons',
      location: 'Tema',
    }
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleAddTransporter = () => {
    setShowAddModal(true);
  };
  
  const handleCloseModal = () => {
    setShowAddModal(false);
  };
  
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log('Form submitted:', formData);
    
    // Close the add modal and show success modal
    setShowAddModal(false);
    setShowSuccessModal(true);
    
    // Reset form data
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      route: '',
      vehicles: '',
      description: ''
    });
  };
  
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  
  const handleViewProfile = (transporter: Transporter) => {
    setSelectedTransporter(transporter);
    setShowProfileModal(true);
  };
  
  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
    setSelectedTransporter(null);
  };

  return (
    <div className='space-y-5'>
      <div className="flex items-center justify-between">
        <div className='flex flex-col gap-1'>
          <h1 className="text-2xl font-bold w-[400px]">Transporters</h1>
          <p>Manage all registered logistics partners.</p>
        </div>
        <div className="">
          <button
            className="px-4 py-2 text-white bg-gradient-to-t from-red to-deep-red rounded-full hover:bg-[#E60023]/90"
            onClick={handleAddTransporter}
          >
            Add Transporters
          </button>
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex flex-col gap-2 items-center justify-center shadow-md rounded-md bg-white p-6'>
          <h3 className='text-lg '>Total Transporters</h3>
          <p className='text-2xl font-semibold'>12</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center shadow-md rounded-md bg-white p-6'>
          <h3 className='text-lg '>Active Transporters</h3>
          <p className='text-2xl font-semibold'>{activeTransporters.length}</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center shadow-md rounded-md bg-white p-6'>
          <h3 className='text-lg '>Pending Approval</h3>
          <p className='text-2xl font-semibold'>{transporterApplications.length}</p>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex border-b p-2">
          <button
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === 'pending'
                ? 'border-b-2 border-red text-red bg-white'
                : 'text-gray-600 bg-white'
            }`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Approval ({transporterApplications.length})
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === 'active'
                ? 'border-b-2 border-red text-red bg-white'
                : 'text-gray-600 bg-white'
            }`}
            onClick={() => setActiveTab('active')}
          >
            Active Transporters ({activeTransporters.length})
          </button>
        </div>

        {/* Active Transporters Tab */}
        {activeTab === 'active' && (
          <div className="p-4">
            <h2 className="text-lg font-medium mb-1">Active Transporters</h2>
            <p className="text-sm text-gray-500 mb-4">Currently active transportation partners</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {activeTransporters.map((transporter, index) => (
                    <React.Fragment key={`${transporter.id}-${index}`}>
                      <tr className="border-t border-b">
                        <td colSpan={7} className="p-4">
                          <div className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-5 gap-4">
                              <div>
                                <p className="text-gray-500 text-sm">Shipment ID</p>
                                <p>{transporter.id}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Name</p>
                                <p>{transporter.name}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Vehicle type</p>
                                <p>{transporter.vehicleType}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Capacity</p>
                                <p>{transporter.capacity}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Location</p>
                                <p>{transporter.location}</p>
                              </div>
                            </div>
                            
                            <div className="flex space-x-8">
                              <div>
                                <p className="text-gray-500 text-sm">Completed Shipments</p>
                                <p className="font-medium">{transporter.completedShipments}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Current Shipments</p>
                                <p className="font-medium">{transporter.currentShipments}</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">Status</p>
                                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs">
                                  {transporter.status}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex gap-2 justify-between mt-4">
                              <button 
                                className="px-4 py-2 border border-gray-300 rounded-full text-xs hover:bg-gray-50 whitespace-nowrap"
                                onClick={() => handleViewProfile(transporter)}
                              >
                                View Profile
                              </button>
                              <div className='flex gap-2'>
                                <button className="px-4 py-2 border border-red text-red rounded-full text-xs hover:bg-gray-50 whitespace-nowrap">
                                  Suspend
                                </button>
                                <button className="px-4 py-2 bg-green-500 text-white rounded-full text-xs hover:bg-green-600 whitespace-nowrap">
                                  View Shipment
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pending Approval Tab */}
        {activeTab === 'pending' && (
          <div className="p-4">
            <h2 className="text-lg font-medium mb-1">New Transporter Applications</h2>
            <p className="text-sm text-gray-500 mb-4">Review and approve new transporter applications</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600 border-b text-sm">
                    <th className="py-3 px-4 font-medium">Shipment ID</th>
                    <th className="py-3 px-4 font-medium">Name</th>
                    <th className="py-3 px-4 font-medium">Vehicle type</th>
                    <th className="py-3 px-4 font-medium">Capacity</th>
                    <th className="py-3 px-4 font-medium">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {transporterApplications.map((application, index) => (
                    <React.Fragment key={`${application.id}-${index}`}>
                      <tr className="text-sm">
                        <td className="py-4 px-4">{application.id}</td>
                        <td className="py-4 px-4">{application.name}</td>
                        <td className="py-4 px-4">{application.vehicleType}</td>
                        <td className="py-4 px-4">{application.capacity}</td>
                        <td className="py-4 px-4">{application.location}</td>
                      </tr>
                      <tr className="border-b">
                        <td colSpan={5} className="py-2 px-4">
                          <div className="flex gap-2 justify-between mt-2">
                            <button 
                              className="px-4 py-2 border border-gray-300 rounded-full text-xs hover:bg-gray-50 whitespace-nowrap"
                              onClick={() => handleViewProfile({...application, completedShipments: 0, currentShipments: 0})}
                            >
                              View Profile
                            </button>
                            <div className='flex gap-2'>
                              <button className="px-4 py-2 border border-red text-red rounded-full text-xs hover:bg-gray-50 whitespace-nowrap">
                                Reject
                              </button>
                              <button className="px-4 py-2 bg-green-500 text-white rounded-full text-xs hover:bg-green-600 whitespace-nowrap">
                                Approve
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Registered Transporters */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-semibold">Registered Transporters</h2>
            <button 
              className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50"
              >
                <FiDownload className="h-4 w-4" />
                Export
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-4">A list of all transport partners in the TARMOVE network.</p>
          
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
                {activeTransporters.map((transporter, index) => (
                  <tr key={`reg-${transporter.id}-${index}`} className="border-t text-sm">
                    <td className="py-4 px-4">{transporter.id}</td>
                    <td className="py-4 px-4">{transporter.name}</td>
                    <td className="py-4 px-4">{transporter.route}</td>
                    <td className="py-4 px-4">{transporter.vehicleType}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {transporter.rating}
                      </div>
                    </td>
                    <td className="py-4 px-4">{transporter.shipments}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-gray-400 hover:text-gray-600">⋮</button>
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
      
      {/* Add New Transporter Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-xl font-bold">Add New Transporter</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                <IoMdClose size={24} />
              </button>
            </div>
            
            <div className="p-5">
              <p className="text-gray-600 mb-4">Enter the details for the new transport partner. Click save when you're done.</p>
              
              <form onSubmit={handleSubmitForm}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Kwame Truck"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Contact Person</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Kwame Mensha"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="kwametruck@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="+233904568889"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Route</label>
                    <input
                      type="text"
                      name="route"
                      value={formData.route}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Accra"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Number of Vehicles</label>
                    <input
                      type="number"
                      name="vehicles"
                      value={formData.vehicles}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="2"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Company Description (optional)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Provide a brief description of the transport company"
                    rows={4}
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 border rounded-full bg-gray-100 text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-t from-red to-deep-red text-white rounded-full"
                  >
                    Add Transporter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Success!</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseSuccessModal}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            <p className="my-4 text-gray-600">
              {formData.contactPerson} has been added as a transporter in Tarmove successfully!
            </p>
            <div className="mt-6 flex justify-start">
              <button
                onClick={handleCloseSuccessModal}
                className="px-8 py-2 bg-gradient-to-t from-red to-deep-red text-white rounded-full"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transporter Profile Modal */}
      {showProfileModal && selectedTransporter && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Transporter Profile</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseProfileModal}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            
            <div className="p-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">ID</p>
                  <p className="font-medium">{selectedTransporter.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Status</p>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Pending
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{selectedTransporter.contactPerson || selectedTransporter.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium">{selectedTransporter.phone || "+233 50 123 4567"}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{selectedTransporter.email || "kwame.mensah@example.com"}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{selectedTransporter.location}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Vehicle Type</p>
                  <p className="font-medium">{selectedTransporter.vehicleType}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-medium">{selectedTransporter.capacity}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">Join Date</p>
                  <p className="font-medium">{selectedTransporter.joinedDate || "2023-05-15"}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-medium">{selectedTransporter.capacity}</p>
                </div>
              </div>
              
              <div className="mt-6 border-t pt-4">
                <p className="text-sm text-gray-500">Document</p>
                <div className="flex justify-between items-center mt-2 p-3 border rounded-md">
                  <p className="font-medium">Driver's License</p>
                  <span className="px-3 py-1 bg-green-500 text-white rounded-md text-xs">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Transporters