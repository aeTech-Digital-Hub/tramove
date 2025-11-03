import assets from "@/assets/assets"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"



const ShipperRegistration = () => {
      // Navigation hook
      const navigate = useNavigate()
      
      // Form state
      const [currentState, setCurrentState] = useState('Sign up')
      const [shipperInfo, setShipperInfo] = useState({
        email: '',
        name: '',
        phone: '',
        companyName: '',
        address: '',
        industry: '',
        password: ''
      })

      const handlePersonalInfo = (e) => {
        setShipperInfo({...shipperInfo, [e.target.name]: e.target.value })
      }

    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault()
      }


  return (
     <div className="min-h-screen mt-20 bg-[#FFF4F6] flex justify-center items-center p-4">
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-7xl">
            {/* Left side illustration */}
            <div className="hidden md:flex justify-center items-center">
              <img 
                src={assets.deliveryTrack2} 
                alt="Shipping Illustration" 
                className="max-w-full"
              />
            </div>
            
            {/* Right side form */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 w-full max-w-md mx-auto">
              <div className="flex justify-center mb-4">
                <img src={assets.packageicon} alt="Shipper" className="w-12 h-12" />
              </div>
              
              <h1 className="text-2xl font-bold text-center mb-1">Sign Up as a Shipper</h1>
              <p className="text-gray-600 text-center mb-6">
                Book shipments, tracks cargo and manage logistics with ease
              </p>
              
              <form onSubmit={handleSubmit}>
                <div> 
                    <div className="mb-4">
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input 
                        type="name"
                        name="name"
                        value={shipperInfo.name}
                        onChange={handlePersonalInfo}
                        placeholder="Enter your Full Name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                    </div>

                    <div className="mb-4">
                    <label className="block mb-1 font-medium">Email Address</label>
                    <input 
                        type="email"
                        name="email"
                        value={shipperInfo.email}
                        onChange={handlePersonalInfo}
                        placeholder="Enter your email address"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                    </div>
                    
                    <div className="mb-2">
                    <label className="block mb-1 font-medium">Phone</label>
                    <input 
                        type="text"
                        name="phone"
                        value={shipperInfo.phone}
                        onChange={handlePersonalInfo}
                        placeholder="Enter your phone number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                    </div>
                </div>

                <div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Company Name</label>
                  <input 
                    type="text"
                    value={shipperInfo.companyName}
                    onChange={handlePersonalInfo}
                    name="companyName"
                    placeholder="Enter your company name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Address</label>
                  <input 
                    type="text"
                    value={shipperInfo.address}
                    name="address"
                    onChange={handlePersonalInfo}
                    placeholder="Enter your company address"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Industry</label>
                  <input 
                    type="text"
                    value={shipperInfo.industry}
                    name="industry"
                    onChange={handlePersonalInfo}
                    placeholder="Operational Industry"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div> 
                </div>

                 <div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Password</label>
                  <input 
                    type="text"
                    value={shipperInfo.password}
                    onChange={handlePersonalInfo}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Password</label>
                  <input 
                    type="text"
                    value={shipperInfo.password}
                    onChange={handlePersonalInfo}
                    placeholder="Confirm your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>
                </div>
                
                <div className="flex justify-end mb-6">
                  <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-red-600">
                    Forgot password?
                  </Link>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-t from-red to-deep-red text-white py-3 rounded-full font-medium hover:bg-red"
                  
                >
                  submit
                </button>
                
                <div className="mt-4 text-center">
                  Alredy hava an account? <Link to="/shipper-login" className="text-red hover:underline font-medium">Sign Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default ShipperRegistration
