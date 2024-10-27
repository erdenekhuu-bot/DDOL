"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "../page";
import { servicesing } from "../types/type";
import Image from "next/image";
import servi from "../images/services.svg";
import { Flex, Spin } from "antd";

export const Services = function () {
  const [getService, setService] = useState<servicesing>([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/abouts?populate[service]=*",
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

  return (
    <Flex align="center" justify="center" gap="middle">
      {getService.length > 0 ? (
        <section className="bg-gray-50 py-8 z-0">
          <div className="relative w-[500px] mx-auto mobilecustom:hidden">
            <Image
              src={servi}
              width={800}
              height={800}
              alt=""
              className="w-20 absolute top-4 right-1/4"
            />
            <p className="text-3xl py-8 font-bold text-center">
              Үйлчилгээний төрөл
            </p>
          </div>
          <div className="hidden relative mobilecustom:block">
            <Image
              src={servi}
              width={800}
              height={800}
              alt=""
              className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
            />
            <p className="text-3xl py-8 font-bold text-center uppercase">
              Үйлчилгээний төрөл
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly mx-8">
            {getService.map((items) => (
              <div
                key={items.id}
                className="relative w-[200px] m-4 h-[200px] rounded-lg"
              >
                <p
                  className={`font-extrabold text-[60px] z-0 text-opacity-50`}
                  style={{ color: items.customcolor || "purple" }}
                >
                  {0}
                </p>
                <p
                  className={`absolute font-extrabold text-[60px] top-0 left-9 z-20`}
                  style={{ color: items.customcolor || "purple" }}
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
      ) : (
        <Spin size="large" />
      )}
    </Flex>
  );
};
