"use client";
import Image from "next/image";
import { Stack } from "@mui/material";
import phone_background from "../app/images/phone_template.png";
import pad_background from "../app/images/pad_template.png";
import bacgrkound_img from "../app/images/background_image.jpg";
import { Firstsection } from "./components/pages/Firstsection";
import { useState, useEffect } from "react";
import axios from "axios";
import { token, home, slide, platform } from "./types/type";
import Button from "@mui/material";
import { sliding } from "./json/objects";
import Link from "next/link";
import { Images } from "./components/Images";

export const header = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function Home() {
  const [getData, setData] = useState<home>([]);
  const [getSlide, setSlide] = useState<slide>([]);
  const [getPlatform, setPlatform] = useState<platform>([]);

  const fetching1 = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/homes?populate=*",
        header
      );
      setData(response.data.data);
    } catch (error) {
      return;
    }
  };

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

  const fetching3 = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/slides?populate=*",
        header
      );
      setPlatform(response.data.data);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching1();
    fetching2();
    fetching3();
  }, []);

  console.log(getPlatform);

  return (
    <Stack>
      <Firstsection background_img={bacgrkound_img}>
        <div className="mobilecustom:hidden">
          <Image
            src={phone_background}
            width={800}
            height={800}
            alt=""
            className="w-44"
          />
        </div>
        <div className="text-center p-4">
          <p className="font-bold text-2xl">Өөрийн цахим дэлгүүрээ бүтээ!</p>
          <p className="my-4">Та онлайнаар хаана ч, хэнд ч юу ч зарж болно</p>
          <p className="mt-8 mb-4 mobilecustom:hidden">www.allstars.mn</p>
        </div>
        <div className="hidden mobilecustom:flex mobilecustom:justify-center">
          <Image
            src={phone_background}
            width={1000}
            height={1000}
            alt=""
            className="w-52"
          />
        </div>
        <p className="hidden my-8 mobilecustom:flex mobilecustom:justify-center">
          www.allstars.mn
        </p>
        <div className="mobilecustom:hidden">
          <Image
            src={pad_background}
            width={800}
            height={800}
            alt=""
            className="w-96"
          />
        </div>
      </Firstsection>

      <section className="flex justify-evenly overflow-x-scroll items-center p-2">
        {getSlide.map((items) => (
          <div key={items.id} className="">
            <Images arr={items} />
          </div>
        ))}
      </section>
      <section id="cody" className="h-[800px] bg-blue-300"></section>
      {/* <section id="solution" className="h-[800px] bg-blue-400">
        4
      </section> */}
      {/* <section id="features" className="h-[800px] bg-blue-500">
        5
      </section> */}
      {/* <section className="h-[800px] bg-blue-600">6</section> */}
      {/* <section className="h-[800px] bg-blue-700">7</section> */}
    </Stack>
  );
}
