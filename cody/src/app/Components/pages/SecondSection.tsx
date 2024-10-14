"use client";
import Image from "next/image";
import { image_list } from "@/app/types/type";
import { useState, useEffect } from "react";
import { token } from "@/app/types/type";
import axios from "axios";

const SecondSection = function () {
  const [save, setSave] = useState<image_list>([]);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.1.41:1337/api/codyimages?populate=*",
        config
      );
      setSave(response.data.data);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    read_list();
  }, []);

  return (
    <section className="flex border shadow-2xl items-center justify-center overflow-hidden">
      {save.map((item) => (
        <img
          key={item.id}
          src={`http://192.168.1.41:1337${item.image.url}`}
          width={70}
          height={70}
          alt=""
          className="mx-4 p-2 transition-opacity duration-300 opacity-30 hover:cursor-pointer hover:opacity-100"
        />
      ))}
    </section>
  );
};

export default SecondSection;
