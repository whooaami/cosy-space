import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

import coffeeImage from '../assets/coffee-machine.jpeg';
import workspaceImage from '../assets/work-place.jpg';
import computerSetupImage from '../assets/pc-setup.jpg';

const images = [
  { src: coffeeImage, alt: 'Kitchen area' },
  { src: workspaceImage, alt: 'Workspace' },
  { src: computerSetupImage, alt: 'Computer setup' },
  { src: coffeeImage, alt: 'Kitchen area 2' },
  { src: workspaceImage, alt: 'Workspace 2' },
  { src: computerSetupImage, alt: 'Computer setup 2' },
];

const Information = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* ЗРУЧНОСТІ */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-left">
          {[
            {
              title: 'КУХНЯ',
              items: ['Кава', 'Чай', 'Кухонна техніка'],
            },
            {
              title: 'ПАРКОМІСЦЯ',
              items: ['Велика кількість місць для авто під шлагбаумом з системою управління через додаток'],
            },
            {
              title: 'ІНШЕ',
              items: ['Прибирання та догляд робочих місць', 'Можливість налаштування освітлення під свої потреби'],
            },
          ].map((section, index) => (
            <div key={index} data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase mb-4 text-left">{section.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm md:text-base">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SWIPER */}
        <div id="gallery" className="mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-xl shadow-xl"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                  data-aos="zoom-in"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ІНФРАСТРУКТУРА І ВІДПОЧИНОК */}
      <section className="bg-white pb-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="max-w-2xl mx-auto py-8 bg-yellow-400 text-black rounded-xl shadow-2xl px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: 'ВІДПОЧИНОК',
                items: [
                  'Лаунж зона з диваном та OLED TV',
                  'PlayStation 5',
                  'Професійний тенісний стіл',
                  'Колекція настільних ігор',
                ],
              },
              {
                title: 'ІНФРАСТРУКТУРА',
                items: [
                  'Зручне паркування авто під шлагбаумом',
                  '2 поверхи комерційної нерухомості',
                  'Піцерія, аптеки, супермаркети, кав’ярні, кафе, салони краси, ROZETKA тощо',
                ],
              },
            ].map((section, index) => (
              <div key={index} data-aos="fade-up">
                <h3 className="text-lg font-bold uppercase mb-4">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
