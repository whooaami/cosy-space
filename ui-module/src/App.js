import Header from "./components/Header";
import Hero from "./components/Hero";
import Additional from "./components/Additional";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import ScrollToTopButton from "./components/ScrollTopButton";
import CoworkingInfo from "./components/CoworkingInfo";
import CoworkingBenefits from "./components/CoworkingBenefits";


function App() {
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
      <ScrollToTopButton />
    </div>
  );
}

export default App;
