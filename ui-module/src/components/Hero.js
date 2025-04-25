import '../App.css';
import { motion } from 'framer-motion';
import spaceImage from '../assets/space.webp';
import whiteLogoImage from '../assets/black-logo-1.png';
import bookNowImage from '../assets/book-now.png';
import officeImage from '../assets/office.png';

function Hero() {
  return (
    <div className="relative w-full flex flex-col">
      <div
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${spaceImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div className="relative h-full flex flex-col items-center justify-center text-white z-10 px-4">
          <motion.img
            src={officeImage}
            alt="Office"
            className="w-32 md:w-40 lg:w-48 mb-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-light mt-2 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            NEED A PLACE TO WORK?
          </motion.h1>

          <motion.img
            src={whiteLogoImage}
            alt="Cosy Space Logo"
            className="w-48 md:w-64 lg:w-72 mt-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>
      </div>

      <div className="w-full bg-white py-16 flex flex-col items-center">
        <motion.div
          className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-[750px] p-6 md:p-8 border-2 border-white text-center text-white shadow-lg relative -mt-32 md:-mt-40 rounded-3xl"
          style={{ backgroundColor: '#eeba2b' }}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-4 right-4 w-24 md:w-32 lg:w-36"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img src={bookNowImage} alt="Book Now" className="w-full" />
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            CO-WORKING
          </motion.h2>

          <div className="my-4 border-t border-white w-1/3 mx-auto" />

          <motion.p
            className="mt-2 text-xl md:text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            ЗАТИШНИЙ<br />
            ПРОСТІР ДЛЯ<br />
            ТВОГО РОЗВИТКУ!
          </motion.p>

          <div className="my-4 border-t border-white w-1/3 mx-auto" />

          <motion.div
            className="mt-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="bg-black text-white py-2 px-8 inline-block">
              <div className="text-sm md:text-base">+380 67 581 43 80</div>
              <div className="text-xs md:text-sm">COSY-SPACE.COM</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl mx-auto mt-20 px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
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
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
