import '../App.css';
import spaceImage from '../assets/space.jpg';
import whiteLogoImage from '../assets/black-logo-1.png';
import bookNowImage from '../assets/book-now.png';
import officeImage from '../assets/office.png';

function Hero() {
  return (
    <div className="relative w-full flex flex-col">
      {/* Hero section with background image */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${spaceImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10 px-4">
          {/* House icon */}
          <div className="mb-2">
            <img
              src={officeImage}
              alt="Office"
              className="w-32 md:w-40 lg:w-48"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-light mt-2 mb-6">
            NEED A PLACE TO WORK?
          </h1>
          
          {/* Logo */}
          <div className="mt-4">
            <img 
              src={whiteLogoImage} 
              alt="Cosy Space Logo" 
              className="w-48 md:w-64 lg:w-72" 
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="w-full bg-white py-16 flex flex-col items-center">
        {/* Yellow card */}
        <div
          className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-[750px] p-6 md:p-8 text-center text-white shadow-lg relative -mt-32 md:-mt-40 rounded-lg"
          style={{ backgroundColor: '#eeba2b' }}
        >
          {/* Book Now button */}
          <div className="absolute top-4 right-4 w-24 md:w-32 lg:w-36">
            <img
              src={bookNowImage}
              alt="Book Now"
              className="w-full"
            />
          </div>
          
          {/* Co-working heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mt-4 mb-2">CO-WORKING</h2>
          
          {/* Divider */}
          <div className="my-4 border-t border-white w-1/3 mx-auto"></div>
          
          {/* Ukrainian text */}
          <p className="mt-2 text-xl md:text-2xl font-light">
            ЗАТИШНИЙ<br />
            ПРОСТІР ДЛЯ<br />
            ТВОГО РОЗВИТКУ!
          </p>
          
          {/* Divider */}
          <div className="my-4 border-t border-white w-1/3 mx-auto"></div>
          
          {/* Contact info */}
          <div className="mt-6">
            <div className="bg-black text-white py-2 px-8 inline-block">
              <div className="text-sm md:text-base">+380 67 581 43 80</div>
              <div className="text-xs md:text-sm">COSY-SPACE.COM</div>
            </div>
          </div>
        </div>
        
        {/* Ukrainian heading */}
        <div className="w-full max-w-4xl mx-auto mt-20 px-4 text-center">
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
          
          <div className="w-full max-w-md mx-auto border-t border-gray-300 mt-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;