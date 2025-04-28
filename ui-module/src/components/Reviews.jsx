import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Reviews() {
  const testimonials = [
    {
      id: 1,
      name: "William Anderson",
      title: "Web Designer",
      avatar: "https://gravatar.com/images/homepage/avatar-01.png",
      rating: 5,
      text: "OceanWP theme has helped my WooCommerce website. This template lets me start a camera store and customize it all in minutes."
    },
    {
      id: 2,
      name: "Mark Wolf",
      title: "Web Designer",
      avatar: "https://gravatar.com/images/homepage/avatar-04.png",
      rating: 5,
      text: "OceanWP WordPress theme has really helped propel my eCommerce website. With the use of templates, I can start my brand new store within minutes and customize it completely from top to bottom."
    },
    {
      id: 3,
      name: "Olivia Rodriguez",
      title: "Web Designer",
      avatar: "https://gravatar.com/images/homepage/avatar-02.png",
      rating: 5,
      text: "OceanWP WordPress theme has really helped propel my eCommerce website. With the use of templates, I can start my brand new store within minutes and customize it completely from top to bottom."
    },
    {
      id: 4,
      name: "Emma Johnson",
      title: "Web Designer",
      avatar: "https://gravatar.com/images/homepage/avatar-07.png",
      rating: 5,
      text: "OceanWP theme has helped my WooCommerce website. This template lets me start a camera store and customize it all in minutes."
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

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
        {/* Заголовок секції */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-[#eeba2b] font-medium mb-2 uppercase tracking-wider" data-aos="fade-up">
            ВІДГУКИ
          </h1>
          <h1 className="text-4xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="100">
            Що про нас говорять
          </h1>
        </div>

        {/* Сітка відгуків */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm"
              data-aos="fade-up"
              data-aos-delay={testimonial.id * 100}
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
