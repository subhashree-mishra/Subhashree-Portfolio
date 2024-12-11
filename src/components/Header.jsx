const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white sticky top-0 z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex-1 text-center">
        <h1 className="text-4xl font-bold text-white ml-8">Portfolio</h1>  {/* Add ml-8 */}
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-yellow-300 transition-all">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300 transition-all">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-300 transition-all">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-300 transition-all">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
