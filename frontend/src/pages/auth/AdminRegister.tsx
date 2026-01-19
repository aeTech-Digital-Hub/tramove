import assets from '@/assets/assets'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminRegister: React.FC = () => {
  // Navigation hook
  const navigate = useNavigate()
  
  // Form state
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('');

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/register`, userData
      );
  
      console.log(response);
  
      if (response.status === 200 || response.status === 201) {
        // Navigate to admin login
        navigate("/auth/admin-login");
        toast('Login Successfully')
      }
  
        
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErrorMsg(err.response?.data?.message ?? "Unexpected error");
      } else if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Unknown error occurred");
      }
    }
    finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#FFF4F6] flex justify-center items-center p-4">
      <div className="grid gap-8 w-full max-w-7xl">
        {/* Left side illustration */}
        {/* <div className="hidden md:flex justify-center items-center">
          <img 
            src={assets.deliveryTrack2} 
            alt="Shipping Illustration" 
            className="max-w-full"
          />
        </div> */}
        
        {/* Right side form */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 w-full max-w-md mx-auto">
          <div className="flex justify-center mb-4">
            <img src={assets.packageicon} alt="Shipper" className="w-12 h-12" />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-1">Admin Register</h1>
          <p className="text-gray-600 text-center mb-6">
            Register to access your account
          </p>
          
          <form onSubmit={handleSubmit}>
          {errorMsg && <p className="text-red-600 text-sm mb-4">{errorMsg}</p>}

            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input 
                type="name"
                name='name'
                value={userData.name}
                onChange={changeInputHandler}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email Address</label>
              <input 
                type="email"
                name='email'
                value={userData.email}
                onChange={changeInputHandler}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Phone</label>
              <input 
                type="text"
                name='phone'
                value={userData.phone}
                onChange={changeInputHandler}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            
            <div className="mb-2">
              <label className="block mb-1 font-medium">Password</label>
              <input 
                type="password"
                name='password'
                value={userData.password}
                onChange={changeInputHandler}
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
              Don't have an account? <Link to="/auth/admin-login" className="text-red hover:underline font-medium">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminRegister