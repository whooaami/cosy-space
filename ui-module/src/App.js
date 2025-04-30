import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Additional from "./components/Additional";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import ScrollToTopButton from "./components/ScrollTopButton";
import CoworkingInfo from "./components/CoworkingInfo";
import CoworkingBenefits from "./components/CoworkingBenefits";
import Footer from './components/Footer';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <CoworkingInfo />
      <Additional />
      <CoworkingBenefits />
      <Price />
      <Reviews />
      <ContactUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
