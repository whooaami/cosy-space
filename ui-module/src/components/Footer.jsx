import { FaFacebook, FaInstagram } from "react-icons/fa";

import whiteLogo from "../assets/white-logo-1.png";

function Footer() {
    return (
        <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-white px-6 py-16">
            <div
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
                data-aos="fade-up"
            >
                {/* Logo & Description */}
                <div>
                    <img
                        src={whiteLogo} // заміни на своє
                        alt="Cosy Space Logo"
                        className="w-32 mx-auto md:mx-0 mb-4 hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-sm text-gray-400">
                        Затишний космічний простір для продуктивної роботи 🌌
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Навігація</h3>
                    <ul className="space-y-2 text-sm">
                        {["Про нас", "Послуги", "Контакти", "Забронювати"].map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-yellow-400 transition duration-200"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Контакти</h3>
                    <p className="text-sm">📞 +380 67 581 43 80</p>
                    <p className="text-sm">📍 Львів, вул. Стрийська 113В</p>
                    <p className="text-sm">✉️ cosyspace.lviv@gmail.com</p>
                    <div className="flex justify-center md:justify-start mt-5 space-x-4">
                        <a
                            href="https://www.instagram.com/coworking_lviv_cosyspase?igsh=Z2k2NG5iczdyNjM2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='transition-colors duration-300 hover:text-[#eeba2b]'
                            aria-label="Instagram"
                        >
                            <FaInstagram size={22} />
                        </a>
                        <a
                            href="https://t.me/yourtelegram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='transition-colors duration-300 hover:text-[#eeba2b]'
                            aria-label="Facebook"
                        >
                            <FaFacebook size={22} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Cosy Space. Усі права захищені.
            </div>
        </footer>
    );
}

export default Footer;
