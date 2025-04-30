import React from "react";

import avatar1 from "../assets/review-images/yura-avatar.webp";
import avatar2 from "../assets/review-images/vira-avatar.webp";
import avatar3 from "../assets/review-images/pavlo-avatar.webp";
import avatar4 from "../assets/review-images/andriy-avatar.webp";

function Reviews() {
  const testimonials = [
    {
      id: 1,
      name: "Юра",
      title: "CEO of IT company",
      avatar: avatar1,
      rating: 5,
      text: "Люблю це місце! Приємно, затишно та стильно. Є куточки, де можна розвантажитись від роботи різноманітним дозвіллям. Чудова інфраструктура, з кафе, кав'ярнями, піцеріями, та маркетами. Привабливі тарифи та можливість оренди ПК. Безпека та гнучкий доступ роботи. Рекомендую для продуктивного робочого дня!"
    },
    {
      id: 2,
      name: "Віра",
      title: "Web Designer",
      avatar: avatar2,
      rating: 5,
      text: "Сучасний і комфортний простір для роботи. Є все необхідне для продуктивного дня - безлімітна кава, безперебійне живлення на випадок блекаутів і швидкий інтернет. Теніс, лего, настільні ігри - все, що хочеш, якщо не хочеш працювати :) Щиро рекомендую, якщо шукаєте  класний і сучасний коворкінг для себе чи невеликої команди за адекватні гроші."
    },
    {
      id: 3,
      name: "Павло",
      title: "e-Learning developer",
      avatar: avatar3,
      rating: 5,
      text: "Простір продуманий до дрібниць: зручні робочі місця, швидкий інтернет, тиша — все, що потрібно для продуктивної роботи. Приємна атмосфера, привітний персонал і завжди чисто. Є зони для відпочинку та кухня з кавою, що особливо радує під час насиченого робочого дня. Також великий плюс — розташування та гнучкі тарифи. Ідеальне місце як для фрилансерів, так і для команд. Рекомендую!"
    },
    {
      id: 4,
      name: "Андрій",
      title: "QA Engineer",
      avatar: avatar4,
      rating: 5,
      text: "Рекомендую коворкінг Сosy Space як один з його користувачів! Комфортний робочий простір з усім необхідним обладнанням, відпочинковою зоною та привітними, хорошими людьми :) Найкращі рекомендації!"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-[#eeba2b] font-medium mb-2 uppercase tracking-wider" aria-label="Відгуки">
            ВІДГУКИ
          </h1>
          <h2 className="text-4xl font-bold text-gray-900" aria-label="Що про нас говорять">
            Що про нас говорять
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
