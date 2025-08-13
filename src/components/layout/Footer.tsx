import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='container mx-auto pt-10 pb-5 overflow-x-hidden'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
            <div className='flex flex-col gap-4'>
                <img src={logo} alt="logo" className='w-32' />
                <p className='text-gray-600 max-w-xs'>Your Partner in Seamless Logistics Across Ghana with Innovative Solutions</p>
            </div>
            <div>
                <h3 className='font-bold text-lg mb-4 text-red'>Quick Links</h3>
                <ul className='space-y-2'>
                    <li><Link to="/" className='text-gray-600 hover:text-red-600 transition-colors'>Home</Link></li>
                    <li><Link to="/services" className='text-gray-600 hover:text-red-600 transition-colors'>Services</Link></li>
                    <li><Link to="/about" className='text-gray-600 hover:text-red-600 transition-colors'>About</Link></li>
                    <li><Link to="/contact" className='text-gray-600 hover:text-red-600 transition-colors'>Contact</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-lg mb-4 text-red'>Contact Us</h3>
                <ul className='space-y-2'>
                    <li className='text-gray-600 flex items-center gap-2'>
                        <FaMapMarkerAlt className="text-red" />
                        Accra, Ghana
                    </li>
                    <li className='text-gray-600 flex items-center gap-2'>
                        <FaPhone className="text-red" />
                        233 XXX XXX XXXX
                    </li>
                    <li className='text-gray-600 flex items-center gap-2'>
                        <MdEmail className="text-red" />
                        info@tarmove.com
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-lg mb-4 text-deep-red'>Follow Us</h3>
                <div className='flex gap-4'>
                    <a href="#" aria-label="Instagram" className='hover:text-red-600 transition-colors'>
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className='hover:text-red-600 transition-colors'>
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" aria-label="Facebook" className='hover:text-red-600 transition-colors'>
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className='hover:text-red-600 transition-colors'>
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-200 mt-10'>
            <div className='flex justify-center items-center pt-6 pb-2'>
                <p className='text-gray-500'>© 2024 Tarmove. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer