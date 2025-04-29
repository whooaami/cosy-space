import React from 'react';

import workPlaceImage from '../assets/work-place.jpg';
import gorganyImage from '../assets/gorgany.jpeg';
import gorgany2Image from '../assets/gorgany2.jpeg';
import playstationImage from '../assets/ps5.webp';
import manWorkingImage from '../assets/workspaces.jpg';
import coffeeMachineImage from '../assets/coffee-machine.jpeg';

function CoworkingBenefits() {
    return (
        <div id='advantages' className="w-full bg-white">
            <div
                className="relative w-full h-[25vh] bg-cover"
                style={{
                    backgroundImage: `url(${workPlaceImage})`,
                    backgroundPosition: 'center 65%'
                }}
                data-aos="fade"
                data-aos-duration="1000"
            >
                <div className="absolute inset-0 bg-[#1D1D1D] opacity-80"></div>
                <div className="absolute inset-0 flex items-center">
                    <h1
                        className="text-white text-3xl md:text-4xl lg:text-5xl font-bold px-4 md:px-8 lg:px-16"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="800"
                    >
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
                        <p
                            className="text-base md:text-lg leading-relaxed md:leading-loose"
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="500"
                        >
                            Ми поєднуємо комфорт сучасного офісу з невимушеною атмосферою, що сприяє продуктивній роботі та натхненню.
                        </p>

                        <p
                            className="text-base md:text-lg leading-relaxed md:leading-loose"
                            data-aos="fade-right"
                            data-aos-delay="350"
                            data-aos-duration="500"
                        >
                            Фіксоване робоче місце, з можливістю оренди ПК, налаштування освітлення під власні потреби.
                        </p>

                        <p
                            className="text-base md:text-lg leading-relaxed md:leading-loose"
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="500"
                        >
                            Велика кількість місць для авто з системою управління через додаток.
                        </p>

                        <p
                            className="text-base md:text-lg leading-relaxed md:leading-loose"
                            data-aos="fade-right"
                            data-aos-delay="450"
                            data-aos-duration="500"
                        >
                            Прибирання та догляд робочих місць.
                        </p>

                        <p
                            className="text-base md:text-lg leading-relaxed md:leading-loose"
                            data-aos="fade-right"
                            data-aos-delay="500"
                            data-aos-duration="500"
                        >
                            Зручна кухня з необхідним обладнанням, кава та чай.
                        </p>

                        <p
                            className="text-base md:text-lg leading-relaxed md:leading-loose"
                            data-aos="fade-right"
                            data-aos-delay="550"
                            data-aos-duration="500"
                        >
                            Лаунж зона з диваном та OLED TV, PlayStation 5, професійний тенісний стіл, колекція настільних ігор.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-2 gap-4"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div
                            className="relative rounded-lg overflow-hidden h-48"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <img src={gorgany2Image} alt="Паркомісця" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black bg-opacity-60 border border-white text-white px-4 py-2 rounded-full text-sm">
                                    Паркомісця
                                </span>
                            </div>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden h-48"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <img src={manWorkingImage} alt="Фіксоване робоче місце" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black bg-opacity-60 border border-white text-white px-4 py-2 rounded-full text-sm">
                                    Фіксоване робоче місце
                                </span>
                            </div>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden h-48"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <img src={playstationImage} alt="Зона відпочинку" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black bg-opacity-60 border border-white text-white px-4 py-2 rounded-full text-sm">
                                    Зона відпочинку
                                </span>
                            </div>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden h-48"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <img src={coffeeMachineImage} alt="Кухонна техніка" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black bg-opacity-60 border border-white text-white px-4 py-2 rounded-full text-sm">
                                    Кухонна техніка
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-12 bg-[#eeba2b] rounded-lg p-6 max-w-5xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div
                            className="flex justify-center items-center"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <img
                                src={gorganyImage}
                                alt="Будівля"
                                className="max-w-full max-h-64 md:max-h-80 rounded-lg object-cover"
                            />
                        </div>

                        <div
                            className="text-left"
                            data-aos="fade-left"
                            data-aos-delay="400"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-left">ІНФРАСТРУКТУРА</h2>
                            <ul className="space-y-2">
                                <li
                                    className="flex items-start"
                                    data-aos="fade-left"
                                    data-aos-delay="450"
                                >
                                    <span className="text-black mr-2">•</span>
                                    <span>Зручне паркування авто під шлагбаумом</span>
                                </li>
                                <li
                                    className="flex items-start"
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                >
                                    <span className="text-black mr-2">•</span>
                                    <span>2 поверхи комерційної нерухомості</span>
                                </li>
                                <li
                                    className="flex items-start"
                                    data-aos="fade-left"
                                    data-aos-delay="550"
                                >
                                    <span className="text-black mr-2">•</span>
                                    <span>Піцерія, аптеки, супермаркети, кав'ярні, кафе, салони краси, ROZETKA та інша необхідна соціальна інфраструктура</span>
                                </li>
                                <li
                                    className="flex items-start"
                                    data-aos="fade-left"
                                    data-aos-delay="600"
                                >
                                    <span className="text-black mr-2">•</span>
                                    <span>Зручна транспортна розв'язка, автовокзал 500м</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoworkingBenefits;
