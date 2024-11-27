

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a1a2e] to-[#282a36] min-h-screen flex flex-col items-center text-white px-6 py-12">
      {/* Hero Text Section */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Enhancing Business Efficiency
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Uncover hidden opportunities by leveraging underused resources within
          your company, maximizing value, boosting efficiency, and driving
          growth for a competitive advantage.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-700 text-lg font-semibold rounded-lg shadow-lg">
          Get Started
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#1e2233] rounded-lg p-6 flex flex-col items-center shadow-lg">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Happy Customer"
            className="w-full h-36 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">Happy Customer</h2>
          <p className="text-4xl font-bold text-blue-400">1872k</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1e2233] rounded-lg p-6 flex flex-col items-center shadow-lg">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Firms Aiding"
            className="w-full h-36 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">Firms Aiding</h2>
          <p className="text-4xl font-bold text-green-400">1000+</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1e2233] rounded-lg p-6 flex flex-col items-center shadow-lg">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Business Insights"
            className="w-full h-36 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold">Business Insights</h2>
          <p className="text-4xl font-bold text-gray-400">Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
