"use client";
import { useState, createContext, useEffect } from "react";
import { Event_item_show, Event_item_image } from "../Event_item";
import Image from "next/image";
import right from "../../images/right.svg";
import left from "../../images/left.svg";
import { slide_events } from "@/app/types/type";
import { token } from "@/app/types/type";
import axios from "axios";

export const Context = createContext(0);

const SixthSection = () => {
  const [page, setPage] = useState<number>(0);

  const [save, setSave] = useState<slide_events>([]);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.1.41:1337/api/codyevents?populate=*",
        config
      );
      setSave(response.data.data);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    read_list();
  }, []);

  console.log(save);

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

  save.map((item) => {
    const imageElement = (
      <img
        key={item.id}
        width={980}
        height={980}
        src={`http://192.168.1.41:1337${item.image.formats.large.url}`}
        alt=""
        className="object-cover rounded-3xl drop-shadow border m-2"
      />
    );

    arr.push(imageElement);
  });

  const mobile: JSX.Element[] = [];
  save.map((item) => {
    const imageElement = (
      <img
        key={item.id}
        width={400}
        height={900}
        src={`http://192.168.1.41:1337${item.mobile.formats.large.url}`}
        alt=""
        className="object-cover mx-auto"
      />
    );

    mobile.push(imageElement);
  });

  return (
    <Context.Provider value={page}>
      <section className="py-12 my-8 overflow-hidden rounded-tl-md rounded-tr-md z-0">
        <div className="flex justify-center">
          <p className="font-bold text-2xl my-8">
            Кодиг ашиглан Та юу бүтээж чадах вэ?
          </p>
        </div>
        <section className="flex md:h-[650px]">
          <div className="md:w-1/3 md:p-4 md:overflow-y-scroll">
            {save.map((item, index) => (
              <Event_item_show
                key={item.id}
                icon={`http://192.168.1.41:1337${item.icon.url}`}
                title={item.title}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <div className="relative w-full md:flex">
            <div
              onClick={navigateRight}
              className="absolute md:right-5 right-36 top-72 border bg-white rounded-full p-4 z-10 hover:cursor-pointer"
            >
              <Image src={left} width={10} height={10} alt="" />
            </div>
            <div
              onClick={navigateLeft}
              className="absolute md:left-5 left-36 top-72 border bg-white rounded-full p-4 z-10 hover:cursor-pointer"
            >
              <Image src={right} width={10} height={10} alt="" />
            </div>
            <div className="hidden flex-shrink-0 w-full h-full py-4 md:flex">
              {arr[page]}
            </div>
            <div className="flex flex-shrink-0 md:w-full md:h-full py-4 md:hidden">
              {mobile[page]}
            </div>
          </div>
        </section>
      </section>
    </Context.Provider>
  );
};

export default SixthSection;
