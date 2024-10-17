"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { platform } from "@/app/types/type";
import { header } from "@/app/page";

export const Thirdsection = function () {
  const [getPlatform, setPlatform] = useState<platform>([]);

  const [tap, setTap] = useState(0);

  const fetching3 = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/platforms?populate=*",
        header
      );
      setPlatform(response.data.data);
    } catch (error) {
      return;
    }
  };
  useEffect(function () {
    fetching3();
  }, []);
  return (
    <section id="cody" className="p-8">
      {getPlatform.map((elements, index) => (
        <div className="p-10 flex justify-center">
          <img
            src={`http://127.0.0.1:1337${elements.image.formats.small.url}`}
            alt=""
            height={1000}
            width={1000}
            className="w-[600px]"
          />
          <div className="relative p-10">
            <p className="my-8">{elements.title}</p>
            <p className="">{elements.content}</p>
            <div className="flex absolute bottom-20">
              <button
                onClick={() => {
                  setTap(0);
                }}
                className={`rounded-full mx-2 ${
                  tap != 0 ? `bg-purple-100` : `bg-purple-600`
                } w-[15px] h-[15px]`}
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(1);
                }}
                className={`rounded-full mx-2 ${
                  tap != 1 ? `bg-purple-100` : `bg-purple-600`
                } w-[15px] h-[15px]`}
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(2);
                }}
                className={`rounded-full mx-2 ${
                  tap != 2 ? `bg-purple-100` : `bg-purple-600`
                } w-[15px] h-[15px]`}
              >
                {""}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
