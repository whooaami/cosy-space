import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className={`text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
          Cosy Space
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
