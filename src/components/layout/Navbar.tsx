import { useState, useEffect } from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll to add blur effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className={`container mx-auto py-2 border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 overflow-x-hidden ${
      hasScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white'
    }`}>
        <div className="flex items-center justify-between">
            <img src={logo} alt="logo" className='w-32' />
            
            {/* Desktop Navigation Links */}
            <div className='hidden md:flex items-center gap-8 text-lg font-semibold'>
                <Link to="/">Home</Link>        
                <Link to="/services">Services</Link>        
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            
            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button>Get A Quote</Button>
            </div>
            
            {/* Mobile Hamburger Icon */}
            <button 
              className="md:hidden p-2 text-gray-800 focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
        </div>
        
        {/* Mobile Slide-in Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden overflow-x-hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-5">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-6 mt-4 text-lg font-semibold">
              <Link 
                to="/" 
                className="p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              {/* Mobile Button */}
              <div className="pt-4">
                <Button>Get A Quote</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overlay for when menu is open */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
    </div>
  )
}

export default Navbar