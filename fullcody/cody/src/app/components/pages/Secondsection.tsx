"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { slide } from "@/app/types/type";
import { header } from "@/app/page";
import { Images } from "../Images";

export const Secondsection = function () {
  const [getSlide, setSlide] = useState<slide>([]);
  const fetching2 = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/slides?populate=*",
        header
      );
      setSlide(response.data.data);
    } catch (error) {
      return;
    }
  };
  useEffect(function () {
    fetching2();
  }, []);

  return (
    <section className="flex justify-evenly overflow-x-scroll items-center p-2">
      {getSlide.map((items) => (
        <div key={items.id} className="">
          <Images arr={items} />
        </div>
      ))}
    </section>
  );
};
