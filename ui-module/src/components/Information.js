import React from 'react';

import coffeeImage from '../assets/coffee-machine.jpeg';
import workspaceImage from '../assets/work-place.jpg';
import computerSetupImage from '../assets/pc-setup.jpg';

function Information() {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Amenities Section */}
      <div className="py-8 px-4 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="font-bold text-lg uppercase mb-6 text-center md:text-left">КУХНЯ</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Кава</li>
              <li>Чай</li>
              <li>Кухонна техніка</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg uppercase mb-6 text-center md:text-left">ПАРКОМІСЦЯ</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Велика кількість місць для авто під шлагбаумом з системою управління через додаток</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg uppercase mb-6 text-center md:text-left">ІНШЕ</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Прибирання та догляд робочих місць</li>
              <li>Можливість налаштування освітлення під свої потреби</li>
            </ul>
          </div>
        </div>
        
        {/* Image Collage */}
        <div className="relative mt-12 mb-8 h-[580px] w-full">
          {/* Left top office photo */}
          <div className="absolute top-5 left-28 z-10 w-80 h-52 shadow-md border-4 border-white">
            <img src="/api/placeholder/320/208" alt="Office space" className="w-full h-full object-cover" />
          </div>
          
          {/* Center plant photo */}
          <div className="absolute top-12 left-1/3 z-20 w-96 h-52 shadow-md border-4 border-white">
            <img src="/api/placeholder/384/208" alt="Plants and office area" className="w-full h-full object-cover" />
          </div>
          
          {/* Right top person working */}
          <div className="absolute top-0 right-16 z-10 w-64 h-48 shadow-md border-4 border-white">
            <img src="/api/placeholder/256/192" alt="Person working at desk" className="w-full h-full object-cover" />
          </div>
          
          {/* Small wooden cabinet left */}
          <div className="absolute top-1/3 left-0 z-20 w-32 h-32 shadow-md border-4 border-white">
            <img src="/api/placeholder/128/128" alt="Wooden cabinet" className="w-full h-full object-cover" />
          </div>
          
          {/* Meeting room small */}
          <div className="absolute top-48 left-32 z-30 w-64 h-44 shadow-md border-4 border-white">
            <img src={workspaceImage} alt="Meeting room" className="w-full h-full object-cover" />
          </div>
          
          {/* Art piece */}
          <div className="absolute top-1/2 left-1/4 z-10 w-36 h-36 shadow-md border-4 border-white">
            <img src="/api/placeholder/144/144" alt="Wall art" className="w-full h-full object-cover" />
          </div>
          
          {/* Ping pong table */}
          <div className="absolute bottom-0 left-16 z-30 w-80 h-44 shadow-md border-4 border-white">
            <img src="/api/placeholder/320/176" alt="Ping pong table" className="w-full h-full object-cover" />
          </div>
          
          {/* Kitchen area */}
          <div className="absolute bottom-20 right-1/4 z-20 w-64 h-40 shadow-md border-4 border-white">
            <img src={coffeeImage} alt="Kitchen area" className="w-full h-full object-cover" />
          </div>
          
          {/* Person at workstation */}
          <div className="absolute bottom-0 right-8 z-10 w-64 h-44 shadow-md border-4 border-white">
            <img src={computerSetupImage} alt="Person at workstation" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      {/* Facilities Section - using the exact color #eeba2b */}
      <div className="w-full py-6 px-4 md:px-16 lg:px-24" style={{ backgroundColor: '#eeba2b' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg uppercase mb-4">ВІДПОЧИНОК</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Лаунж зона з диваном та OLED TV</li>
              <li>PlayStation 5</li>
              <li>Професійний тенісний стіл</li>
              <li>Колекція настільних ігор</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg uppercase mb-4">ІНФРАСТРУКТУРА</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Зручне паркування авто під шлагбаумом</li>
              <li>2 поверхи комерційної нерухомості</li>
              <li>Пiцерія, аптеки, супермаркети, кав'ярні, кафе, салони краси, ROZETKA та інша необхідна</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;