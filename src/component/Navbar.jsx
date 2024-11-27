
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1a1a2e] to-[#282a36] px-6 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40" // Replace with your logo
          alt="Logo"
          className="w-10 h-10 mr-3"
        />
        <span className="text-white font-bold text-xl">CodeFactory</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden font-semibold md:flex space-x-6">
        <li>
          <a href="#home" className="text-white hover:text-purple-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-purple-400 transition">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="text-white hover:text-purple-400 transition">
            Services
          </a>
        </li>
        <li className="relative group">
          <a href="#pages" className="text-white hover:text-purple-400 transition">
            Courses
          </a>
          <ul className="absolute left-0 top-8 bg-[#282a36] hidden group-hover:block text-sm text-white rounded-lg shadow-lg">
            <li>
              <a href="#page1" className="block px-4 py-2 hover:bg-purple-500">
                DSA Supreme
              </a>
            </li>
            <li>
              <a href="#page2" className="block px-4 py-2 hover:bg-purple-500">
                Web Development
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#blog" className="text-white hover:text-purple-400 transition">
            Blog
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="hidden md:block bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg">
        Get in Touch
      </button>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
