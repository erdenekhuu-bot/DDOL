"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { header_api } from "@/app/page";
import { useDraggable } from "react-use-draggable-scroll";

export const Secondsection = function () {
  const [getSliding2, setSliding2] = useState([]);

  const fetchingSlide = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/homes?populate[sliding2][populate]=*",
        header_api
      );
      setSliding2(response.data.data[0].sliding2);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchingSlide();
  }, []);

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<
    HTMLInputElement
  >;
  const { events } = useDraggable(ref);

  return (
    <div
      className="flex space-x-20 items-center overflow-x-hidden scrollbar-hide p-4 drop-shadow-2xl"
      {...events}
      ref={ref}
    >
      {getSliding2.map((items: any) => (
        <img
          key={items.id}
          src={`http://127.0.0.1:1337/${items.icon?.url}`}
          alt=""
          width={1000}
          height={1000}
          className="w-16 mx-4"
        />
      ))}
    </div>
  );
};
