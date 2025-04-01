import '../App.css';
import spaceImage from '../assets/space.jpg';

function Hero() {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Верхня половина з фоновим зображенням */}
      <div
        className="relative w-full h-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${spaceImage})` }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[rgba(0,0,0,0.7)] w-[1100px] h-full z-0"></div>
        
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center justify-center w-[850px] h-full text-center text-white">
          <h1 className="text-4xl">NEED A PLACE TO WORK?</h1>
          <p className="text-6xl font-bold mt-2">
            Cosy <br />
            <span className="text-yellow-500" style={{ fontFamily: 'Brittany, sans-serif' }}>space</span>
          </p>
        </div>
      </div>

      <div className="w-full h-1/2 bg-white flex items-center justify-center">
        <div
          className="absolute top-[560px] h-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-center text-white w-3/4 md:w-[750px] shadow-lg"
          style={{ backgroundColor: '#dfaa04' }}
        >
          <h2 className="text-4xl font-bold">CO-WORKING</h2>
          <div className="my-4 border-t-2 border-white w-1/3 mx-auto"></div>
          <p className="mt-2 text-2xl">
            ЗАТИШНИЙ <br />
            ПРОСТІР ДЛЯ <br />
            ТВОГО РОЗВИТКУ!
          </p>
          <div className="my-4 border-t-2 border-white w-1/3 mx-auto"></div>
          <div className="mt-4 bg-black w-1/3 text-white py-2 px-4 font-bold inline-block">
            +380 67 581 43 80
            <p className="mt-2 text-sm inline-block border-b-2">COSY-SPACE.COM</p>
          </div>
        </div>
        <div className="absolute top-[770px] w-full text-center text-black">
          <h3 className="text-2xl font-bold mt-4">Visit our space:</h3>
          <p className="mt-2 font-bold mt-4">вул. Стрийська 111Д, оф. 56, м. Львів</p>
        </div>
      </div>

      {/* Новий блок з темно-сірим фоном та фото зліва */}
      <div 
        className="w-full py-20"
        style={{ backgroundColor: '#1d1d1d' }}
      >
        <div className="flex items-center justify-center space-x-12 px-12"> {/* Додано px-12 для відступів */}
          {/* Ліва частина - фото */}
          <div className="w-1/2">
            <img
              src={spaceImage}  // Правильне використання імпорту зображення
              alt="Work Space"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Права частина - текст */}
          <div className="w-1/2 text-white">
            <h2 className="text-4xl font-bold mb-4">Наш коворкінг</h2>
            <p className="text-xl mb-4">
              Це ідеальне рішення для тих, хто цінує працю в комфортному та стимулюючому середовищі. Швидкий інтернет, зручні робочі місця та безпека.
            </p>
            <p className="text-lg">
              Усе це робить наш простір ідеальним вибором для фрілансерів, стартапів та бізнес-команд. Приєднуйтесь до нашої спільноти та розкривайте свій творчий потенціал разом з нами!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
