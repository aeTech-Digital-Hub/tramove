import assets from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted : React.FC = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="container mx-auto flex flex-col items-center gap-4 mb-10  bg-[#FFF4F6] py-20">
        <div className='border rounded-full py-1 px-4 border-red text-sm text-red'>Welcome</div>
        <h1 className='text-3xl md:text-5xl font-semibold'>Join TARMOVE Today!</h1>
        <p className='text-lg md:text-xl text-center'>Register as a Shipper or Transporter to get started.</p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
        {/* Shipper Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full max-w-xs flex flex-col items-center py-8 px-6">
          <div className="mb-4">
            <img src={assets.packageicon} alt="Shipper" className="w-14 h-14 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Shipper</h2>
          <p className="font-semibold mb-1">"I need to ship goods."</p>
          <p className="text-center text-gray-600 mb-6">Book shipments, track cargo,<br/>and manage logistics.</p>
          <Link to='/shipper-registration'>
            <button className="w-full border-2 border-red text-red rounded-full py-2 font-semibold hover:bg-red-50 transition px-6">Register as Shipper</button>
          </Link>
        </div>
        {/* Transporter Card */}
        {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full max-w-xs flex flex-col items-center py-8 px-6">
          <div className="mb-4">
            <img src={assets.deliveryTrack} alt="Transporter" className="w-14 h-14 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Transporter</h2>
          <p className="font-semibold mb-1 text-center">"I provide transportation services."</p>
          <p className="text-center text-gray-600 mb-6">Join our network of trusted transporters</p>
          <Link to='/transporter-registration'>
            <button className="w-full border-2 border-red text-red rounded-full py-2 px-6 font-semibold hover:bg-red-50 transition">Register as Transporter</button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default GetStarted