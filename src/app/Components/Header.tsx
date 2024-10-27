const Header = () => {
    return (
      <header className="bg-slate-600 text-white p-4 text-left">
        <h1 className="text-xl font-bold">My Landing Page</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">Portfolio</a>
            </li>
            <li>
              <a href="#services" className="hover:underline">Services</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  