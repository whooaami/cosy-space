import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import coffeeImage from '../assets/coffee-machine.jpeg';
import workspaceImage from '../assets/work-place.jpg';
import computerSetupImage from '../assets/pc-setup.jpg';
import eventsImage from '../assets/team-events.jpg';

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div id='home' className="w-full">
      <div className="w-full bg-black py-16 md:py-24 px-4" style={{ backgroundColor: '#1D1D1D' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

          <div className="w-full md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <div className="rounded-3xl overflow-hidden border-4 border-white">
              <img 
                src={workspaceImage} 
                alt="Cosy workspace" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-10" data-aos="fade-left">
            <div className="bg-black text-white rounded-3xl border-2 border-white p-6 md:p-8" style={{ backgroundColor: '#1D1D1D' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4 text-left">
                Комфортний і привабливий простір
              </h2>
              <p className="text-base md:text-lg text-left">
                Працюйте в комфортному та затишному просторі з великою кількістю природного 
                світла та зручними місцями для сидіння. Наш коворкінг створений для того, щоб 
                допомогти вам зосередитися та бути продуктивними.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id='services' className="w-full bg-white py-8 flex justify-center" data-aos="zoom-in">
        <div className="inline-block border-2 border-black p-4 md:p-6 bg-white relative -mt-12 md:-mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-black">
            Чому варто обрати Cosy Space?
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] py-16">
        <div 
          className="border-2 border-black rounded-[40px] overflow-hidden flex flex-col lg:flex-row relative bg-white"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 z-10 text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-6">НАЙКРАЩІ ПОСЛУГИ</h2>

            <div className="mb-8" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Доступ до високошвидкісного інтернету</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Працюйте без перерв завдяки нашому надійному та швидкісному доступу до Інтернету. 
                Наш коворкінг має пропускну здатність, необхідну для роботи.
              </p>
              <div className="lg:hidden mt-4">
                <img 
                  src={computerSetupImage} 
                  alt="Person working" 
                  className="w-full max-w-xs mx-auto rounded-2xl shadow object-cover h-40" 
                />
              </div>
            </div>

            <div className="mb-8" data-aos="fade-right" data-aos-delay="200">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Зручності</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Скористайтеся нашими зручностями, які полегшать вам роботу: тенісний стіл, зона 
                відпочинку/PlayStation 5, кава та кухонна техніка. У нашому коворкінгу є все необхідне для 
                продуктивної роботи.
              </p>
              <div className="lg:hidden mt-4">
                <img 
                  src={coffeeImage} 
                  alt="Coffee" 
                  className="w-full max-w-xs mx-auto rounded-2xl shadow object-cover h-40" 
                />
              </div>
            </div>

            <div data-aos="fade-right" data-aos-delay="300">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Події та заходи</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Спілкуйтеся з іншими членами та створюйте спільноту на наших подіях і заходах. Наш 
                коворкінг — чудове місце для знайомства з новими людьми та вивчення нового.
              </p>
              <div className="lg:hidden mt-4">
                <img 
                  src={eventsImage} 
                  alt="Event" 
                  className="w-full max-w-xs mx-auto rounded-2xl shadow object-cover h-40" 
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative hidden lg:block h-full min-h-[520px]" data-aos="zoom-in-left">
            <img 
              src={computerSetupImage} 
              alt="Person working" 
              className="absolute top-[30px] right-[5px] w-[320px] h-[240px] object-cover rounded-[20px] shadow-xl z-10"
            />
            <img 
              src={coffeeImage} 
              alt="Coffee" 
              className="absolute top-[220px] right-[100px] w-[310px] h-[230px] object-cover rounded-[20px] shadow-xl z-20"
            />
            <img 
              src={eventsImage} 
              alt="Event" 
              className="absolute top-[390px] right-[5px] w-[340px] h-[250px] object-cover rounded-[20px] shadow-xl z-10"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Features;
