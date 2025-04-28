import React, { useState, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import ContactForm from './ContactForm';

function ContactUs() {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const handleClick = () => {
    if (isFormVisible) {
      AOS.refresh();
    }
    setIsFormVisible(!isFormVisible);

    if (!isFormVisible && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id="contactUs">
      <section
        className="bg-gray-900 text-white min-h-[45vh] pt-20 pb-8 text-center"
        style={{ backgroundColor: '#1D1D1D' }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="border-t border-white pt-4 mb-4 w-full"></div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Є питання?</h2>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Зв'яжіться з нами!</h1>
            <div className="border-b border-white pb-4 mb-8 w-full"></div>

            <button onClick={handleClick} className="bg-white text-black font-bold py-3 px-6 sm:px-8 rounded-md text-base sm:text-lg mb-8">
              {isFormVisible ? 'Згорнути форму' : 'CONTACT US'}
            </button>

            {/* Yellow rectangle */}
            <div
              className="w-full p-6 sm:p-8 text-center text-white shadow-lg rounded-lg"
              style={{ backgroundColor: '#eeba2b' }}
              data-aos="zoom-in"
            >
              <p className="text-white text-lg sm:text-xl mb-4">
                ОТРИМАЙТЕ СВОЮ КОВОРКІНГ-ЗОНУ
              </p>
              <h2 className="text-gray-900 text-2xl sm:text-4xl font-bold leading-tight">
                СТВОРИ ЩОСЬ<br />
                ЗАХОПЛЮЮЧЕ З НАМИ!
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={formRef}
        data-aos={isFormVisible ? 'fade-in' : 'fade-out'}
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {isFormVisible && (
          <ContactForm />
        )}
      </div>

    </div>
  );
}

export default ContactUs;
