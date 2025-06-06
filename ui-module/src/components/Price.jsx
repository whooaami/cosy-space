import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Price() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div id='price' className="min-h-screen bg-[#1D1D1D] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-center text-[#eeba2b] text-2xl md:text-4xl font-bold my-8 md:my-12"
          data-aos="fade-up"
        >
          ЦІНОВА ПОЛІТИКА
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div
            className="border border-white rounded-3xl p-8 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">Starter</h2>
            <p className="text-center text-xl md:text-2xl font-bold mb-6">$100/міс</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-8 flex-grow text-left">
              <li>Закріплене робоче місце за резидентом</li>
              <li>Надання високошвидкісного інтернет-з'єднання</li>
              <li>Можливість використання кухонного обладнання</li>
              <li>Забезпечення офісним обладнанням та доступ до зони відпочинку</li>
              <li>Регулярне прибирання робочого простору</li>
              <li>Безкоштовні напої: вода, кава та інше</li>
              <li>Закритий паркувальний майданчик</li>
            </ul>
            
            <button className="bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition">
              JOIN NOW
            </button>
          </div>

          <div
            className="bg-[#eeba2b] border border-white text-black rounded-3xl p-8 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">Pro</h2>
            <p className="text-center text-xl md:text-2xl font-bold mb-6">$150/міс</p>
            
            <ul className="list-disc pl-6 space-y-2 mb-8 flex-grow text-left">
              <li>Закріплене робоче місце за резидентом</li>
              <li>Надання високошвидкісного інтернет-з'єднання</li>
              <li>Можливість використання кухонного обладнання</li>
              <li>Забезпечення офісним обладнанням та доступ до зони відпочинку</li>
              <li>Регулярне прибирання робочого простору</li>
              <li>Безкоштовні напої: вода, кава та інше</li>
              <li>Закритий паркувальний майданчик</li>
              <li>ПК та 2 монітори</li>
            </ul>
            
            <button className="bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition">
              JOIN NOW
            </button>
          </div>
        </div>

        <div
          className="mb-12 text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-[#eeba2b] text-2xl md:text-3xl font-bold mb-4">FAQ</h2>
          <h3 className="text-[#eeba2b] text-xl md:text-2xl font-bold mb-6">ПОШИРЕНІ ЗАПИТАННЯ</h3>
          
          <div className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="font-bold mb-2">Чи є можливість запаркувати авто?</h4>
              <ul className="list-disc pl-6">
                <li>Так, для резидентів коворкінгу надається доступ до закритого паркувального майданчика, де ви завжди знайдете вільне місце.</li>
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="500">
              <h4 className="font-bold mb-2">Які години роботи коворкінгу?</h4>
              <ul className="list-disc pl-6">
                <li>Надається доступ до коворкінгу з 08:00 до 22:00, але ми завжди раді піти на зустріч щодо гнучкого графіку.</li>
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="600">
              <h4 className="font-bold mb-2">Що входить у вартість оренди ПК до робочого місця?</h4>
              <ul className="list-disc pl-6">
                <li>Комплект ПК включає системний блок з intel i5 процесором, 16Gb DDR5, 500Gb SDD, 2TB HDD, 2 монітори DELL, мишка, клавіатура, навушники.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
