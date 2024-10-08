"use client";
import { useState, createContext } from "react";
import slide_events from "../list/slide_events";
import { Event_item_show, Event_item_image } from "../Event_item";
import Image from "next/image";
import right from "../../images/right.svg";
import left from "../../images/left.svg";

export const Context = createContext(0);

const SixthSection = () => {
  const [page, setPage] = useState<number>(0);

  const handleClick = (index: number) => {
    setPage(index);
    if (page > arr.length && page < arr.length) {
      setPage(0);
    }
  };

  const navigateRight = function () {
    setPage(page - 1);
    if (page > arr.length && page < arr.length) {
      setPage(0);
    }
  };

  const navigateLeft = function () {
    setPage(page + 1);
  };

  const arr: JSX.Element[] = [];

  slide_events.map((item) => {
    const imageElement = (
      <Image
        key={item.id}
        width={980}
        height={980}
        src={item.image}
        alt=""
        className="object-cover rounded-3xl drop-shadow border m-2"
      />
    );

    arr.push(imageElement);
  });

  return (
    <Context.Provider value={page}>
      <section className="py-12 my-8 overflow-hidden rounded-tl-md rounded-tr-md z-0">
        <div className="flex justify-center">
          <p className="font-bold text-2xl my-8">
            Кодиг ашиглан Та юу бүтээж чадах вэ?
          </p>
        </div>
        <section className="flex h-[650px]">
          <div className="w-1/3 p-4 overflow-y-scroll">
            {slide_events.map((item, index) => (
              <Event_item_show
                key={item.id}
                icon={item.icon}
                title={item.title}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <div className="relative w-full flex">
            <div
              onClick={navigateRight}
              className="absolute right-5 top-72 border bg-white rounded-full p-4 z-10 hover:cursor-pointer"
            >
              <Image src={left} width={10} height={10} alt="" />
            </div>
            <div
              onClick={navigateLeft}
              className="absolute left-5 top-72 border bg-white rounded-full p-4 z-10 hover:cursor-pointer"
            >
              <Image src={right} width={10} height={10} alt="" />
            </div>
            <div className="flex-shrink-0 w-full h-full py-4">{arr[page]}</div>
            {/* {slide_events.map((item, index) => (
              <Event_item_image
                key={item.id}
                image={item.image}
                isActive={index == page}
              />
            ))} */}
          </div>
        </section>
      </section>
    </Context.Provider>
  );
};

export default SixthSection;
