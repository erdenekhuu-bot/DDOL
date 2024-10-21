"use client";
import { sliding } from "@/app/json/objects";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";

export const Secondsection = function () {
  const [getSliding2, setSliding2] = useState([]);

  const fetchingSlide = async function () {
    try {
      const response = await axios.get(
        "http://192.168.0.102:1337/api/homes?populate[sliding2][populate]=*",
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

  return (
    <section className="flex justify-evenly overflow-x-scroll items-center p-2">
      {getSliding2.map((items: any) => (
        <div key={items.id} className="">
          <img
            src={`http://192.168.0.102:1337/${items.icon?.url}`}
            alt=""
            width={800}
            height={800}
            className="w-16 mx-4"
          />
        </div>
      ))}
    </section>
  );
};
