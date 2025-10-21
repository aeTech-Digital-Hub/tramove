import assets from "@/assets/assets"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"



const ShipperRegistration: React.FC = () => {
      // Navigation hook
      const navigate = useNavigate()
      
      // Form state

      
      const [personalInfo, setPersonalInfo] = useState({
        email: '',
        name: '',
        phone: ''
      })

      const [compayInfo, setCompanyInfo] = useState({
        companyName: '',
        address: '',
        industry: ''
      })
      const [password, setPassword] = useState('')

      const handlePersonalInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setPersonalInfo({...personalInfo, [e.target.name]: e.target.value })
      }

      const handleCompanyInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setCompanyInfo({...compayInfo, [e.target.name]: e.target.value})
      }
    
      // Handle form submission
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPersonalInfo(personalInfo)
        setCompanyInfo(compayInfo)
        
        // Simulate authentication process
        setTimeout(() => {
          // In a real app, you would validate credentials with your backend
          console.log(personalInfo, compayInfo)
          
          // Redirect to shipper dashboard after successful login
          if(personalInfo){
            setCompanyInfo(compayInfo)
          } else if(compayInfo){
            navigate('/dashboard/shipper')
          }
        }, 1000)
      }


  return (

     <div className="min-h-screen bg-[#FFF4F6] flex justify-center items-center p-4">
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

                {personalInfo ? <div> 

                <h3 className="font-semibold text-2xl pb-4">Personal Information</h3>
                    <div className="mb-4">
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input 
                        type="name"
                        name="name"
                        value={personalInfo.name}
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
                        value={personalInfo.email}
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
                        value={personalInfo.phone}
                        onChange={handlePersonalInfo}
                        placeholder="Enter your phone number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                    </div>
                </div>
                : 
                <div>
                    <h3 className="font-semibold text-2xl pb-4">Company Information</h3>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Company Name</label>
                  <input 
                    type="text"
                    value={compayInfo.companyName}
                    onChange={handleCompanyInfo}
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
                    value={compayInfo.address}
                    name="address"
                    onChange={handleCompanyInfo}
                    placeholder="Enter your company address"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Industry</label>
                  <input 
                    type="text"
                    value={compayInfo.industry}
                    name="industry"
                    onChange={handleCompanyInfo}
                    placeholder="Operational Industry"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div> 
                </div>
}
                {password && <div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Password</label>
                  <input 
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-1 font-medium">Password</label>
                  <input 
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>
                </div>
                }
                
                {/* <div className="flex justify-end mb-6">
                  <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-red-600">
                    Forgot password?
                  </Link>
                </div> */}
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-t from-red to-deep-red text-white py-3 rounded-full font-medium hover:bg-red"
                  
                >
                  {personalInfo?'next': "next"}
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