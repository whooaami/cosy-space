import '../App.css';
import spaceImage from '../assets/space.webp';
import whiteLogoImage from '../assets/white-logo-1.png';
import officeImage from '../assets/office.png';

function Hero() {
  return (
    <div className="relative w-full flex flex-col">
      {/* Hero Section Background */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-fixed transition-all duration-700 transform hover:scale-105"
        style={{ backgroundImage: `url(${spaceImage})` }}
        aria-label="Background with space theme"
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-500" />

        <div className="relative flex flex-col justify-start items-center text-white z-10 px-4 pt-20">
          <div className="flex flex-col items-center mb-16">
            <img
              src={officeImage}
              alt="Modern office workspace with ergonomic furniture"
              className="w-32 md:w-40 lg:w-48 mb-2 transition-transform transform hover:scale-105"
              data-aos="fade-up"
            />

            <h1
              className="text-xl md:text-2xl lg:text-3xl font-light mt-2 mb-6 transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              NEED A PLACE TO WORK?
            </h1>
          </div>

          <img
            src={whiteLogoImage}
            alt="Cosy Space Logo"
            className="w-48 md:w-64 lg:w-72 mt-4 transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </section>

      {/* Yellow Rectangle */}
      <section className="w-full bg-white py-16 flex flex-col items-center">
        <YellowBox />
        
        <div
          className="w-full max-w-4xl mx-auto mt-20 px-4 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8">
            Наш коворкінг
          </h2>
          <p className="text-base md:text-lg text-black max-w-3xl mx-auto">
            Це ідеальне рішення для тих, хто цінує працю в комфортному
            та стимулюючому середовищі. Швидкий інтернет, зручні робочі
            місця та безпека – усе це робить наш простір ідеальним вибором
            для фрілансерів, стартапів та бізнес-команд. Приєднуйтесь до нашої
            спільноти та розкривайте свій творчий потенціал разом з нами!
          </p>
          <div className="w-full max-w-md mx-auto border-t mt-12" style={{ borderBlockColor: '#1D1D1D' }} />
        </div>
      </section>
    </div>
  );
}

// Жовтий прямокутник як окремий компонент
const YellowBox = () => (
  <div
    className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-[750px] p-6 md:p-8 border-2 border-white text-center text-white shadow-lg relative rounded-3xl transition-all duration-700"
    style={{
      backgroundColor: '#eeba2b',
      visibility: 'visible',  // Переконатися, що елемент видимий
      opacity: 1, // Встановлює плавне відображення
      transition: 'opacity 0.5s ease-in-out', // Плавна анімація
    }}
    data-aos="fade-up"
  >
    <h2
      className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-2"
      data-aos="fade-in"
      data-aos-delay="600"
    >
      CO-WORKING
    </h2>

    <div className="my-4 border-t border-white w-1/3 mx-auto" />

    <p
      className="mt-2 text-xl md:text-2xl font-light"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      ЗАТИШНИЙ<br />
      ПРОСТІР ДЛЯ<br />
      ТВОГО РОЗВИТКУ!
    </p>

    <div className="my-4 border-t border-white w-1/3 mx-auto" />

    <div
      className="mt-6"
      data-aos="zoom-in"
      data-aos-delay="1000"
    >
      <div className="bg-black text-white py-2 px-8 inline-block">
        <div className="text-sm md:text-base">+380 67 581 43 80</div>
        <div className="text-xs md:text-sm">COSY-SPACE.COM</div>
      </div>
    </div>
  </div>
);

export default Hero;
