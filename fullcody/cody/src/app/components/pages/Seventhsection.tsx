"use client";
import { useState, useEffect } from "react";
import review from "../../images/review.svg";
import Image from "next/image";
import { comment } from "@/app/types/type";
import { header_api } from "@/app/page";
import axios from "axios";

export const Seventhsection = function ({ data }: { data?: any }) {
  const [getComment, setComment] = useState<comment>([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        `http://192.168.0.101:1337/api/homes?populate[comment][populate]=*`,
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

  const [tap, setTap] = useState(0);

  const array: any = [];

  getComment.map((item: any) =>
    array.push(
      <img
        key={item.id}
        width={1000}
        height={500}
        src={`http://192.168.0.101:1337${item.image?.formats.large.url}`}
        alt=""
        className="object-cover w-[90%] mx-auto"
      />
    )
  );

  return (
    <section className="overflow-hidden">
      <div className="relative w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={review}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="text-2xl py-8 font-bold text-center">
          Харилцагчдын сэтгэгдэл
        </p>
      </div>
      <div className="hidden relative mobilecustom:block">
        <Image
          src={review}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
        />
        <p className="text-2xl py-8 font-bold text-center uppercase">
          Харилцагчдын сэтгэгдэл
        </p>
      </div>

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
      <div className="flex justify-center my-4">
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
