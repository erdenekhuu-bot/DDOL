"use client";
import { useState } from "react";
import Image from "next/image";
import { comments } from "../list/comment";
import comment1 from "../../images/comment1.png";
import { Button } from "@mui/material";

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
      <div className="">{arr[tap]}</div>
      <div className="flex justify-center mt-9">
        <Button
          onClick={() => {
            setTap(0);
          }}
          variant="contained"
          className="rounded-full mx-2 bg-purple-600 "
        >
          {""}
        </Button>
        <Button
          onClick={() => {
            setTap(1);
          }}
          variant="contained"
          className="rounded-full mx-2 bg-purple-600 "
        >
          {""}
        </Button>
        <Button
          onClick={() => {
            setTap(2);
          }}
          variant="contained"
          className="rounded-full mx-2 bg-purple-600 "
        >
          {""}
        </Button>
      </div>
    </section>
  );
};

export default SeventhSection;
