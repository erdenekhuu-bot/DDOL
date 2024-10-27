"use client";
import { useState, useEffect } from "react";
import { event } from "@/app/types/type";
import axios from "axios";
import { header_api } from "../../page";
import Image from "next/image";
import instru from "../../images/instructoin.svg";

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
        src={`http://127.0.0.1:1337${icon}`}
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
        src={`http://127.0.0.1:1337${icon}`}
        alt=""
        className="mx-5 z-20 bg-gray-300"
      />
      <p className="font-bold text-xl text-opacity-60 hover:text-purple-500">
        {title}
      </p>
    </section>
  );
};

export const Sixthsection = function () {
  const [getEvent, setEvent] = useState<event>([]);
  const [page, setPage] = useState(0);

  const handleClick = (index: number) => {
    setPage(index);
  };

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/homes?populate[event][populate]=*",
        header_api
      );
      setEvent(response.data.data[0].event);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  const images: any = [];

  getEvent.map((items: any) =>
    images.push(
      <img
        key={items.id}
        width={980}
        height={980}
        src={`http://127.0.0.1:1337${items.image?.formats.large.url}`}
        alt=""
        className="object-cover rounded-3xl drop-shadow border m-2"
      />
    )
  );

  const mobilelabel: any = [];
  getEvent.map((item: any, index: number) =>
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

  getEvent.map((items: any) =>
    mobiles.push(
      <img
        key={items.id}
        width={980}
        height={980}
        src={`http://127.0.0.1:1337${items.mobile?.formats.large.url}`}
        alt=""
        className="object-cover rounded-3xl drop-shadow border m-2"
      />
    )
  );

  const navigateRight = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == getEvent.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const navigateLeft = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == 0) {
        return getEvent.length - 1;
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
        <div className="h-[600px] w-1/3 p-4 overflow-y-scroll select-none mobilecustom:hidden">
          {getEvent.map((item: any, index: number) => (
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
          {mobiles[page]}
        </div>
      </section>
    </section>
  );
};
