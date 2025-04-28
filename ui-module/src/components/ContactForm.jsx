import React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {

  const apiKey = process.env.REACT_APP_WEB3FORMS_API_KEY;

  const [result, setResult] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    
    formData.append("access_key", apiKey);
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Form Submitted Successfully!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <section className="py-12 px-4" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="bg-indigo-100 rounded-lg overflow-hidden">
            <div className="md:flex">
              {/* Left side - Contact info */}
              <div className="md:w-2/5 p-8" data-aos="fade-right">
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
                      <h4 className="text-indigo-500 font-medium text-left">ADDRESS</h4>
                      <p className="text-gray-600">Львів, Стрийська 113Г</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex items-start">
                    <div className="bg-indigo-500 text-white p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-500 font-medium text-left">EMAIL</h4>
                      <p className="text-gray-600">cosyspace.lviv@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex items-start">
                    <div className="bg-indigo-500 text-white p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-500 font-medium text-left">PHONE</h4>
                      <p className="text-gray-600">+380 (96) 590 02 84</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-500 font-medium text-left">PHONE</h4>
                      <p className="text-gray-600">+380 (67) 581 43 80</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Form */}
              <div className="md:w-3/5 p-8" data-aos="fade-left">
                <p className="text-gray-600 mb-4">
                  Please enable JavaScript in your browser to complete this form.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2 text-left">Full Name *</label>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Name"
                          className="w-full p-3 border border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <input
                          type="text"
                          name="Surname"
                          placeholder="Lastname"
                          className="w-full p-3 border border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2 text-left">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder='example@gmail.com'
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2 text-left">Message *</label>
                    <textarea
                      name="message"
                      placeholder='Typing...'
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-500 text-white font-semibold py-3 px-6 rounded hover:bg-indigo-600 transition"
                  >
                    Submit
                  </button>
                  {result && (
                    <p className="mt-4 text-sm text-gray-700">
                      {result}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 flex justify-center" data-aos="zoom-in-up">
        <div className="relative rounded-lg overflow-hidden shadow-lg w-[65%]">

            {/* Map iframe */}
            <div className="w-full h-96">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20604.516580312607!2d24.0207569!3d49.794252799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7104eb5f353%3A0xf958f5a38225d2f2!2sCoworking%20-%20Cosy%20Space!5e0!3m2!1suk!2sua!4v1745563562362!5m2!1suk!2sua" 
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

export default ContactForm;
