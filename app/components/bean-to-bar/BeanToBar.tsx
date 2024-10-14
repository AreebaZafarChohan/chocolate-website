const BeanToBar = () => {
  return (
    <section className="bg-img mt-6">
        <div className='flex flex-col md:flex-row items-center max-w-6xl mx-auto my-12 px-4'>

      {/* Left Side: Image */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-12 mb-4">
        <h2 className="text-4xl font-bold text-white mt-6">From Bean to Bar: A Labor of Love</h2>
        <hr />
        <p className="text-lg text-white p-4 mt-4">
          It all begins with the cocoa bean. Sourced directly from sustainable farms, 
          we carefully craft every bar of chocolate with precision and care. 
          From roasting to tempering, each step is designed to deliver the finest flavors, 
          ensuring that every bite is a luxurious experience.
        </p>
        <p className="text-lg text-white mt-4">
          Our process is about preserving the natural flavors of the cocoa while 
          adding our signature touch. The result? Chocolate that not only tastes great 
          but tells a story of craftsmanship, passion, and sustainability.
        </p>
      </div>
      </div>
    </section>
  );
};

export default BeanToBar;