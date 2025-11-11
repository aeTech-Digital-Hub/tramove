import assets from '@/assets/assets'
import Card from '@/components/Card';
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef()

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  // FAQ toggle state management
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({});
  
  // Function to toggle FAQ items
  const toggleFAQ = (id: string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  //Function to handle forms
  const [user, setUser] = useState({
    name: '', 
    email: '',
    subject: '',
    message: '',
  });

  const handleFormChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleFormSubit = (e: React.FormEvent) => {
    e.preventDefault()
    if(form.current){
      emailjs
      .sendForm('Tramove_2025', 'template_lkz0m7v', form.current, {
        publicKey: '7_X7BAG6U_84kyg5T',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error: unknown) => {
          console.error('FAILED...', error);
        },
      );
    }
   
    setUser({
      name: '', 
      email: '',
      subject: '',
      message: '',})
    console.log(user)
  }


  return (
    <div className="w-full bg-white border-t border-b border-gray-100">
      {/* Hero section with illustration - exact match to screenshot */}
      <div className="mx-auto px-20 max-sm:px-10 py-8 mt-16 bg-red/5 lg:h-[60vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="w-full mb-8 md:mb-0 md:pr-8 flex flex-col gap-3">
            <p className="text-red text-base font-medium mb-1">Get in Touch</p>
            <h1 className="text-6xl font-bold text-gray-900 mb-1">Contact Us</h1>
            <p className="text-gray-700 text-lg">We're here to help!</p>
          </div>
          
          {/* Right side - Illustration - the 3D delivery person image */}
          <div className="w-full flex justify-center">
            <img 
              src={assets.serviceHero}
              alt="Delivery service illustration" 
              className="w-90"
            />
          </div>
        </div>
        
        {/* Red circle indicator - exactly as in screenshot */}
        <div className="flex justify-center mt-6">
          <div className="h-3 w-3 rounded-full bg-red-600"></div>
        </div>
      </div>

      {/* Contact form and info section */}
      <div className="container mx-auto px-4 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Contact info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Have questions or need assistance? Reach out to our team using the form below or contact us directly through the provided information.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <img src={assets.location} alt="Location icon" className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Our Office</p>
                  <p className="text-gray-600">123 Logistics Avenue, Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <img src={assets.packageicon} alt="Phone icon" className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-gray-600">+233 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <img src={assets.packageicon} alt="Email icon" className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Email Address</p>
                  <p className="text-gray-600">info@tramove.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-medium mb-3">Follow Us</p>
              <div className="flex space-x-2">
                <a href="#" aria-label="LinkedIn">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" aria-label="Twitter">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" aria-label="Behance">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form rel='form' onSubmit={handleFormSubit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleFormChange}
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleFormChange}
                    placeholder="Your phone number"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1 text-sm text-gray-600">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={user.subject}
                  onChange={handleFormChange}
                  placeholder="Your topic"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={user.message}
                  onChange={handleFormChange}
                  placeholder="Type your message here"
                  rows={5}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-t from-red to-deep-red hover:bg-red text-white font-medium py-3 rounded-full transition-colors"
                onClick={handleFormSubit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Location section */}
      <div className="container mx-auto px-4 md:px-16 py-16 max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Our Location</h2>
          <p className="text-gray-600">Visit our headquarters in the heart of Accra.</p>
        </div>
        
        {/* Map Container */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254004.5861498787!2d-0.29707989129879893!3d5.593632359242135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1693930681722!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Our office location in Accra, Ghana"
            className="w-full"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 md:px-16 py-16 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ('faq-1')}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                <span>Why don't transporters have their own dashboard?</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${openFAQs['faq-1'] ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${openFAQs['faq-1'] ? 'block' : 'hidden'} px-4 pb-4 pt-0 text-gray-600 text-sm`}>
                <p>We've designed our system with admin-managed assignments to ensure quality control and optimal matching. This allows us to carefully review each transporter's performance and maintain high service standards.</p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ('faq-2')}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                <span>What happens if there's a problem during transport?</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${openFAQs['faq-2'] ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${openFAQs['faq-2'] ? 'block' : 'hidden'} px-4 pb-4 pt-0 text-gray-600 text-sm`}>
                <p>Our admin team serves as the primary point of contact for both shippers and transporters. If any issues arise, they quickly facilitate communication and resolution, ensuring all parties are treated fairly.</p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ('faq-3')}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                <span>How are your rates calculated?</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${openFAQs['faq-3'] ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${openFAQs['faq-3'] ? 'block' : 'hidden'} px-4 pb-4 pt-0 text-gray-600 text-sm`}>
                <p>Our rates are calculated based on distance, weight, volume, and service level. You can get an instant quote through our platform.</p>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-4">
            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ('faq-4')}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                <span>How are shipment prices determined?</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${openFAQs['faq-4'] ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${openFAQs['faq-4'] ? 'block' : 'hidden'} px-4 pb-4 pt-0 text-gray-600 text-sm`}>
                <p>Our instant quote calculator provides estimates based on distance, vehicle type, and weight. Our admin team then reviews these quotes to ensure accuracy and may adjust based on specific circumstances or route conditions.</p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ('faq-5')}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                <span>How are transporters vetted?</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${openFAQs['faq-5'] ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${openFAQs['faq-5'] ? 'block' : 'hidden'} px-4 pb-4 pt-0 text-gray-600 text-sm`}>
                <p>We verify transporters' credentials, insurance, vehicle documentation, and experience. Our admin team also conducts interviews and continuously monitors performance to maintain our high standards.</p>
              </div>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="border border-gray-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ('faq-6')}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                <span>Are there any hidden fees?</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform ${openFAQs['faq-6'] ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${openFAQs['faq-6'] ? 'block' : 'hidden'} px-4 pb-4 pt-0 text-gray-600 text-sm`}>
                <p>No. Our quotes include all costs with a transparent breakdown of transport fees and our Tramove fee (15%). There are no surprise charges or hidden costs at any stage of the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section - Exactly as in screenshot */}
     <Card />
    </div>
  )
}

export default Contact