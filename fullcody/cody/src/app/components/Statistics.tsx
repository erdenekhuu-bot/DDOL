"use client";
import { useState, useEffect } from "react";

export const Statistics = function () {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let interval: any = null;

  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 100) {
            clearInterval(interval);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 10);
    }
  }, [isActive]);

  return (
    <section
      className="absolute top-[50%] w-full"
      style={{
        background:
          "linear-gradient(-91.81deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 0%, rgb(77, 2, 224) 105.82%, rgb(76, 2, 224) 105.83%, rgba(75, 1, 224, 0.043) 105.84%, rgba(74, 0, 224, 0) 105.85%, rgb(74, 0, 224) 105.85%, rgb(77, 2, 224) 105.85%) left center",
      }}
    >
      <p className="font-bold text-3xl text-center text-white py-6">
        Статистик
      </p>
      <div className="flex justify-around flex-wrap m-10">
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">ECOMMERCE WEBSITE</p>
          <p className="font-bold text-[60px] text-white">+100</p>
          <p className="text-gray-300 text-2xl">
            Хэрэглэгч байгууллага (цахим худалдааны сайт)
          </p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">USERS</p>
          <p className="font-bold text-[60px] text-white">+1400000</p>
          <p className="text-gray-300 text-2xl">Хэрэглэгчид</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">PARTNERS</p>
          <p className="font-bold text-[60px] text-white">+1500</p>
          <p className="text-gray-300 text-2xl">Харилцагчид</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">FEATURES</p>
          <p className="font-bold text-[60px] text-white">+200</p>
          <p className="text-gray-300 text-2xl">Худалдааны боломж</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">PRODUCTS</p>
          <p className="font-bold text-[60px] text-white">+600000</p>
          <p className="text-gray-300 text-2xl">Бүтээгдэхүүн</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">BRANDS</p>
          <p className="font-bold text-[60px] text-white">+2700</p>
          <p className="text-gray-300 text-2xl">Брендүүд</p>
        </div>
      </div>
    </section>
  );
};
