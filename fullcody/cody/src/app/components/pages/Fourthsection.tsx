"use client";
import { Card } from "../Card";
import { useState, useEffect } from "react";
import { Sol } from "../PopUp";
import axios from "axios";
import { solution } from "@/app/types/type";
import { header_api } from "@/app/page";
import Image from "next/image";
import imgsol from "../../images/svgsoltion.svg";
import { Button } from "antd";

export const Fourthsection = function () {
  const [click, setClick] = useState(false);
  const [getSolution, setSolution] = useState<solution>([]);

  const fetchingSolution = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/homes?populate[solution][populate]=*",
        header_api
      );
      setSolution(response.data.data[0].solution);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetchingSolution();
  }, []);

  const handlePopupToggle = () => {
    setClick(!click);
  };
  const solution_list = [];

  for (let i = 0; i < getSolution.length; i++)
    if (i < 4)
      solution_list.push(
        <Card title={getSolution[i].title} content={getSolution[i].content} />
      );

  return (
    getSolution.length > 0 && (
      <section id="solution" className="bg-splushcolor">
        <div className="relative w-[500px] mx-auto mobilecustom:hidden">
          <Image
            src={imgsol}
            width={800}
            height={800}
            alt=""
            className="w-20 absolute top-4 right-1/4"
          />
          <p className="text-2xl py-8 font-bold text-center">Бидний шийдэл</p>
        </div>
        <div className="hidden relative mobilecustom:block">
          <Image
            src={imgsol}
            width={800}
            height={800}
            alt=""
            className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
          />
          <p className="text-2xl py-8 font-bold text-center">БИДНИЙ ШИЙДЭЛ</p>
        </div>
        {click && (
          <div
            onClick={handlePopupToggle}
            className="fixed z-30 inset-0 bg-black bg-opacity-50 w-full h-full"
          ></div>
        )}
        <div className="flex flex-wrap justify-evenly px-8">
          {solution_list}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={function () {
              setClick(!click);
            }}
            className="py-6 px-8 bg-purple-900 text-3xs font-bold rounded-lg text-white"
            style={{
              background:
                "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%)",
            }}
          >
            Дэлгэрэнгүй
          </Button>
          {click && <Sol trigger={handlePopupToggle} array={getSolution} />}
        </div>
      </section>
    )
  );
};
