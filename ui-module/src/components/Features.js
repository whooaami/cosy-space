import React from 'react';
import coffeeImage from '../assets/coffee-machine.jpeg';
import workspaceImage from '../assets/work-place.jpg';
import computerSetupImage from '../assets/pc-setup.jpg';

function Features() {
  return (
    <div id='home' className="w-full">
      {/* Black section with office image and description */}
      <div className="w-full bg-black py-16 md:py-24 px-4" style={{ backgroundColor: '#1D1D1D' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left side - Office image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="rounded-3xl overflow-hidden border-4 border-white">
              <img 
                src={workspaceImage} 
                alt="Cosy workspace" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right side - Text description */}
          <div className="w-full md:w-1/2 md:pl-10">
            <div className="bg-black text-white rounded-3xl border-2 border-white p-6 md:p-8" style={{ backgroundColor: '#1D1D1D' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
                Комфортний і привабливий простір
              </h2>
              <p className="text-base md:text-lg">
                Працюйте в комфортному та затишному просторі з великою кількістю природного 
                світла та зручними місцями для сидіння. Наш коворкінг створений для того, щоб 
                допомогти вам зосередитися та бути продуктивними.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* White section with "Why choose us" heading */}
      <div className="w-full bg-white py-8 flex justify-center">
        <div className="inline-block border-2 border-black p-4 md:p-6 bg-white relative -mt-12 md:-mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-black">
            Чому варто обрати Cosy Space?
          </h2>
        </div>
      </div>

      {/* Features section with two columns */}
      <div id='services' className="w-full bg-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          {/* Left column - Best services */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <div className="border-2 border-black rounded-3xl p-6 md:p-8 text-left">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500 mb-6">
                НАЙКРАЩІ ПОСЛУГИ
              </h3>
              
              {/* Internet access */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">
                  Доступ до високошвидкісного інтернету
                </h4>
                <p className="text-base">
                  Працюйте без перерв завдяки нашому надійному та швидкісному доступу до 
                  Інтернету. Наш коворкінг має пропускну здатність, необхідну для роботи.
                </p>
              </div>
              
              {/* Conveniences */}
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Зручності
                </h4>
                <p className="text-base">
                  Скористайтеся нашими зручностями, які полегшать вам роботу: тенісний стіл, зона 
                  відпочинку/PlayStation 5, кава та кухонна техніка. У нашому коворкінгу є все необхідне для 
                  продуктивної роботи.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Images */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="flex flex-col h-full">
              {/* Upper image */}
              <div className="mb-4 md:mb-8 rounded-3xl overflow-hidden border-2 border-black">
                <img 
                  src={computerSetupImage} 
                  alt="Computer Workstation" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Lower image */}
              <div className="rounded-3xl overflow-hidden border-2 border-black">
                <img 
                  src={coffeeImage} 
                  alt="Coffee Machine" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;