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
    <section className="flex items-center justify-center p-4 opacity-50 overflow-hidden">
      {save.map((item) => (
        <img
          key={item.id}
          src={`http://192.168.1.41:1337${item.image.url}`}
          width={80}
          height={80}
          alt=""
          className="hover:cursor-pointer hover:opacity-100 mx-4"
        />
      ))}
    </section>
  );
};

export default SecondSection;
