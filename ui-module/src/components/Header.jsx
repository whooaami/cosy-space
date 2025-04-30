import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import whiteLogo from "../assets/white-logo-1.png";
import blackLogo from "../assets/black-logo-1.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Послуги", href: "#services" },
    { label: "Переваги", href: "#advantages" },
    { label: "Галерея", href: "#gallery" },
    { label: "Вартість", href: "#price" },
    { label: "Контакти", href: "#contactUs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
        <div className="flex items-center space-x-8">
          <a href="#" className="flex-shrink-0">
            <img
              src={isScrolled ? blackLogo : whiteLogo}
              alt="Cosy Space Logo"
              className="h-10 w-auto transition-all duration-300"
            />
          </a>

          <nav className="hidden lg:flex">
            <ul className="flex space-x-5 xl:space-x-6">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative text-base xl:text-lg transition-colors duration-300 ${
                      isScrolled ? "text-black" : "text-white"
                    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#eeba2b] 
                    after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden xl:flex items-center space-x-4">
          <span
            className={`text-base font-semibold ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            +38 (067) 581-43-80
          </span>
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 hover:text-[#eeba2b] ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://www.instagram.com/coworking_lviv_cosyspase?igsh=Z2k2NG5iczdyNjM2"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 hover:text-[#eeba2b] ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <FaInstagram size={22} />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden ml-4 focus:outline-none"
        >
          {isMenuOpen ? (
            <X size={28} className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu size={28} className={isScrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 z-40">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-black hover:text-[#eeba2b] transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <span className="block text-lg font-semibold text-black">
                +38 (067) 581-43-80
              </span>
            </li>
            <li className="flex space-x-4">
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#eeba2b] transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/coworking_lviv_cosyspase?igsh=Z2k2NG5iczdyNjM2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#eeba2b] transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
