"use client";
import { useState, useEffect } from "react";
import { platform } from "@/app/types/type";
import axios from "axios";
import { header_api } from "@/app/page";

export const Thirdsection = function () {
  const [getPlatform, setPlatform] = useState<platform>([]);
  const [tap, setTap] = useState(0);

  const fetchingPlatform = async function () {
    try {
      const response = await axios.get(
        "http://192.168.0.102:1337/api/homes?populate[platform][populate]=*",
        header_api
      );
      setPlatform(response.data.data[0].platform);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchingPlatform();
  }, []);

  const array: any = [];
  getPlatform.map((i) => {
    array.push(
      <div className="px-10 py-4 flex justify-center mobilecustom:block">
        <img
          src={`http://192.168.0.102:1337${i.image.formats.small.url}`}
          alt=""
          height={1000}
          width={1000}
          className="w-[600px]"
        />
        <div className="relative p-10">
          <p className="my-8 font-bold text-2xl mobilecustom:text-center mobilecustom:my-4">
            {i.title}
          </p>
          <p className="mobilecustom:text-center text-xl">{i.content}</p>
          <div className="flex absolute bottom-32 navcustom:bottom-0 navcustom:left-1/2 navcustom:-translate-x-1/2 mobilecustom:bottom-0 mobilecustom:left-1/2 mobilecustom:-translate-x-1/2">
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
    );
  });

  return (
    <section id="cody" className="p-8">
      {array[tap]}
    </section>
  );
};
