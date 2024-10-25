"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";
import { comment } from "@/app/types/type";

export const Seventhsection = function () {
  const [tap, setTap] = useState(0);
  const [getComment, setComment] = useState<comment>([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/homes?populate[comment][populate]=*",
        header_api
      );
      setComment(response.data.data[0].comment);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  const array: any = [];

  getComment.map((item: any) =>
    array.push(
      <img
        key={item.id}
        width={1000}
        height={500}
        src={`http://127.0.0.1:1337${item.image.formats.large.url}`}
        alt=""
        className="object-cover w-[90%] mx-auto"
      />
    )
  );

  return (
    <section className="overflow-hidden">
      <p className="text-2xl py-8  text-center font-bold">
        Харилцагчдын сэтгэгдэл
      </p>
      {/* <div className="">{array[tap]}</div> */}
      <div
        className="flex transition-transform duration-300 "
        style={{ transform: `translateX(-${tap * 100}%)` }}
      >
        {array.map((image: any, index: number) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            {image}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-2 md:my-9">
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
        <button
          onClick={() => {
            setTap(3);
          }}
          className={`rounded-full mx-2 ${
            tap != 3 ? `bg-purple-100` : `bg-purple-600`
          } w-[15px] h-[15px]`}
        >
          {""}
        </button>
      </div>
    </section>
  );
};
