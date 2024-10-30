"use client";
import { useState } from "react";
import { Flex, Spin, Skeleton } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Thirdsection = function ({ data }: { data: any }) {
  const [tap, setTap] = useState(0);

  const array: any = [];
  data.map((i: any) => {
    array.push(
      <div className="px-10 py-10 flex bg-white mobilecustom:block mobilecustom:px-0">
        <img
          src={`http://192.168.1.19:1337${i.image.formats.small.url}`}
          alt=""
          height={500}
          width={1000}
          className="w-[600px] px-10 mobilecustom:px-3"
        />
        <div className="relative p-8">
          <p className="my-8 font-bold text-2xl mobilecustom:text-center mobilecustom:my-4 mobilecustom:text-xl">
            {i.title}
          </p>
          <p className="mobilecustom:text-center text-xl mobilecustom:text-sm">
            {i.content}
          </p>
          <div className="flex absolute bottom-20 navcustom:bottom-0 navcustom:left-1/2 navcustom:-translate-x-1/2 mobilecustom:bottom-0 mobilecustom:left-1/2 mobilecustom:-translate-x-1/2">
            <button
              onClick={() => {
                setTap(0);
              }}
              className={`rounded-full mx-2 ${
                tap != 0 ? `bg-purple-100` : `bg-purple-600`
              } w-[15px] h-[15px]`}
            >
              {""}
            </button>
            <button
              onClick={() => {
                setTap(1);
              }}
              className={`rounded-full mx-2 ${
                tap != 1 ? `bg-purple-100` : `bg-purple-600`
              } w-[15px] h-[15px]`}
            >
              {""}
            </button>
            <button
              onClick={() => {
                setTap(2);
              }}
              className={`rounded-full mx-2 ${
                tap != 2 ? `bg-purple-100` : `bg-purple-600`
              } w-[15px] h-[15px]`}
            >
              {""}
            </button>
          </div>
        </div>
      </div>
    );
  });

  const handleSlideChange = (swiper: any) => {
    setTap(swiper.activeIndex);
  };

  return (
    <section id="cody">
      <Flex align="center" justify="center" gap="middle">
        {/* {array.length > 0 ? array[tap] : <Skeleton />} */}
        {array.length > 0 && (
          <Swiper
            spaceBetween={10}
            loop={true}
            onSlideChange={handleSlideChange}
            initialSlide={tap}
          >
            {array.map((image: any) => (
              <SwiperSlide key={image.id}>
                <div className="flex justify-center items-center h-full">
                  {image}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Flex>
    </section>
  );
};
