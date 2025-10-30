import assets from '@/assets/assets'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ShipperLogin: React.FC = () => {
  // Navigation hook
  const navigate = useNavigate()
  
  // Form state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate authentication process
    setTimeout(() => {
      // In a real app, you would validate credentials with your backend
      console.log({ email, password })
      
      // Redirect to shipper dashboard after successful login
      setIsLoading(false)
      navigate('/dashboard/shipper')
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
          
          <h1 className="text-2xl font-bold text-center mb-1">Shipper Login</h1>
          <p className="text-gray-600 text-center mb-6">
            Access your shipper account to manage your logistics
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email Address</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            
            <div className="mb-2">
              <label className="block mb-1 font-medium">Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            
            <div className="flex justify-end mb-6">
              <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-red-600">
                Forgot password?
              </Link>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-t from-red to-deep-red text-white py-3 rounded-full font-medium hover:bg-red"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
            
            <div className="mt-4 text-center">
              Don't have an account? <Link to="/shipper-registration" className="text-red hover:underline font-medium">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShipperLogin