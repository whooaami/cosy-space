import React from 'react';
import 'aos/dist/aos.css'

import ContactForm from './ContactForm';

function ContactUs() {

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
        data-aos={'fade-in'}
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
          <ContactForm />
      </div>

    </div>
  );
}

export default ContactUs;
