"use client";
import { useState } from "react";
import Image from "next/image";
import { comments } from "../list/comment";
import comment1 from "../../images/comment1.png";

const SeventhSection = function () {
  const arr: JSX.Element[] = [];

  comments.map((item) => {
    const imageElement = (
      <Image
        key={item.id}
        width={1000}
        height={500}
        src={item.image}
        alt=""
        className="object-cover w-[80%] mx-auto"
      />
    );

    arr.push(imageElement);
  });

  return (
    <section className="z-0 p-8">
      <div className="flex justify-center">
        <p className="font-bold text-2xl my-8">Харилцагчдын сэтгэгдэл</p>
      </div>
      <div className="">{arr[1]}</div>
    </section>
  );
};

export default SeventhSection;
