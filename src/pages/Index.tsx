import Hero from "../components/home/Hero";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-background">
      <Hero />

      {/* how tramove works */}
      <div className="container mx-auto py-10  text-center justify-center items-center">
        <h2 className="text-2xl font-medium py-1">How Tramove Works</h2>
        <p className="text-gray-10 text-[13px]">Three Simple steps to get your vehicle moved safely and efficiently</p>

        <div className="flex gap-3 text-center align-center justify-center">
          <div>
            <div className="bg-red rounded-full justify-center">
              <img src="aa" alt=""  />
            </div>
            <h3>Book Shipment</h3>
            <p>Enter your shipment details, including cargo type, weight, dimensions, origin, and destination. Get an instant quote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
