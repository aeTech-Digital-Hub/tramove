import assets from '@/assets/assets';

const Card = () => {
  return (
    <div className="bg-pink-100 py-12 my-16">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-col items-center justify-between">
            <div className="mb-8 md:mb-0">
              <img
                src={assets.deliveryTrack3}
                alt="Logistics truck with packages"
                className="max-w-full md:max-w-xl"
              />
            </div>
            <div className="md:max-w-2xl">
              <h2 className="lg:text-4xl text-2xl font-bold mb-4">
                Ready to <span className="text-red">Streamline</span> Your
                <br />
                <span className="text-red">Logistics</span>? Get Started Today!
              </h2>
              
              <a 
                href="/get-started" 
                className="inline-block bg-gradient-to-t from-red to-deep-red text-white font-medium py-3 px-8 rounded-full transition-colors mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card