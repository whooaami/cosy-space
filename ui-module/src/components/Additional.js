import React from 'react';
import workspacesImage from '../assets/workspaces.jpg';
import securityImage from '../assets/security-system.avif';

function Additional() {
  return (
    <div className="w-full">  
      {/* Spacer */}
      <div className="w-full h-16 md:h-24 bg-white"></div>
      
      {/* Workspaces Section - Black background */}
      <div id='advantages' className="w-full bg-black py-16 px-4" style={{ backgroundColor: '#1D1D1D' }}>
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white rounded-[40px] overflow-hidden flex flex-col md:flex-row">
            {/* Left side - Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white text-left">
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
      <div className="w-full h-16 md:h-24 bg-black" style={{ backgroundColor: '#1D1D1D' }}></div>
      
      {/* Security Section - Black background */}
      <div className="w-full bg-black py-16 px-4 pb-32" style={{ backgroundColor: '#1D1D1D' }}>
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white rounded-[40px] overflow-hidden flex flex-col md:flex-row-reverse">
            {/* Right side - Text */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-white text-left">
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

      {/* White section with "Why choose us" heading */}
      <div className="w-full bg-white py-8 flex justify-center">
        <div className="inline-block border-2 border-black p-4 md:p-6 bg-white relative -mt-12 md:-mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-black">
            Переваги Cosy Space?
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Additional;