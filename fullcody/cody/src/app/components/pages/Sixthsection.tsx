"use client";
import { useState, useEffect } from "react";
import { event } from "@/app/types/type";
import axios from "axios";
import { header_api } from "../../page";

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
        src={`http://127.0.0.1:1337${icon}`}
        alt=""
      />
      <p className="font-bold text-opacity-60 hover:text-purple-500">{title}</p>
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
        src={`http://127.0.0.1:1337${items.image.formats.large.url}`}
        alt="Something wrong..."
        className="object-cover rounded-3xl drop-shadow border m-2"
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
        src={`http://127.0.0.1:1337${items.mobile.formats.large.url}`}
        alt="Something wrong..."
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
    <section className="">
      <p className="text-2xl py-8  text-center font-bold">
        Кодиг ашиглан Та юу бүтээж чадах вэ?
      </p>
      <section className="flex px-8">
        <div className="w-1/3 md:p-4 overflow-y-scroll mobilecustom:hidden">
          {getEvent.map((item: any, index: number) => (
            <Customcard
              key={item.id}
              icon={item.icon.url}
              title={item.title}
              clicking={() => handleClick(index)}
            />
          ))}
        </div>
        <div className="w-full">
          <div className="flex flex-shrink-0 w-full h-full py-4 mobilecustom:hidden">
            {images[page]}
          </div>
          <div className="hidden flex-shrink-0 w-full h-full p-10 mobilecustom:flex">
            {mobiles[page]}
          </div>
        </div>
      </section>
    </section>
  );
};
