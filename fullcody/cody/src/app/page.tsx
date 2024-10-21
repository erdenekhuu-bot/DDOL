"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import phone_background from "../app/images/phone_template.png";
import pad_background from "../app/images/pad_template.png";
import bacgrkound_img from "../app/images/background_image.jpg";
import { Firstsection } from "./components/pages/Firstsection";
import { Thirdsection } from "./components/pages/Thirdsection";
import { Fourthsection } from "./components/pages/Fourthsection";
import { Secondsection } from "./components/pages/Secondsection";
import { Fifthsection } from "./components/pages/Fifthsection";
import Layout from "antd/es/layout/layout";
import { token } from "./types/type";
import { array } from "./json/image";
import { mobilearray } from "./json/image";

export const header_api = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [array.length]);
  return (
    <Layout>
      <Firstsection background_img={bacgrkound_img}>
        <div className="mobilecustom:hidden">
          <div className="relative w-44">
            <Image
              src={phone_background}
              width={800}
              height={800}
              alt=""
              className="inset-0 z-20 overflow-hidden"
            />
            <div className="absolute p-3 inset-0 z-0 rounded-sm">
              <Image
                src={mobilearray[currentImageIndex]}
                width={800}
                height={800}
                alt=""
                className="transition-opacity duration-500 ease-in-out rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="text-center p-4">
          <p className="font-bold text-4xl  text-customtitle">
            Өөрийн цахим дэлгүүрээ бүтээ!
          </p>
          <p className="my-4 text-2xl text-custombanner">
            Та онлайнаар хаана ч, хэнд ч юу ч зарж болно
          </p>
          <p className="mt-8 mb-4 mobilecustom:hidden">www.allstars.mn</p>
        </div>
        <div className="hidden mobilecustom:flex mobilecustom:justify-center">
          <Image
            src={phone_background}
            width={1000}
            height={1000}
            alt=""
            className="w-52"
          />
        </div>
        <p className="hidden my-8 mobilecustom:flex mobilecustom:justify-center">
          www.allstars.mn
        </p>
        <div className="mobilecustom:hidden">
          <div className="relative w-96">
            <Image
              src={pad_background}
              alt=""
              objectFit="cover"
              className="inset-0 z-20 overflow-hidden"
            />
            <div className="absolute p-3 inset-0 z-0 rounded-sm">
              <Image
                src={array[currentImageIndex]}
                width={800}
                height={800}
                alt=""
                className="transition-opacity duration-500 ease-in-out rounded-sm"
              />
            </div>
          </div>
        </div>
      </Firstsection>
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
    </Layout>
  );
}
