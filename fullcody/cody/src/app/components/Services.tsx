"use client";
import { services } from "../json/objects";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "../page";
import { servicesing } from "../types/type";

export const Services = function () {
  const [getService, setService] = useState<servicesing>([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/abouts?populate=*",
        header_api
      );
      setService(response.data.data[0].service);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  let counter = 1;

  const switchcolor = function (index: number) {
    const cls: any = ["purple", "yellow", "pink", "aqua"];
    return cls[Math.floor(Math.random() * 4)];
  };
  return (
    <section className="bg-gray-50 py-8 z-0">
      <p className="font-bold text-center py-6 text-3xl mobilecustom:hidden">
        Үйлчилгээний төрөл
      </p>
      <p className="hidden font-bold text-center py-6 text-3xl mobilecustom:block">
        Үйлчилгээний төрөл
      </p>
      <div className="flex flex-wrap justify-evenly mx-8">
        {getService.map((items: any, index: number) => (
          <div
            key={items.id}
            className="relative w-[200px] m-4 h-[200px] rounded-lg"
          >
            <p className="font-bold text-[60px] text-purple-700 z-0 text-opacity-50">
              {0}
            </p>
            <p
              className={`absolute font-bold text-[60px] top-0 left-9 z-20 text-${switchcolor(
                index
              )}-700`}
            >
              {counter++ + "."}
            </p>
            <div className="absolute bg-white rounded-xl w-[90%] h-[90%] top-10 left-4 z-10 drop-shadow-xl flex items-center">
              <b className="text-center">{items.name}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
