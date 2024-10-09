"use client";
import { useState } from "react";
import Image from "next/image";
import { comments } from "../list/comment";

const SeventhSection = function () {
  const [tap, setTap] = useState(0);
  const arr: JSX.Element[] = [];

  comments.map((item) => {
    const imageElement = (
      <Image
        key={item.id}
        width={1000}
        height={500}
        src={item.image}
        alt=""
        className="object-cover w-[90%] mx-auto"
      />
    );

    arr.push(imageElement);
  });

  return (
    <section className="z-0">
      <div className="flex justify-center">
        <p className="font-bold text-2xl my-8">Харилцагчдын сэтгэгдэл</p>
      </div>
      <div className="">{arr[tap]}</div>
      <div className="flex justify-center my-9">
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
    </section>
  );
};

export default SeventhSection;
