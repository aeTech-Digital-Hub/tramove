import assets from '@/assets/assets'
import Button from '@/components/Button';
import Card from '@/components/Card';
// import React from 'react'

const Services = () => {
  return (
    <div className="">
      <div className="lg:flex md:flex max-sm:grid-cols-1 gap-2 bg-[#fff4f6] sm:p-5 items-start justify-center">
        <div className="p-10">
          <small className="text-red border solid rounded-full p-2 bg-rose-100">
            Shipping Made Simple
          </small>
          <div className="py-3 text-3xl font-semibold">
            <h1>Our Services</h1>
          </div>
          <div className="lg:w-2/3">
            <p>
              Tramove offers comprehensive automotive logistics solutions with
              our team managed quality control
            </p>
          </div>
        </div>

        <div className='max-sm:px-5 px-20'>
          <img src={assets.serviceHero} alt="" />
        </div>
      </div>

      {/* process */}

      <div className="p-10 items-center justify-center mx-auto">
        <h2 className="text-center text-3xl sm:text-1xl font-semibold p-4">
          Our Service Process
        </h2>
        <p className="text-center">
          A streamlined process that connects shippers with trusted transporters
          through Tramove team
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 mx-auto items-center justify-center p-10 gap-4">
          <div className="items-center justify-center shadow bg-rose-50 p-3 hover:bg-rose-100 cursor-pointer">
            <div className="bg-red w-10 rounded-full p-2">
              <img src={assets.solarBox} alt="" className="w-32" />
            </div>
            <div className="py-2">
              <h2 className="text-1xl font-medium">Book Shipment</h2>
            </div>
            <p>
              Shippers enter vehicle and route details through our simple
              booking form
            </p>
          </div>

          <div className="items-center justify-center shadow bg-rose-50 p-3 hover:bg-rose-100 cursor-pointer">
            <div className="bg-red w-10 rounded-full p-2">
              <img src={assets.solarBox} alt="" className="w-32" />
            </div>
            <div className="py-2">
              <h2 className="text-1xl font-medium">Secure Authentication</h2>
            </div>
            <p>
              Our team verifies the details and calculates the most accurate
              price
            </p>
          </div>

          <div className="items-center justify-center shadow bg-rose-50 p-3 hover:bg-rose-100 cursor-pointer">
            <div className="bg-red w-10 rounded-full p-2">
              <img src={assets.trackIcon} alt="" className="w-32" />
            </div>
            <div className="py-2">
              <h2 className="text-1xl font-medium">
                Tramove Team Assigns Transporter
              </h2>
            </div>
            <p>We match your shipment with a vetted, avaliable transporter</p>
          </div>
          <div className="items-center justify-center shadow bg-rose-50 p-3 hover:bg-rose-100 cursor-pointer">
            <div className="bg-red w-10 rounded-full p-2">
              <img src={assets.location} alt="" className="w-32" />
            </div>
            <div className="py-2">
              <h2 className="text-1xl font-medium">Track in Real-Time</h2>
            </div>
            <p>
              Monitor your shipment progress with real-time updates and
              estimated arrival times
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-grey">
        <div>
          <img src={assets.deliveryTrack2} alt="" />
        </div>

        <div className="">
          <div className=" py-2 font-semibold text-2xl">
            <h2>Freight Booking</h2>
          </div>
          <p className="py-2">Book shipment in minutes with instant quotes.</p>

          <div className="grid gap-4">
            <div className="flex gap-3 items-start justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex">
                  <p className="text-[12px] w-2xl">
                    <span className="text-[14px] font-medium">
                      Dynamic Pricing:{" "}
                    </span>
                    Get instant quotes based on cargo type, weight and distance
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  <p className="text-[12px] w-2xl">
                    <span className="text-[14px] font-medium">
                      Easy Booking Process:{" "}
                    </span>
                    A simple, step-by-step process to book your shipment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex w-2xl">
                  <p className="text-[12px] ">
                    <span className="text-[14px] font-medium">
                      Multiple Payment Options:{" "}
                    </span>
                    Choose from credit card, mobile money, or bank transfer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex w-2xl">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      Transparent Cost:{" "}
                    </span>
                    No hidden fees --- see the full cost upfront upon service request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 w-32">
            <Button>Book Now</Button>
          </div>
        </div>
      </div>

      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-20 border-b border-grey
      "
      >
        <div className="">
          <div className=" py-2 font-semibold text-2xl">
            <h2>Real-Time Tracking</h2>
          </div>
          <p className="py-2">Track your shipment anytime, anywhere.</p>

          <div className="grid gap-4 w-5/6">
            <div className="flex gap-3 items-center justify-center lg:w-[32rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      GPS-enabled tracking:{" "}
                    </span>
                    Follow your shipment's journey on an interactive map
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[32rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      Milestone Notification:{" "}
                    </span>
                    Get alert for key events like pickup, transit, and delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      Estimated Delivery Times:{" "}
                    </span>
                    Know exactly when your shipment will arrive
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      Weather-Proofing:{" "}
                    </span>
                    Recieve alerts and solutions for weather sensitive cargo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 w-32">
            <Button>Track Now</Button>
          </div>
        </div>

        <div>
          <img src={assets.realtime} alt="" />
        </div>
      </div>

      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-start justify-center mx-auto p-10 border-b border-grey
      "
      >
        <div>
          <img src={assets.card} alt="" />
        </div>

        <div className="">
          <div className=" py-2 font-semibold text-2xl">
            <h2>Payment Solutions</h2>
          </div>
          <p className="py-2">Book shipment in minutes with instant quotes.</p>

          <div className="grid gap-4 w-5/6">
            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex">
                  <p className="text-[12px] w-2xl">
                    <span className="text-[14px] font-medium">
                      Multiple Payment Options:{" "}
                    </span>
                    Pay with credit card, Paystack, or bank transfer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      Automated Invocing:{" "}
                    </span>
                    Generate and send invoice automatically on service request
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      Payment Tracking:{" "}
                    </span>
                    Monitor payment status and history in real-time anytime 
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center lg:w-[30rem]">
              <div className="bg-red rounded-full w-2 p-2">
                <span className="w-1"></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  <p className="text-[12px]">
                    <span className="text-[14px] font-medium">
                      Fraud Prevention and Protection:{" "}
                    </span>
                    Advanced security measures to protect your transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 w-32">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>

      <Card />
    </div>
  );
}

export default Services