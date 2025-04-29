import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

import workPlaceImage from '../assets/work-place.jpg';
import gorgany2Image from '../assets/gorgany2.jpeg';
import manWorkingImage from '../assets/workspaces.jpg';
import playstationImage from '../assets/ps5.webp';
import gorganyImage from '../assets/gorgany.jpeg';

import guardSystemImage from '../assets/gallery-images/ajax.jpg';
import hallImage from '../assets/gallery-images/hall.webp';
import workPlaceImage1 from '../assets/gallery-images/work-places.jpg';
import workPlaceImage2 from '../assets/gallery-images/work-places-1.webp';
import workPlaceImage3 from '../assets/gallery-images/work-places-2.jpg';
import workPlaceImage4 from '../assets/gallery-images/work-places-3.jpg';
import workManImage1 from '../assets/gallery-images/work-man.webp';
import workManImage2 from '../assets/gallery-images/work-man-1.webp';
import workGirlImage from '../assets/gallery-images/work-girl.webp';
import mapImage from '../assets/gallery-images/mapUA.jpg';
import tennisImage from '../assets/gallery-images/tennis-players.webp';
import tvImage from '../assets/gallery-images/tv.webp';
import ps5Image from '../assets/gallery-images/ps5.jpg';
import kitchenImage1 from '../assets/gallery-images/kitchen.webp';
import coffeeMachineImage from '../assets/gallery-images/coffee-machine.jpg';
import kitchenImage2 from '../assets/gallery-images/kitchen-1.webp';
import outsideImage from '../assets/gallery-images/outside.jpg';

const images = [
  { src: guardSystemImage, alt: 'Kitchen area' },
  { src: hallImage, alt: 'Hall area' },
  { src: workPlaceImage1, alt: 'Workplace 1' },
  { src: workPlaceImage2, alt: 'Workplace 2' },
  { src: workPlaceImage3, alt: 'Workplace 3' },
  { src: workPlaceImage4, alt: 'Workplace 4' },
  { src: workManImage1, alt: 'Workman 1' },
  { src: workManImage2, alt: 'Workman 2' },
  { src: workGirlImage, alt: 'Workgirl' },
  { src: mapImage, alt: 'Map of Ukraine' },
  { src: tennisImage, alt: 'Tennis players' },
  { src: tvImage, alt: 'TV area' },
  { src: ps5Image, alt: 'PS5 area' },
  { src: kitchenImage1, alt: 'Kitchen area 1' },
  { src: coffeeMachineImage, alt: 'Coffee machine' },
  { src: kitchenImage2, alt: 'Kitchen area 2' },
  { src: outsideImage, alt: 'Outside area' },
];

function CoworkingBenefits() {
  return (
    <div id="advantages" className="w-full bg-white">
      <div
        className="relative w-full h-[25vh] bg-cover"
        style={{ backgroundImage: `url(${workPlaceImage})`, backgroundPosition: 'center 65%' }}
        data-aos="fade"
        data-aos-duration="1000"
      >
        <div className="absolute inset-0 bg-[#1D1D1D] opacity-80"></div>
        <div className="absolute inset-0 flex items-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold px-4 md:px-8 lg:px-16" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            Що ти отримуєш від спейсу
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="space-y-6 text-left max-w-[55ch] md:max-w-[65ch] lg:max-w-[75ch] px-4 md:px-0"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            <p className="text-base md:text-lg leading-relaxed md:leading-loose" data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">
              Ми поєднуємо комфорт сучасного офісу з невимушеною атмосферою, що сприяє продуктивній роботі та натхненню.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-loose" data-aos="fade-right" data-aos-delay="350" data-aos-duration="500">
              Фіксоване робоче місце, з можливістю оренди ПК, налаштування освітлення під власні потреби.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-loose" data-aos="fade-right" data-aos-delay="400" data-aos-duration="500">
              Велика кількість місць для авто з системою управління через додаток.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-loose" data-aos="fade-right" data-aos-delay="450" data-aos-duration="500">
              Прибирання та догляд робочих місць.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-loose" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
              Зручна кухня з необхідним обладнанням, кава та чай.
            </p>
            <p className="text-base md:text-lg leading-relaxed md:leading-loose" data-aos="fade-right" data-aos-delay="550" data-aos-duration="500">
              Лаунж зона з диваном та OLED TV, PlayStation 5, професійний тенісний стіл, колекція настільних ігор.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="200">
            {[
              { src: gorgany2Image, alt: 'Паркомісця' },
              { src: manWorkingImage, alt: 'Фіксоване робоче місце' },
              { src: playstationImage, alt: 'Зона відпочинку' },
              { src: coffeeMachineImage, alt: 'Кухонна техніка' },
            ].map((image, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden h-48" data-aos="zoom-in" data-aos-delay={300 + idx * 100}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black bg-opacity-60 border border-white text-white px-4 py-2 rounded-full text-sm">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#eeba2b] rounded-lg p-6 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center items-center" data-aos="zoom-in" data-aos-delay="300">
              <img src={gorganyImage} alt="Будівля" className="max-w-full max-h-64 md:max-h-80 rounded-lg object-cover" />
            </div>
            <div className="text-left" data-aos="fade-left" data-aos-delay="400">
              <h2 className="text-2xl font-bold mb-4 text-left">ІНФРАСТРУКТУРА</h2>
              <ul className="space-y-2">
                <li className="flex items-start" data-aos="fade-left" data-aos-delay="450">
                  <span className="text-black mr-2">•</span>
                  <span>Зручне паркування авто під шлагбаумом</span>
                </li>
                <li className="flex items-start" data-aos="fade-left" data-aos-delay="500">
                  <span className="text-black mr-2">•</span>
                  <span>2 поверхи комерційної нерухомості</span>
                </li>
                <li className="flex items-start" data-aos="fade-left" data-aos-delay="550">
                  <span className="text-black mr-2">•</span>
                  <span>Піцерія, аптеки, супермаркети, кав'ярні, кафе, салони краси, ROZETKA та інша необхідна соціальна інфраструктура</span>
                </li>
                <li className="flex items-start" data-aos="fade-left" data-aos-delay="600">
                  <span className="text-black mr-2">•</span>
                  <span>Зручна транспортна розв'язка, автовокзал 500м</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id='gallery' className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 max-w-7xl mx-auto">
        <div>
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
    </div>
  );
}

export default CoworkingBenefits;
