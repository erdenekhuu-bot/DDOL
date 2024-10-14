"use client";
import { slide_category } from "@/app/types/type";
import { useState, useEffect } from "react";
import axios from "axios";
import { token } from "@/app/types/type";

const ThirdSection = function () {
  const [save, setSave] = useState<slide_category>([]);
  const [tap, setTap] = useState(0);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.1.41:1337/api/codyplatforms?populate=*",
        config
      );
      setSave(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    read_list();
  }, []);

  return (
    <section className="bg-white py-12 overflow-hidden md:px-20 md:h-[550px]">
      {save.length > 0 && (
        <div className="block m-4 overflow-hidden md:flex">
          <img
            src={`http://192.168.1.41:1337${save[tap].image.formats.small.url}`}
            width={500}
            height={500}
            alt=""
          />
          <div className="px-10">
            <div className="mt-10 text-center md:text-left">
              <span className="font-bold text-[20px]">{save[tap].title}</span>
            </div>
            <div className="mt-4">
              <span className="text-xs text-center md:text-xl md:text-left">
                {save[tap].content}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center">
        {save.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setTap(index)}
            className={`rounded-full mx-2 w-[15px] h-[15px] ${
              tap == index ? "bg-purple-600" : "bg-purple-100"
            }`}
          >
            {""}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
