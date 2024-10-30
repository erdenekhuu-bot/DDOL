"use client";
import { useState } from "react";
import { Fea } from "../PopUp";
import featureban from "../../images/featureban.svg";
import Image from "next/image";
import { Spin } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Button } from "antd";

export const Cards = function ({
  title,
  icon,
  feature,
  customcolor,
}: {
  title: string;
  icon: string;
  feature?: string;
  customcolor?: string;
}) {
  return (
    <section className="w-[200px] h-[250px] bg-white z-20 rounded-lg p-4 m-4 relative mobilecustom:h-[200px] mobilecustom:rounded-sm">
      <div
        style={{ backgroundColor: customcolor || "purple" }}
        className="p-4 my-4 w-1/3 rounded-xl flex items-center mobilecustom:p-1"
      >
        <img
          src="https://cody.mn/84255cf7e189d5386dd3d0001103d4fa.svg"
          alt=""
          width={800}
          height={800}
        />
      </div>
      <div className="font-bold">{title}</div>
      <div className="absolute bottom-1 right-5 mobilecustom:text-[8px]">
        {feature}
      </div>
    </section>
  );
};

export const CardsMobile = function ({
  title,
  icon,
  feature,
  customcolor,
}: {
  title: string;
  icon: string;
  feature?: string;
  customcolor?: string;
}) {
  return (
    <section className="w-[200px] h-[250px] bg-white z-20 rounded-lg p-4 m-4 relative mobilecustom:h-[200px] mobilecustom:rounded-sm mobilecustom:w-[40%]">
      <div
        style={{ backgroundColor: customcolor || "purple" }}
        className="p-4 my-4 w-1/3 rounded-xl flex items-center mobilecustom:p-1"
      >
        <img
          src="https://cody.mn/84255cf7e189d5386dd3d0001103d4fa.svg"
          alt=""
          width={800}
          height={800}
        />
      </div>
      <div className="font-bold">{title}</div>
      <div className="absolute bottom-1 right-5 mobilecustom:text-[8px]">
        {feature}
      </div>
    </section>
  );
};

export const Fifthsection = function ({ data }: { data: any }) {
  const [click, setClick] = useState(false);

  const handlePopupToggle = () => {
    setClick(!click);
  };

  return data.length > 0 ? (
    <section id="features" className="bg-ssdcolor">
      {click && (
        <div
          onClick={handlePopupToggle}
          className="fixed z-20 inset-0 bg-black bg-opacity-50 w-full h-full"
        ></div>
      )}
      <div className="relative w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={featureban}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="text-2xl py-8 font-bold text-center">
          Системийн боломжууд
        </p>
      </div>
      <div className="hidden relative mobilecustom:block">
        <Image
          src={featureban}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
        />
        <p className="text-2xl py-8 font-bold text-center">
          {" "}
          СИСТЕМИЙН БОЛОМЖУУД
        </p>
      </div>
      <div className="flex overflow-hidden mobilecustom:hidden">
        <Swiper scrollbar={{ draggable: true }} loop={true} slidesPerView={6}>
          {data.map((elements: any) => (
            <SwiperSlide key={elements.id}>
              <div className="flex justify-center items-center h-full">
                <Cards
                  key={elements.id}
                  title={elements.title}
                  icon={elements.icon}
                  feature={elements.feature}
                  customcolor={elements.customcolor}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden overflow-hidden mobilecustom:block">
        <Swiper scrollbar={{ draggable: true }} loop={true} slidesPerView={2}>
          {data.map((elements: any) => (
            <SwiperSlide key={elements.id}>
              <div className="flex justify-center items-center h-full">
                <Cards
                  key={elements.id}
                  title={elements.title}
                  icon={elements.icon}
                  feature={elements.feature}
                  customcolor={elements.customcolor}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center my-8">
        <Button
          onClick={function () {
            setClick(!click);
          }}
          className="py-6 px-8 bg-purple-900 text-3xs font-bold rounded-lg text-white"
          style={{
            background:
              "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%)",
          }}
        >
          Дэлгэрэнгүй
        </Button>
        {click && <Fea trigger={handlePopupToggle} array={data} />}
      </div>
    </section>
  ) : (
    <Spin size="large" />
  );
};
