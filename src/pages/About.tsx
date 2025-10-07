// import React from 'react'
import assets from '@/assets/assets'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="mx-auto   py-5 bg-[#FFF4F6] h-[80vh] max-sm:h-[60vh] max-md:h-[50vh] mb-25 flex  justify-evenly items-center max-sm:px-5 max-sm:grid">
        <div className=" place-content-center">
          <div className="gap-2 p-2 mt-3">
            <p className="text-red border  rounded-full p-2 text-center">Tramove Story</p>
          </div>
          <div className="py-2">
            <h2 className="lg:text-6xl text-3xl text-center font-bold">About Us</h2>
          </div>
          <small className='text-[20px] text-center'>Driving Ghana's logistic Forward</small>
        </div>
        <div className="">
          <img src={assets.aboutheroimage} alt="" className="" />
        </div>
      </div>

      <div className="container lg:flex  gap-4 py-10 items-center justify-center border-b border-grey">
        <div className="items-center lg:w-[50%]">
          <img src={assets.deliveryTrack2} alt="" />
        </div>

        <div className="lg:w-[50%]">
          <div>
            <h2 className="text-3xl font-semibold py-2">Our Mission</h2>
          </div>
          <div>
            <p className="">
              Tramove is revolutionizing automotive logistics in Ghana by
              combining cutting-edge technology with deep local expertise. We
              bridge the gap between shippers and transporters, ensuring
              seamless operations from start to finish. Founded in 2020, we've
              quickly grown to become Ghana's leading logistics platform for the
              automotive industry. Our mission is to solve the unique challenges
              facing logistics in West Africa through innovation, reliability,
              and a deep commitment to customer success.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-grey p-10">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Our Core values
        </h2>
        <p className="text-center py-4">
          These principles guide everything we do at Tramove
        </p>

        <div className="grid lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2 lg:p-10 gap-4">
          <div className="mx-auto grid items-center bg-slate-50 hover:bg-slate-100 shadow-lg outline outline-none p-10 rounded">
            <img src={assets.innovation} alt="" className="m-auto" />
            <h3 className="font-semibold py-2 text-center">Innovation</h3>
            <p className="text-center">
              We constantly seek new solutions to old problems
            </p>
          </div>
          <div className="mx-auto grid items-center bg-slate-50 shadow-lg outline outline-none p-10 rounded">
            <img src={assets.reliability} alt="" className="m-auto" />
            <h3 className="font-semibold py-2 text-center">Reliability</h3>
            <p className="text-center">
              We deliver on our promises, every time
            </p>
          </div>
          <div className="mx-auto grid items-center bg-slate-50 shadow-lg outline outline-none p-10 rounded">
            <img src={assets.transparency} alt="" className="m-auto" />
            <h3 className="font-semibold py-2 text-center">Transparent</h3>
            <p className="text-center">
              We believe in honest, open communication
            </p>
          </div>
          <div className="mx-auto grid items-center bg-slate-50 shadow-lg outline outline-none p-10 rounded">
            <img src={assets.excellence} alt="" className="m-auto" />
            <h3 className="font-semibold py-2 text-center">Excellence</h3>
            <p className="text-center">
              We strive for the highest standard in everything
            </p>
          </div>
        </div>
      </div>

      {/* meet our team */}
      <div className="border-b border-grey lg:p-10">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Meet Our Team
        </h2>
        <p className="text-center">
          Our diverse team combines expertise in logistics, technology, and
          business to deliver exceptional results.
        </p>

        <div className="m-auto grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 py-10 gap-2">
          <div className="grid items-center bg-slate-50 outline outline-none p-3 rounded w-[350px] m-auto shadow">
            <div className="bg-gray-200 p-2 rounded sm:rounded">
              <img src={assets.person1} alt="" className="m-auto" />
            </div>
            <h3 className="font-semibold py-2 text-center">Sharaf Mohammend</h3>
            <p className="text-center text-red">CEO & Founder</p>

            <div className="items-center mx-auto p-1">
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto grid items-center bg-slate-50 outline outline-none p-3 rounded w-[350px] shadow">
            <div className="bg-gray-200 p-2 rounded sm:rounded">
              <img src={assets.person2} alt="" className="m-auto" />
            </div>
            <h3 className="font-semibold py-2 text-center">Sharaf Abdalla</h3>
            <p className="text-center text-red">Operations Director</p>

            <div className="items-center mx-auto p-1">
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto grid items-center bg-slate-50 outline outline-none p-3 rounded w-[350px] shadow">
            <div className="bg-gray-200 p-2 rounded sm:rounded">
              <img src={assets.person3} alt="" className="m-auto" />
            </div>
            <h3 className="font-semibold py-2 text-center">Sharaf Mohammend</h3>
            <p className="text-center text-red">Chief Technology Officer</p>

            <div className="items-center mx-auto p-1">
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto grid items-center bg-slate-50 shadow w-[350px] outline outline-none p-3 rounded">
            <div className="bg-gray-200 p-2 rounded sm:rounded">
              <img src={assets.person2} alt="" className="m-auto" />
            </div>
            <h3 className="font-semibold py-2 text-center">Sharaf Mohammend</h3>
            <p className="text-center text-red">Chief Technology Officer</p>

            <div className="items-center mx-auto p-1">
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-red-600 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our journey */}

      <div className="container lg:p-10 bg-[#fff4f6] m-auto items-center justify-center mx-auto">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Our Journey
        </h2>
        <p className="text-center py-4">
          From a small startup to Ghana's leading Logistics platform
        </p>

        <div className="flex lg:p-10 items-center justify-center m-auto lg:w-2/3 gap-12 ">
          <div className="grid gap-20 border-r-2 border-grey">
            <div className="lg:p-6 p-2 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-red rounded-full py-2 px-2 text-white text-[12px]">
                01
              </span>
              <h3 className="lg:text-1xl font-semibold py-2">
                Tramove is Founded
              </h3>
              <p className='sm:text-[14px]'>We deliver on our promises, every time</p>
            </div>

            <div className="lg:p-6 p-2 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-red rounded-full py-2 px-2 m-auto text-white text-[12px]">
                02
              </span>
              <h3 className="font-semibold text-[16px] py-2">Technology Upgrade</h3>
              <p>Lunch of our proprietary tracking and management platform</p>
            </div>

            <div className="lg:p-6 p-2 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
              <span className="bg-red rounded-full py-2 px-2 m-auto text-white text-[12px]">
                03
              </span>
              <h3 className="font-semibold 1xl py-2">Industry Recognition</h3>
              <p>Lunch of our proprietary tracking and management platform</p>
            </div>
          </div>

          <div className="justify-content items-center">
            <div className="grid gap-20">
              <div className="lg:p-6 p-2 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
                <span className="bg-red rounded-full py-2 px-2 text-white text-[12px]">
                  04
                </span>
                <h3 className="text-1xl font-semibold py-2">
                  Tramove is Founded
                </h3>
                <p>We deliver on our promises, every time</p>
              </div>

              <div className="p-6 bg-slate-50 hover:bg-slate-100 rounded shadow w-[80%]">
                <span className="bg-red rounded-full py-2 px-2 m-auto text-white text-[12px]">
                  05
                </span>
                <h3 className="font-semibold 1xl py-2">Technology Upgrade</h3>
                <p>Lunch of our proprietary tracking and management platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About