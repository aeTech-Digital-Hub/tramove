const Card = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/herotrack2.webp")] bg-no-repeat bg-cover bg-center h-[50vh] relative w-[80%] m-auto rounded-2xl my-20'>
      <div className='bg-black/50 absolute top-0 left-0 bottom-0 right-0 rounded-2xl'></div>
        <div className=" flex flex-col px-4 md:px-16 py-20 m-auto rounded-2xl">
            <div className="z-20 m-auto">
              <h2 className="lg:text-5xl text-2xl font-semibold mb-4 pt-10 text-center text-white/50">
                Level up your transportation
              </h2>
              <p className="text-center text-white/70 py-4">
                Level up your transportation with smarter, faster, and more reliable solutions built for modern life. From daily commutes to business deliveries, we make every journey seamless and efficient — so you can move with confidence, comfort, and control.
                Ready to Streamline Your Logistics? Get Started Today!
              </p>
              <a 
                href="/get-started" 
                className=" bg-gradient-to-t from-red to-deep-red text-white font-medium py-3 px-8 rounded-full transition-colors mt-4 flex justify-center w-fit m-auto">
                Get Started
              </a>
            </div>
        </div>
      </div>
  );
}

export default Card