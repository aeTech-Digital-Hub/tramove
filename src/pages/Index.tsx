import Hero from "../components/home/Hero";
import assets from '../assets/assets'
import Button from "@/components/Button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-background">
      <Hero />

      {/* how tramove works */}
      <div className="container mx-auto py-10  text-center justify-center items-center mb-3">
        <h2 className="text-2xl font-bold py-1">How Tramove Works</h2>
        <p className="text-gray-10 text-[14px] pb-8">
          Three Simple steps to get your vehicle moved safely and efficiently
        </p>

        {/* cards */}
        <div className="flex gap-4 text-center align-center justify-center m-auto">
          <div className="grid items-center">
            <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
              <img src={assets.solarBox} alt="" className="w-[33px]" />
            </div>
            <h3 className="font-bold text-1xl pb-3">Book Shipment</h3>
            <p>
              Enter your shipment details, including cargo type, weight,
              dimensions, origin, and destination. Get an instant quote
            </p>
          </div>

          <div className="grid items-center">
            <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
              <img src={assets.trackIcon} alt="" className="w-[33px]" />
            </div>
            <h3 className="font-bold text-1xl pb-3">
              Tramove Assigns Traporter
            </h3>
            <p>
              Our team reviews your request and assigns a vetted, qualified
              transporter who's perfect for your shipment needs
            </p>
          </div>

          <div className="grid items-center">
            <div className="bg-red rounded-full justify-center m-auto p-2 items-center">
              <img src={assets.location} alt="" className="w-[33px]" />
            </div>
            <h3 className="font-bold text-1xl pb-3">Track in Real-Time</h3>
            <p>
              Monitor our shipment progress with real-time updates and estimated
              arrival times
            </p>
          </div>
        </div>
      </div>
      {/* learn more button */}
      <div className="mb-20">
        <Button>Learn More</Button>
      </div>

      {/* map Network */}
      <div className="grid items-center justify-center bg-[#fff4f6] p-13">
        <h2 className="m-auto font-bold text-2xl p-8">
          Our Networks Across Ghana
        </h2>
        <img src={assets.map} alt="" className="w-3/4 m-auto pb-10" />
      </div>

      {/* Why choose Tramove */}
      <h2 className="text-center font-bold text-2xl p-6">Why Choose Tramove</h2>
      <p className="text-center px-6">
        We are dedicated to providing the most reliable and transparent
        automotive Logistic services in ghana
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-10 m-8">
        <div className="grid">
          <div className="bg-red rounded-full justify-center p-2 m-auto">
            <img
              src={assets.trackIcon}
              alt=""
              className="w-[33px] items-start"
            />
          </div>
          <h3 className="font-bold text-1xl pb-3 text-center">Vetted Transporters</h3>
          <p className="text-center">
            We thoroughly vet all transporters on our platform so you don't have
            to worry about quality or reliability
          </p>
        </div>
        <div className="grid items-center">
          <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
            <img src={assets.moneyicon} alt="" className="w-[33px]" />
          </div>
          <h3 className="font-bold text-1xl pb-3 text-center">Transparent Pricing</h3>
          <p className="text-center">
            Get upfront quotes with no hidden fees. Our transparent pricing
            ensures you know exactly what you're paying for.
          </p>
        </div>

        <div className="grid items-center">
          <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
            <img src={assets.location} alt="" className="w-[33px]" />
          </div>
          <h3 className="font-bold text-1xl pb-3 text-center">Real-Time Tracking</h3>
          <p className="text-center">
            Follow your shipment journey with our advanced tracking system,
            keeping you informed every step of the way
          </p>
        </div>
        <div className="grid items-center">
          <div className="bg-red rounded-full justify-center p-2 m-auto items-center">
            <img src={assets.location} alt="" className="w-[33px]" />
          </div>
          <h3 className="font-bold text-1xl pb-3 text-center">Admin Oversight</h3>
          <p className="text-center">
            Our dedicated admin team monitors every shipment, ensuring quality
            service and quickly resolving any issues that arise
          </p>
        </div>
      </div>

      <div className="container flex gap-5 bg-[#fff4f6] p-10 ">
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
      </div>

      <div className="container flex items-center justify-center p-10 border-b border-gray-200 mt-10">
        <div className='flex flex-col'>
          <h2 className="font-semibold text-5xl m-6">
            Ready To <span className="text-red">Streamline ?</span> Your <span className="text-red">Logistics</span>, Get Started Today!
          </h2>
          <div className="items-start p-5 w-60 text-center">
            <Button>Get Started</Button>
          </div>
        </div>
        <div>
          <img src={assets.deliveryTrack3} alt="" className="w-90"/>
        </div>
      </div>
    </div>
  );
};

export default Index;
