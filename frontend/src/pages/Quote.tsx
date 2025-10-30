import assets from '@/assets/assets'
import React, { useState } from 'react'


const Quote : React.FC = () => {
  // Form state
  const [typeOfGoods, setTypeOfGoods] = useState('')
  const [weight, setWeight] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [showQuote, setShowQuote] = useState(false)
  const [quote, setQuote] = useState({
    total: 0,
    transport: 0,
    fee: 0
  })

  // Simple calculation logic
  const calculateQuote = (e: React.FormEvent) => {
    e.preventDefault()
    // Example: base transport fee = weight * 10, fee = 15%
    const w = Number(weight) || 0
    const transport = w * 10
    const fee = Math.round(transport * 0.15)
    const total = transport + fee
    setQuote({ total, transport, fee })
    setShowQuote(true)
  }

  return (
    <div className="min-h-screen  mt-20">
      <div className='grid grid-cols-1 container mx-auto bg-[#FFF4F6] md:grid-cols-2 gap-4 md:gap-16 mb-8 py-5'>
        <div className='flex flex-col justify-center gap-4'>
          <div className='border px-4 py-2 rounded-full w-fit text-red/70 border-red/70 text-sm'>Shipping Made Simple</div>
          <h1 className='text-3xl md:text-6xl font-bold'>Get a <span className='text-red'>Quote</span> in Minutes</h1>
          <p className='md:text-xl'>Calculate your shipping cost in seconds with our instant quote calculator. No hidden fees, just transparent pricing.</p>
        </div>
        <img src={assets.quote} alt="Quote Illustration" />
      </div>

      {/* Quote Form UI */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl border border-gray-300 shadow-sm p-8 mb-8">
        <form onSubmit={calculateQuote}>
          <h2 className="text-xl font-semibold mb-6">Cargo Details</h2>
          <div className="mb-6">
            <label className="block font-medium mb-2">Type of Goods</label>
            <select value={typeOfGoods} onChange={e => setTypeOfGoods(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200">
              <option value="">Select types of goods</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
              <option>Other</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-2">Weight (kg)</label>
              <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Enter weight" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
            </div>
            <div>
              <label className="block font-medium mb-2">Dimensions (LxWxH in cm)</label>
              <input type="text" value={dimensions} onChange={e => setDimensions(e.target.value)} placeholder="Weight (kg)" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-2">Origin</label>
              <input type="text" value={origin} onChange={e => setOrigin(e.target.value)} placeholder="City, Country" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
            </div>
            <div>
              <label className="block font-medium mb-2">Destination</label>
              <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Weight (kg)" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-6 mt-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
            </div>
            <div>
              <label className="block font-medium mb-2">Phone</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
            </div>
          </div>
          <div className="mb-8">
            <label className="block font-medium mb-2">Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200" />
          </div>
          <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-red to-deep-red text-white font-semibold text-base shadow-md hover:from-red hover:to-deep-red transition-all">Calculate Quote</button>
        </form>
        {/* Estimated Quote Card UI - only show after calculation */}
        {showQuote && (
          <div className="mt-8">
            <div className="bg-green-50 rounded-xl shadow-sm p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Your Estimated Quote</h3>
                  <div className="text-gray-700 mb-2">{origin || 'Origin'} to {destination || 'Destination'} <span className="mx-1">•</span> {typeOfGoods || 'Type'}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">GHS {quote.total.toLocaleString()}</div>
                  <div className="flex justify-between text-gray-700 text-sm mb-1">
                    <span>Transport fee:</span>
                    <span className="font-medium">GHS {quote.transport.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm mb-4">
                    <span>Tramove fee (15%):</span>
                    <span className="font-medium">GHS {quote.fee.toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-red-500 text-2xl">
                  {/* Truck icon placeholder, replace with SVG if available */}
                  <span role="img" aria-label="truck">🚚</span>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-2">
                This is an estimate based on standard rates. Final price may vary based on specific vehicle details and route conditions. After booking, our admin team will match you with the perfect transporter within 24-48 hours.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quote