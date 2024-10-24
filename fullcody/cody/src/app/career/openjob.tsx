"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";
import { event } from "../types/type";

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

export const Openjobs = function () {
  const [getData, setData] = useState<event>([]);
  const [page, setPage] = useState(0);

  const handleClick = (index: number) => {
    setPage(index);
  };

  const navigateRight = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == getData.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const navigateLeft = () => {
    setPage((prevIndex: number) => {
      if (prevIndex == 0) {
        return getData.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/careers?populate[caropen][populate]=*",
        header_api
      );
      setData(response.data.data[0].caropen);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  const images: any = [];

  getData.map((items: any) =>
    images.push(
      <img
        key={items.id}
        width={980}
        height={980}
        src={`http://127.0.0.1:1337${items.image.formats.small.url}`}
        alt="Something wrong..."
        className="object-cover rounded-3xl drop-shadow border m-2"
      />
    )
  );

  const mobilelabel: any = [];
  getData.map((item: any, index: number) =>
    mobilelabel.push(
      <Customlabel
        key={item.id}
        icon={item.icon.url}
        title={item.title}
        clicking={() => handleClick(index)}
      />
    )
  );

  return (
    <section>
      <p className="text-2xl font-bold py-8 text-center">Нээлттэй ажлын байр</p>
      <section className="flex px-8 mobilecustom:block">
        <div className="w-1/3 md:p-4 overflow-y-scroll mobilecustom:hidden">
          {getData.map((item: any, index: number) => (
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
          <div className="flex flex-shrink-0 w-full h-full py-4">
            {images[page]}
          </div>
        </div>
      </section>
    </section>
  );
};
