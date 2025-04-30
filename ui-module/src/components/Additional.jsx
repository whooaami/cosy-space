import React from 'react';
import 'aos/dist/aos.css';

import workspacesImage from '../assets/workspaces.jpg';
import securityImage from '../assets/security-system.webp';

function Additional() {
  return (
    <div className="w-full min-h-screen bg-[#1D1D1D] py-10">
      <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        <section
          className="border border-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/2 text-white text-left" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-2xl font-bold mb-4">РОБОЧІ МІСЦЯ</h2>
            <ul className="space-y-2 text-base">
              <li>• Індивідуальні місця в Open Space</li>
              <li>• Кімната для переговорів на 2 особи / Skype Room</li>
              <li>• Надійний оптоволоконний інтернет Astra</li>
              <li>• Комфортні столи 130x70 та зручні крісла Barsky</li>
              <li>• Безперебійне живлення всіх робочих місць</li>
              <li>• Можливість оренди ПК</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img
              src={workspacesImage}
              alt="Робочі місця в Open Space: зручні столи і крісла для продуктивної роботи"
              className="w-full rounded-2xl border border-white object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>
        </section>

        <section
          className="border border-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/2 text-white text-left" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-2xl font-bold mb-4">БЕЗПЕКА</h2>
            <ul className="space-y-2 text-base">
              <li>• Охорона 24/7 – SHERIFF</li>
              <li>• Відеоспостереження</li>
              <li>• Біометричний замок</li>
              <li>• Ajax Fireprotect</li>
              <li>• Дизельний генератор на випадок блекауту</li>
              <li>• Стабілізатор напруги</li>
              <li>• Рекуперація повітря</li>
              <li>• Кондиціонування</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img
              src={securityImage}
              alt="Системи безпеки коворкінгу: охорона 24/7, відеоспостереження та біометричні замки"
              className="w-full rounded-2xl border border-white object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Additional;
