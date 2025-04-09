import React from 'react';
import eventsImage from '../assets/team-events.jpg';
import workspacesImage from '../assets/workspaces.jpg';
import securityImage from '../assets/security-system.avif';

function Additional() {
  return (
    <div className="w-full">
      {/* Events and Activities Section */}
      <div className="w-full bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-black rounded-[40px] overflow-hidden flex flex-col md:flex-row">
            {/* Left side - Text */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Події та заходи
              </h2>
              <p className="text-base md:text-lg">
                Спілкуйтеся з іншими членами та створюйте спільноту на наших подіях і заходах. Наш коворкінг – чудове місце для знайомства з новими людьми та вивчення нового.
              </p>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full md:w-1/2">
              <img 
                src={eventsImage} 
                alt="Team events" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer */}
      <div className="w-full h-16 md:h-24 bg-white"></div>
      
      {/* Workspaces Section - Black background */}
      <div className="w-full bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white rounded-[40px] overflow-hidden flex flex-col md:flex-row">
            {/* Left side - Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                РОБОЧІ МІСЦЯ
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Індивідуальні місця в Open Space</li>
                <li>Кімната для переговорів на 2 особи / Skype Room</li>
                <li>Надійний оптоволоконний інтернет Astra</li>
                <li>Комфортні столи 130x70 та зручні крісла Barsky</li>
                <li>Безперебійне живлення всіх робочих місць</li>
                <li>Можливість оренди ПК</li>
              </ul>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full md:w-1/2">
              <img 
                src={workspacesImage} 
                alt="Working spaces" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer */}
      <div className="w-full h-16 md:h-24 bg-black"></div>
      
      {/* Security Section - Black background */}
      <div className="w-full bg-black py-16 px-4 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white rounded-[40px] overflow-hidden flex flex-col md:flex-row-reverse">
            {/* Right side - Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                БЕЗПЕКА
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Охорона 24/7 – SHERIFF</li>
                <li>Відеоспостереження</li>
                <li>Біометричний замок</li>
                <li>Ajax Fireprotect</li>
                <li>Дизельний генератор на випадок блекауту</li>
                <li>Стабілізатор напруги</li>
                <li>Рекуперація повітря</li>
                <li>Кондиціонування</li>
              </ul>
            </div>
            
            {/* Left side - Image */}
            <div className="w-full md:w-1/2">
              <img 
                src={securityImage} 
                alt="Security systems" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Additional;