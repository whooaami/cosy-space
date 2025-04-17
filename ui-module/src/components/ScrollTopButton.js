import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Показати кнопку, коли прокрутили більше ніж 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#eeba2b] text-white p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 z-50"
        aria-label="Повернутись вгору"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    )
  );
}

export default ScrollToTopButton;
