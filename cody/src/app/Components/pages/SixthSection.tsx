"use client";
import { useState, createContext, useEffect, useRef } from "react";
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

  const handleClick = (index: number) => {
    setPage(index);
  };

  const navigateRight = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == save.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const navigateLeft = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == 0) {
        return save.length - 1;
      }
      return prevIndex - 1;
    });
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

  const titles: JSX.Element[] = [];
  save.map((item) => {
    const imageElement = (
      <Event_item_show
        key={item.id}
        icon={`http://192.168.1.41:1337${item.icon.url}`}
        title={item.title}
      />
    );
    titles.push(imageElement);
  });
  return (
    <Context.Provider value={page}>
      <section className="py-12 bg-gray-50 overflow-hidden z-0 rounded-tr-[25%] rounded-tl-[25%]">
        <div className="flex justify-center p-8">
          <p className="font-bold text-2xl">
            Кодиг ашиглан Та юу бүтээж чадах вэ?
          </p>
        </div>
        <section className="flex md:h-[650px]">
          <div className="md:w-1/3 md:p-4 md:overflow-y-scroll ">
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
              className={`absolute md:right-0 right-36 top-72 border bg-white rounded-full p-4 z-10 hover:cursor-pointer ${
                page == arr.length - 1 ? `hidden` : `block`
              }`}
            >
              <Image src={left} width={10} height={10} alt="" />
            </div>
            <div
              onClick={navigateLeft}
              className={`absolute md:left-0 left-36 top-72 border bg-white rounded-full p-4 z-10 hover:cursor-pointer ${
                page == 0 ? `hidden` : `block`
              }`}
            >
              <Image src={right} width={10} height={10} alt="" />
            </div>
            {/* <div className="hidden flex-shrink-0 w-full h-full py-4 md:flex">
              {arr[page]}
            </div> */}
            <div className="hidden overflow-hidden md:w-full h-full md:flex">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {arr.map((image, index) => (
                  <div
                    key={index}
                    draggable
                    className="flex-shrink-0 w-full h-full"
                  >
                    {image}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-shrink-0 md:w-full overflow-hidden md:h-full py-4 md:hidden">
              {/* {mobile[page]} */}
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {mobile.map((image, index) => (
                  <div
                    key={index}
                    draggable
                    className="flex-shrink-0 w-full h-full"
                  >
                    {image}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </Context.Provider>
  );
};

export default SixthSection;
