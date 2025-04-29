import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Additional from "./components/Additional";
import Information from "./components/Information";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import ScrollToTopButton from "./components/ScrollTopButton";
import MaintenancePage from "./components/MaintenancePage";


function App() {
  return (
    <div className="App">
      <Header />
      <MaintenancePage />
      {/* <Hero />
      <Features />
      <Additional />
      <Information />
      <Price />
      <Reviews />
      <ContactUs />
      <ScrollToTopButton /> */}
    </div>
  );
}

export default App;
