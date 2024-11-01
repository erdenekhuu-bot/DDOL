"use client";
import { useState, useEffect } from "react";
import phone_background from "../../../app/images/phone_template.png";
import pad_background from "../../../app/images/pad_template.png";
import bacgrkound_img from "../../../app/images/background_image.jpg";
import Image from "next/image";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { header_api } from "@/app/page";
import { Autoplay } from "swiper/modules";

export const Firstsection = function () {
  const [getImage, setImage] = useState<
    {
      id: number;
      tablet: any;
      phone: any;
    }[]
  >([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://192.168.1.19:1337/api/homes?populate[sliding1][populate]=*",
        header_api
      );
      setImage(response.data.data[0].sliding1);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <section
      className="pt-36 pb-10 bg-cover bg-no-repeat mobilecustom:bg-center flex justify-around items-center mobilecustom:block mobilecustom:pt-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bacgrkound_img.src})`,
      }}
    >
      <div className="w-56 h-[500px] mobilecustom:hidden">
        <div className="relative p-2">
          <Image
            src={phone_background}
            width={900}
            height={900}
            alt=""
            objectFit="cover"
            className="absolute inset-0 z-20"
          />
          <div className="overflow-hidden z-0 relative">
            <Swiper
              scrollbar={{ draggable: true }}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {getImage.map((items: any) => (
                <SwiperSlide key={items.id}>
                  <img
                    src={`http://192.168.1.19:1337/${items.phone.formats?.small.url}`}
                    alt=""
                    width={800}
                    height={800}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
        <div className="relative p-6 w-64 h-[500px] overflow-hidden">
          <Image
            src={phone_background}
            alt=""
            width={1000}
            height={1000}
            objectFit="cover"
            className="w-56 absolute z-20 overflow-hidden"
          />
          <div className="overflow-hidden z-0 relative">
            <Swiper
              scrollbar={{ draggable: true }}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {getImage.map((items: any) => (
                <SwiperSlide key={items.id}>
                  <img
                    src={`http://192.168.1.19:1337/${items.phone.formats?.small.url}`}
                    alt=""
                    width={800}
                    height={800}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
        <div className="relative w-96 p-2">
          <Image
            src={pad_background}
            alt=""
            width={1000}
            height={1000}
            objectFit="cover"
            className="absolute inset-0 z-20 overflow-hidden"
          />

          <div className="overflow-hidden z-0 relative">
            <Swiper
              scrollbar={{ draggable: true }}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {getImage.map((items: any) => (
                <SwiperSlide key={items.id}>
                  <img
                    src={`http://192.168.1.19:1337/${items.tablet.formats?.small.url}`}
                    alt=""
                    width={800}
                    height={800}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
