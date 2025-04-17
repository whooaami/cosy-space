import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#services" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                Послуги
              </a>
            </li>
            <li>
              <a href="#advantages" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                Переваги
              </a>
            </li>
            <li>
              <a href="#gallery" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                Галерея
              </a>
            </li>
            <li>
              <a href="#price" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                Вартість
              </a>
            </li>
            <li>
              <a href="#contactUs" className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}>
                Контакти
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <X size={28} className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu size={28} className={isScrolled ? "text-black" : "text-white"} />
          )}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-black flex flex-col items-center py-6 shadow-md md:hidden">
            <a href="#services" className="py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              Послуги
            </a>
            <a href="#advantages" className="py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              Переваги
            </a>
            <a href="#gallery" className="py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              Галерея
            </a>
            <a href="#price" className="py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              Вартість
            </a>
            <a href="#contactUs" className="py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
              Контакти
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
