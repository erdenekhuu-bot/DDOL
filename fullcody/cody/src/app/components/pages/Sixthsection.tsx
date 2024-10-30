"use client";
import { useState } from "react";
import Image from "next/image";
import instru from "../../images/instructoin.svg";
import right from "../../images/rightarrow.svg";
import left from "../../images/leftarrow.svg";

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
        src={`http://192.168.0.101:1337${icon}`}
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
        width={25}
        height={25}
        src={`http://192.168.0.101:1337${icon}`}
        alt=""
        className="mx-5 z-20 bg-gray-300"
      />
      <p className="font-bold text-xl text-opacity-60 hover:text-purple-500">
        {title}
      </p>
    </section>
  );
};

export const Sixthsection = function ({ data }: { data: any }) {
  const [page, setPage] = useState(0);

  const handleClick = (index: number) => {
    setPage(index);
  };

  const images: any = [];

  data.map((items: any) =>
    images.push(
      <img
        key={items.id}
        width={980}
        height={980}
        src={`http://192.168.0.101:1337${items.image?.formats.large.url}`}
        alt=""
        className="object-cover rounded-3xl drop-shadow"
      />
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

  const mobiles: any = [];

  data.map((items: any) =>
    mobiles.push(
      <img
        key={items.id}
        width={980}
        height={980}
        src={`http://192.168.0.101:1337${items.mobile?.formats.large.url}`}
        alt=""
        className="object-cover rounded-3xl drop-shadow border"
      />
    )
  );

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

  return (
    <section className="bg-splushcolor">
      <div className="relative w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={instru}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="text-2xl py-8 font-bold text-center">
          Кодиг ашиглан Та юу бүтээж чадах вэ?
        </p>
      </div>
      <div className="hidden relative mobilecustom:block">
        <Image
          src={instru}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
        />
        <p className="text-2xl py-8 font-bold text-center uppercase">
          Кодиг ашиглан Та юу бүтээж чадах вэ?
        </p>
      </div>
      <section className="flex px-10 mobilecustom:block">
        <div className="h-[600px] w-1/3 p-4 overflow-y-scroll select-none hide-scrollbar mobilecustom:hidden">
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
        <div className="w-full overflow-hidden">
          {/* <div className="flex flex-shrink-0 w-full h-full py-4 mobilecustom:hidden">
            {images[page]}
          </div> */}

          <div
            className="flex transition-transform duration-300 select-none mobilecustom:hidden"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {images.map((image: any, index: number) => (
              <div key={index} className="flex-shrink-0 w-full h-full px-2">
                {image}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden relative flex-shrink-0 w-full h-full p-10 mobilecustom:flex">
          <div className="absolute left-1 top-1/2 w-56 hidden z-20 rounded-full mobilecustom:block">
            <button
              className="border bg-white z-20 rounded-full p-4"
              onClick={navigateLeft}
            >
              <Image
                src={right}
                alt=""
                width={800}
                height={800}
                className="w-2"
              />
            </button>
          </div>
          <div className="absolute right-1 top-1/2 w-56 hidden z-20 mobilecustom:block">
            <button
              className="border bg-white z-20 rounded-full p-4"
              onClick={navigateRight}
            >
              <Image
                src={left}
                alt=""
                width={800}
                height={800}
                className="w-2"
              />
            </button>
          </div>
          {/* <div className="z-0 bg-blue-500">{mobiles[page]}</div> */}
          <div className="w-[500px] bg-yellow-200 flex space-x-10 overflow-hidden">
            <div
              className="flex transition-transform duration-300 select-none"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {mobiles.map((image: any, index: number) => (
                <div key={index} className="flex-shrink-0 w-full h-full">
                  {image}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
