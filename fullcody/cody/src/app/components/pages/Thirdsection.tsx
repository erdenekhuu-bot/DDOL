"use client";
import { useState } from "react";
import { platforms } from "@/app/json/objects";
import Image from "next/image";

export const Thirdsection = function () {
  const [tap, setTap] = useState(0);

  const array: any = [];
  platforms.map((i) => {
    array.push(
      <div className="px-10 py-4 flex justify-center mobilecustom:block">
        <Image
          src={i.image}
          alt=""
          height={1000}
          width={1000}
          className="w-[600px]"
        />
        <div className="relative p-10">
          <p className="my-8 mobilecustom:text-center mobilecustom:my-4">
            {i.title}
          </p>
          <p className="mobilecustom:text-center">{i.content}</p>
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
