import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div id="contactUs" className="min-h-screen">

      {/* Dark header section */}
      <section className="bg-gray-900 text-white min-h-[40vh] pt-16 pb-0 text-center" style={{ backgroundColor: '#1D1D1D' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="border-t border-gray-600 pt-4 mb-4"></div>
            <h2 className="text-3xl font-semibold mb-2">Є питання?</h2>
            <h1 className="text-4xl font-bold mb-4">Зв'яжіться з нами!</h1>
            <div className="border-b border-gray-600 pb-4 mb-8"></div>

            <button className="bg-white text-black font-bold py-3 px-8 rounded-md text-lg">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Gold banner section */}
      <section className="relative z-10">
        <div className="w-full flex flex-col items-center">
          <div
            className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-[750px] p-6 md:p-8 text-center text-white shadow-lg -mt-10 rounded-lg"
            style={{ backgroundColor: '#eeba2b' }}
          >
            <p className="text-white text-xl mb-4">ОТРИМАЙТЕ СВОЮ КОВОРКІНГ-ЗОНУ</p>
            <h2 className="text-gray-900 text-4xl font-bold">
              СТВОРИ ЩОСЬ<br />
              ЗАХОПЛЮЮЧЕ З НАМИ!
            </h2>
          </div>
        </div>
      </section>


      {/* Contact form section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-indigo-100 rounded-lg overflow-hidden">
            <div className="md:flex">
              {/* Left side - Contact info */}
              <div className="md:w-2/5 p-8">
                <h2 className="text-2xl font-bold mb-1">Зв'яжіться з Нами</h2>
                <h3 className="text-2xl font-bold mb-4">Сьогодні</h3>
                
                <p className="text-gray-700 mb-8">
                  Наш коворкінг доступний для різних бюджетів. Ми пропонуємо різні варіанти членства, щоб задовольнити ваші потреби.
                </p>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="mb-6 flex items-start">
                    <div className="bg-indigo-500 text-white p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-500 font-medium">ADDRESS</h4>
                      <p className="text-gray-600">Львів, Стрийська 113В</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex items-start">
                    <div className="bg-indigo-500 text-white p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-500 font-medium">EMAIL</h4>
                      <p className="text-gray-600">info@website.com</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex items-start">
                    <div className="bg-indigo-500 text-white p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-500 font-medium">PHONE</h4>
                      <p className="text-gray-600">+380</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-500 font-medium">PHONE</h4>
                      <p className="text-gray-600">+380 67 58 14 980</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Form */}
              <div className="md:w-3/5 p-8">
                <p className="text-gray-600 mb-4">
                  Please enable JavaScript in your browser to complete this form.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Name *</label>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Comment or Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded h-32"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-white text-gray-800 font-bold py-3 border border-gray-300 rounded"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 flex justify-center">
        <div className="relative rounded-lg overflow-hidden shadow-lg w-[65%]">
            {/* Location card overlay */}
            {/* <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-md p-4 max-w-xs">
              <h3 className="font-bold text-gray-800 text-lg mb-1">вулиця Стрийська, 113</h3>
              <p className="text-gray-600 text-sm mb-2">вулиця Стрийська, 113, Львів, Львівська область, 79000</p>
              <a href="https://www.google.com/maps/place/Житловий+комплекс+%22Ґорґани%22/@49.7860565,24.0137681,17z/data=!4m15!1m8!3m7!1s0x473ae7d2554f5607:0x198ccb11043569a0!2z0LLRg9C70LjRhtGPINCh0YLRgNC40LnRgdGM0LrQsCwgMTEzLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!3b1!8m2!3d49.7860565!4d24.016343!16s%2Fg%2F11p0_fsf06!3m5!1s0x473ae7deeae5f4d7:0x3f0237af0b935d47!8m2!3d49.7865749!4d24.0226397!16s%2Fg%2F11gn1vlj8s?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:text-blue-700">
                  Переглянути збільшену карту
              </a>
            </div> */}

            {/* Map iframe */}
            <div className="w-full h-96">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.189238133744!2d24.02006157694421!3d49.786574771485514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7deeae5f4d7%3A0x3f0237af0b935d47!2z0JbQuNGC0LvQvtCy0LjQuSDQutC-0LzQv9C70LXQutGBICLQhtC-0YDQs9Cw0L3QuCI!5e0!3m2!1sen!2sua!4v1713192868748!5m2!1sen!2sua" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Житловий комплекс Ґорґани Location"
                className="w-full h-full"
            ></iframe>
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col">
            {/* + and - buttons as before */}
            </div>

            {/* Google logo */}
            <div className="absolute bottom-1 left-1 z-10">
            <img src="/api/placeholder/60/20" alt="Google Logo" className="h-5" />
            </div>

            <div className="absolute bottom-1 right-12 z-10 text-xs text-gray-600">
            <span>Дані карт ©2025 Google</span>
            </div>
        </div>
    </section>

    </div>
  );
}

export default ContactUs;