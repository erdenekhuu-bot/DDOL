"use client";
import { useState } from "react";
import { Flex, Spin } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Customlabel = function ({
  clicking,
  icon,
  title,
}: {
  clicking: () => void;
  icon: string;
  title: string;
}) {
  return (
    <section
      onClick={clicking}
      className="flex hover:cursor-pointer items-center p-4"
    >
      <img
        className="mx-2"
        width={30}
        height={30}
        src={`http://192.168.1.19:1337${icon}`}
        alt=""
      />
      <p className="font-bold text-opacity-60 text-xl hover:text-purple-500">
        {title}
      </p>
    </section>
  );
};

export const Customcard = function ({
  clicking,
  icon,
  title,
}: {
  clicking: () => void;
  icon: string;
  title: string;
}) {
  return (
    <section
      onClick={clicking}
      className="flex hover:cursor-pointer items-center p-4"
    >
      <img
        className="mx-4"
        width={20}
        height={20}
        src={`http://192.168.1.19:1337${icon}`}
        alt=""
      />
      <p className="font-bold text-opacity-60 hover:text-purple-500">{title}</p>
    </section>
  );
};

export const Openjobs = function ({ data }: { data: any }) {
  const [page, setPage] = useState(0);

  const handleClick = (index: number) => {
    setPage(index);
  };

  const navigateRight = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == data.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const navigateLeft = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == 0) {
        return data.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const images: any = [];

  data.map((items: any) =>
    images.push(
      <div className="mx-2">
        <img
          key={items.id}
          width={980}
          height={980}
          src={`http://192.168.1.19:1337${items.image?.formats.small.url}`}
          alt=""
          className="object-cover rounded-3xl drop-shadow border m-2"
        />
      </div>
    )
  );

  const mobilelabel: any = [];
  data.map((item: any, index: number) =>
    mobilelabel.push(
      <Customlabel
        key={item.id}
        icon={item.icon.url}
        title={item.title}
        clicking={() => handleClick(index)}
      />
    )
  );

  const handleSlideChange = (swiper: any) => {
    setPage(swiper.activeIndex);
  };

  return (
    <Flex>
      {data.length > 0 ? (
        <section>
          <p className="text-2xl font-bold py-8 text-center">
            Нээлттэй ажлын байр
          </p>
          <section className="flex px-8 mobilecustom:block">
            <div className="w-1/3 md:p-4 overflow-y-scroll hide-scrollbar mobilecustom:hidden">
              {data.map((item: any, index: number) => (
                <Customcard
                  key={item.id}
                  icon={item.icon.url}
                  title={item.title}
                  clicking={() => handleClick(index)}
                />
              ))}
            </div>
            <div className="hidden mobilecustom:flex mobilecustom:justify-center">
              {mobilelabel[page]}
            </div>
            <div className="w-full">
              <div className="flex overflow-hidden flex-shrink-0 w-full h-full py-4">
                {/* {images[page]} */}
                <div
                  className="flex transition-transform duration-300"
                  style={{ transform: `translateX(-${page * 100}%)` }}
                >
                  {images.map((image: any, index: number) => (
                    <div key={index} className="flex-shrink-0 w-full h-full">
                      {image}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      ) : (
        <Spin size="large" />
      )}
    </Flex>
  );
};
