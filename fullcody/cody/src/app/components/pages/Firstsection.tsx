"use client";
import { useState, useEffect } from "react";
import phone_background from "../../../app/images/phone_template.png";
import pad_background from "../../../app/images/pad_template.png";
import bacgrkound_img from "../../../app/images/background_image.jpg";
import Image from "next/image";
import { mobilearray } from "../../json/image";
import { array } from "../../json/image";
import { Button } from "antd";

export const Firstsection = function () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [array.length]);
  return (
    <section
      className="pt-36 pb-10 bg-cover bg-no-repeat mobilecustom:bg-center flex justify-around items-center mobilecustom:block mobilecustom:pt-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bacgrkound_img.src})`,
      }}
    >
      <div className="w-56 overflow-hidden mobilecustom:hidden">
        <div className="relative">
          <Image
            src={phone_background}
            width={900}
            height={900}
            alt=""
            objectFit="cover"
            className="absolute inset-0 z-20"
          />
          <div className="overflow-hidden z-0 relative">
            <div className="flex sliding">
              {mobilearray.map((image: any, index: number) => (
                <Image
                  key={index}
                  src={image}
                  width={800}
                  height={800}
                  alt=""
                  className="rounded-sm mx-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-4">
        <p className="font-bold text-4xl text-customtitle  mobilecustom:mx-auto">
          Өөрийн цахим дэлгүүрээ бүтээ!
        </p>
        <p className="my-4 text-2xl font-bold text-custombanner mobilecustom:text-sm ">
          Та онлайнаар хаана ч, хэнд ч юу ч зарж болно
        </p>
        <p className="mt-8 mb-4 mobilecustom:hidden">www.allstars.mn</p>
        <Button
          type="primary"
          className="bg-customtitle text-white p-5 mobilecustom:hidden"
        >
          Бидэнтэй холбогдох
        </Button>
      </div>
      <div className="hidden mobilecustom:flex mobilecustom:justify-center">
        <div className="relative">
          <Image
            src={phone_background}
            width={1000}
            height={1000}
            alt=""
            className="w-52 inset-0 z-20 overflow-hidden"
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
      <p className="hidden my-4 mobilecustom:flex mobilecustom:justify-center">
        www.allstars.mn
      </p>
      <div className="my-8 hidden mobilecustom:flex mobilecustom:justify-center mobilecustom:items-center">
        <Button type="primary" className="bg-customtitle text-white p-5">
          Бидэнтэй холбогдох
        </Button>
      </div>
      <div className="mobilecustom:hidden">
        <div className="relative w-96">
          <Image
            src={pad_background}
            alt=""
            width={1000}
            height={1000}
            objectFit="cover"
            className="absolute inset-0 z-20 overflow-hidden"
          />

          <div className="overflow-hidden z-0 relative">
            <div className="flex slidingpad">
              {array.map((image: any, index: number) => (
                <Image
                  key={index}
                  src={image}
                  width={1000}
                  height={1000}
                  alt=""
                  className="rounded-sm mx-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
