import React from "react";

const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1D1D1D] text-[#eeba2b] p-6">
      <div className="text-center max-w-xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4781/4781517.png"
          alt="Under Development"
          className="w-32 h-32 mx-auto mb-6 animate-pulse"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Технічні роботи</h1>
        <p className="text-lg md:text-xl mb-6 text-[#ffffff]">
          Ми тимчасово недоступні, оскільки проводимо оновлення нашого сервісу. Поверніться трохи пізніше!
        </p>
        <div className="text-sm text-[#ffffff]">
          Дякуємо за розуміння 💻
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
