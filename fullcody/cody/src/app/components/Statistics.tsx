"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "../page";
import { statistics } from "../types/type";
import Image from "next/image";
import stat from "../images/statistic.svg";

export const Customcard = function ({
  title,
  params,
}: {
  title: string;
  params: number;
}) {
  return (
    <div className="w-[550px] mx-2 py-8 border-t border-gray-800 border-opacity-30">
      <p className="text-end font-bold text-gray-100">ECOMMERCE WEBSITE</p>
      <p className="font-bold text-[60px] text-white">+{params}</p>
      <p className="text-gray-300 text-2xl">{title}</p>
    </div>
  );
};

export const Statistics = function () {
  const [getSatatistic, setStatistic] = useState<statistics>([]);

  const [web, setWeb] = useState(0);
  const [user, setUser] = useState(0);
  const [partner, setPartner] = useState(0);
  const [feature, setFeature] = useState(0);
  const [product, setProduct] = useState(0);
  const [brand, setBrand] = useState(0);
  let interval: any = null;

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
      className="absolute top-[50%] w-full mobilecustom:relative mobilecustom:rounded-xl"
      style={{
        background:
          "linear-gradient(-91.81deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 0%, rgb(77, 2, 224) 105.82%, rgb(76, 2, 224) 105.83%, rgba(75, 1, 224, 0.043) 105.84%, rgba(74, 0, 224, 0) 105.85%, rgb(74, 0, 224) 105.85%, rgb(77, 2, 224) 105.85%) left center",
      }}
    >
      <div className="relative w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={stat}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="font-bold text-3xl text-center text-white py-6">
          Статистик
        </p>
      </div>
      <div className="hidden relative mobilecustom:block">
        <Image
          src={stat}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
        />
        <p className="font-bold text-3xl text-center text-white py-6 uppercase">
          Статистик
        </p>
      </div>
      <div className="flex justify-around flex-wrap m-10 mobilecustom:justify-normal">
        <Customcard
          title="Хэрэглэгч байгууллага (цахим худалдааны сайт)"
          params={web}
        />
        <Customcard title="Хэрэглэгчид" params={user} />
        <Customcard title="Харилцагчид" params={partner} />
        <Customcard title="Худалдааны боломж" params={feature} />
        <Customcard title="Бүтээгдэхүүн" params={product} />
        <Customcard title="Брендүүд" params={brand} />
      </div>
    </section>
  );
};
