import Hero from "../components/home/Hero";
import assets from '../assets/assets'
import Button from "@/components/Button";
import Card from "@/components/Card";

const Index = () => {
  return (
    <div className="">
      <Hero />

      {/* how tramove works */}
      <div className=" grid lg:grid-cols-2 gap-12 m-auto pb-10 pl-40 text-center justify-center items-center ">
        {/* === left  */}
        <div className="flex flex-col">
            <h2 className="lg:text-4xl text-[18px] font-meduim">How Tramove Works</h2>
            <p className="text-gray-10 text-[14px] py-8">
              Three Simple steps to get your vehicle moved safely and efficiently
            </p>

          {/* cards */}
          <div className="grid lg:grid-cols-3 gap-4 align-center justify-center m-auto">
            <div className="grid items-center p-4 rounded-2xl shadow-lg bg-slate-50 mb-8">
              <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
                <img src={assets.solarBox} alt="" className="w-[33px]" />
              </div>
              <h3 className="font-semibold text-1xl pb-3">Book Shipment</h3>
              <p className="text-[14px]">
                Enter your shipment details, including cargo type, weight,
                dimensions, origin, and destination. Get an instant quote
              </p>
            </div>

            <div className="grid items-center shadow-lg p-4 rounded-2xl bg-slate-50 mb-8">
              <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
                <img src={assets.trackIcon} alt="" className="w-[33px]" />
              </div>
              <h3 className="font-semibold text-1xl pb-3">
                Tramove Assigns Traporter
              </h3>
              <p className="text-[14px]">
                Our team reviews your request and assigns a vetted, qualified
                transporter who's perfect for your shipment needs
              </p>
            </div>

            <div className="grid items-center p-4 rounded-2xl shadow-lg bg-slate-50 mb-8">
              <div className="bg-red rounded-full justify-center m-auto p-2 items-center">
                <img src={assets.location} alt="" className="w-[33px]" />
              </div>
              <h3 className="font-semibold text-1xl pb-3">Track in Real-Time</h3>
              <p className="text-[14px]">
                Monitor our shipment progress with real-time updates and estimated
                arrival times
              </p>
            </div>
          </div>

          {/* <div className="flex gap-5 bg-[#fff4f6] p-10 mb-10 round ">
            <div className="grid justify-center items-center m-auto">
              <div className="bg-red rounded-full justify-center p-2 m-auto">
                <img src={assets.trackIcon} alt="" className="w-[33px]" />
              </div>
              <h3 className="text-center p-2">500+</h3>
              <p>Deliveries</p>
            </div>
            <div className="grid justify-center items-center m-auto">
              <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
                <img src={assets.materialSymbol} alt="" className="w-[33px]" />
              </div>
              <h3 className="text-center p-2">99.9%</h3>
              <p>On-Time Rate</p>
            </div>
            <div className="grid justify-center items-center m-auto">
              <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
                <img src={assets.location} alt="" className="w-[33px]" />
              </div>
              <h3 className="text-center p-2">20+</h3>
              <p>Fleet Vehicles</p>
            </div>
          </div> */}

          {/* learn more button */}
          <div className="m-auto w-36 pb-6">
            <Button>Learn More</Button>
          </div>
        </div>
      {/* ===== right */}
        {/* map Network */}
        <div className="grid items-center justify-center bg-[#fff4f6] py-32">
          <h2 className="lg:text-4xl text-[18px] font-meduim pb-10">
            Our Networks Across Ghana
          </h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254004.5861498787!2d-0.29707989129879893!3d5.593632359242135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1693930681722!5m2!1sen!2sus" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Our office location in Accra, Ghana"
              className="w-full h-[60vh]"
            ></iframe>
          </div>
        </div>
      </div>



      {/* Why choose Tramove */}
      <div className="px-20 py-20 bg-slate-50 m-auto justify-center items-center">
        <h2 className="lg:text-4xl text-[18px] font-meduim text-center">Why Choose Tramove</h2>
        <p className="text-center px-6">
          We are dedicated to providing the most reliable and transparent
          automotive Logistic services in ghana
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-20">
          <div className="grid shadow bg-slate-50 p-4">
            <div className="bg-red rounded-full p-2 w-10">
              <img
                src={assets.trackIcon}
                alt=""
                className="w-[33px] items-start"
              />
            </div>
            <h3 className="font-bold text-1xl pb-3">Vetted Transporters</h3>
            <p className="">
              We thoroughly vet all transporters on our platform so you don't have
              to worry about quality or reliability
            </p>
          </div>
          <div className="grid shadow bg-slate-50 p-4">
            <div className="bg-red rounded-full p-2 w-10 ">
              <img src={assets.moneyicon} alt="" className="w-[33px]" />
            </div>
            <h3 className="font-bold text-1xl pb-3">Transparent Pricing</h3>
            <p className="">
              Get upfront quotes with no hidden fees. Our transparent pricing
              ensures you know exactly what you're paying for.
            </p>
          </div>
          <div className="grid shadow bg-slate-50 p-4">
            <div className="bg-red rounded-full justify-center p-2 w-10 items-center">
              <img src={assets.location} alt="" className="w-[33px]" />
            </div>
            <h3 className="font-bold text-1xl pb-3">Real-Time Tracking</h3>
            <p className="">
              Follow your shipment journey with our advanced tracking system,
              keeping you informed every step of the way
            </p>
          </div>
          <div className="grid shadow-sm bg-slate-50 p-4">
            <div className="bg-red rounded-full justify-center p-2 w-10 items-center">
              <img src={assets.location} alt="" className="w-[33px]" />
            </div>
            <h3 className="font-bold text-1xl pb-3">Admin Oversight</h3>
            <p className="">
              Our dedicated admin team monitors every shipment, ensuring quality
              service and quickly resolving any issues that arise
            </p>
          </div>
        </div>
      </div>

      <div>
        <Card />
      </div>
      
    </div>
  );
};

export default Index;
