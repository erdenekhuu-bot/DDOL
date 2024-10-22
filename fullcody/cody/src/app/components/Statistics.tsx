"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "../page";

export const Statistics = function () {
  const [getSatatistic, setStatistic] = useState([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/abouts?populate=*",
        header_api
      );
      setStatistic(response.data.data[0].statistic);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  const [web, setWeb] = useState(0);
  const [user, setUser] = useState(0);
  const [partner, setPartner] = useState(0);
  const [feature, setFeature] = useState(0);
  const [product, setProduct] = useState(0);
  const [brand, setBrand] = useState(0);
  let interval: any = null;

  useEffect(() => {
    interval = setInterval(() => {
      setWeb((seconds) => {
        if (seconds >= 100) {
          clearInterval(interval);
          return seconds;
        }
        return seconds + 10;
      });
      setUser((seconds) => {
        if (seconds >= 1400000) {
          clearInterval(interval);
          return seconds;
        }
        return seconds + 100000;
      });
      setPartner((seconds) => {
        if (seconds >= 500) {
          clearInterval(interval);
          return seconds;
        }
        return seconds + 100;
      });
      setFeature((seconds) => {
        if (seconds >= 200) {
          clearInterval(interval);
          return seconds;
        }
        return seconds + 100;
      });
      setProduct((seconds) => {
        if (seconds >= 600000) {
          clearInterval(interval);
          return seconds;
        }
        return seconds + 100000;
      });
      setBrand((seconds) => {
        if (seconds >= 2700) {
          clearInterval(interval);
          return seconds;
        }
        return seconds + 100;
      });
    }, 100);
  }, []);

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
          <p className="font-bold text-[60px] text-white">+{web}</p>
          <p className="text-gray-300 text-2xl">
            Хэрэглэгч байгууллага (цахим худалдааны сайт)
          </p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">USERS</p>
          <p className="font-bold text-[60px] text-white">+{user}</p>
          <p className="text-gray-300 text-2xl">Хэрэглэгчид</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">PARTNERS</p>
          <p className="font-bold text-[60px] text-white">+{partner}</p>
          <p className="text-gray-300 text-2xl">Харилцагчид</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">FEATURES</p>
          <p className="font-bold text-[60px] text-white">+{feature}</p>
          <p className="text-gray-300 text-2xl">Худалдааны боломж</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">PRODUCTS</p>
          <p className="font-bold text-[60px] text-white">+{product}</p>
          <p className="text-gray-300 text-2xl">Бүтээгдэхүүн</p>
        </div>
        <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
          <p className="text-end font-bold text-gray-100">BRANDS</p>
          <p className="font-bold text-[60px] text-white">+{brand}</p>
          <p className="text-gray-300 text-2xl">Брендүүд</p>
        </div>
      </div>
    </section>
  );
};
