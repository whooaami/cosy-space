import React from 'react';
import { Helmet } from 'react-helmet';
import workspaceImage from '../assets/work-place.jpg';

function CoworkingInfo() {
    return (
        <>
            <Helmet>
                <title>Cosy Space - Комфортний коворкінг для роботи</title>
                <meta name="description" content="Cosy Space - сучасний та функціональний коворкінг з надійним інтернетом, зручностями та подіями для вашої продуктивності." />
                <meta name="keywords" content="коворкінг, робоче місце, комфорт, інтернет, продуктивність, зручності, події, нетворкінг" />
            </Helmet>

            <section id="services" className="w-full">
                <header className="w-full bg-black px-4 py-12 md:py-32" style={{ backgroundColor: '#1D1D1D' }}>
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative">

                        <figure className="w-full md:w-1/2 mb-8 md:mb-0 relative z-30" data-aos="fade-right">
                            <div className="rounded-3xl overflow-hidden border-4 border-white">
                                <img
                                    src={workspaceImage}
                                    alt="Сучасне робоче місце у коворкінгу Cosy Space"
                                    className="w-full h-[280px] sm:h-[350px] md:h-[500px] object-cover"
                                />
                            </div>
                            <figcaption className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full px-2 sm:px-4">
                                <div className="inline-block border-2 border-black bg-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-[60%] text-center">
                                    <h2 className="text-sm sm:text-base md:text-2xl font-bold text-black">
                                        <span className="block sm:inline">Чому варто обрати</span>{' '}
                                        <span className="block sm:inline">Cosy Space?</span>
                                    </h2>
                                </div>
                            </figcaption>
                        </figure>

                        <article className="w-full md:w-1/2 md:ml-8 relative z-20 mt-10 sm:mt-12 md:mt-0" data-aos="fade-left">
                            <div className="text-white rounded-3xl border-2 border-white px-5 py-7 sm:px-6 sm:py-8 md:px-14 md:py-12 bg-opacity-70 bg-black backdrop-blur-md" style={{ backgroundColor: '#1D1D1D' }}>
                                <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-yellow-500 mb-3 sm:mb-4 text-left">
                                    Комфортний та функціональний простір для роботи
                                </h1>
                                <p className="text-xs sm:text-sm md:text-lg text-left leading-relaxed sm:leading-normal">
                                    Простір Cosy Space створений для продуктивності: велике природне освітлення, ергономічні місця та спокійна атмосфера допоможуть зосередитися на важливому.
                                </p>
                            </div>
                        </article>
                    </div>
                </header>

                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[40vh] py-16" aria-label="Основні переваги коворкінгу">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <article className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-transparent mb-4 p-4 rounded-full transition-transform duration-300 hover:scale-110" data-aos="zoom-in" data-aos-delay="300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Надійний інтернет</h3>
                            <hr className="w-4/5 h-px bg-gray-700 my-4" data-aos="fade-right" data-aos-delay="400" />
                            <p className="text-black" data-aos="fade-up" data-aos-delay="500">
                                Швидкий та стабільний інтернет для роботи без перерв і збоїв – ідеально для розробників, дизайнерів та підприємців.
                            </p>
                        </article>

                        <article className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-transparent mb-4 p-4 rounded-full transition-transform duration-300 hover:scale-110" data-aos="zoom-in" data-aos-delay="400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Повний спектр зручностей</h3>
                            <hr className="w-4/5 h-px bg-gray-700 my-4" data-aos="fade-right" data-aos-delay="500" />
                            <p className="text-black" data-aos="fade-up" data-aos-delay="600">
                                Простір обладнаний всім необхідним: кава, кухня, зона відпочинку, PlayStation 5 та навіть тенісний стіл для перерв.
                            </p>
                        </article>

                        <article className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-transparent mb-4 p-4 rounded-full transition-transform duration-300 hover:scale-110" data-aos="zoom-in" data-aos-delay="500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Події та нетворкінг</h3>
                            <hr className="w-4/5 h-px bg-gray-700 my-4" data-aos="fade-right" data-aos-delay="600" />
                            <p className="text-black" data-aos="fade-up" data-aos-delay="700">
                                Регулярні події, воркшопи та лекції – чудова можливість для професійного зростання та нових знайомств.
                            </p>
                        </article>
                    </div>
                </section>

            </section>
        </>
    );
}

export default CoworkingInfo;
