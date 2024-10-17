"use client";
import { solutions } from "@/app/json/objects";
import { Card } from "../Card";
import { Button } from "@mui/material";
import { useState } from "react";
import { Sol } from "../PopUp";

export const Fourthsection = function () {
  const [click, setClick] = useState(false);

  const handlePopupToggle = () => {
    setClick(!click);
  };
  const solution_list = [];

  for (let i = 0; i < solutions.length; i++)
    if (i < 4)
      solution_list.push(
        <Card title={solutions[i].title} content={solutions[i].content} />
      );

  return (
    <section id="solution" className="">
      <p className="text-2xl py-8 text-center">Бидний шийдэл</p>
      {click && (
        <div
          onClick={handlePopupToggle}
          className="fixed z-20 inset-0 bg-black bg-opacity-50 w-full h-full"
        ></div>
      )}
      <div className="flex flex-wrap justify-evenly">{solution_list}</div>

      <div className="flex my-12 justify-center">
        <Button
          onClick={function () {
            setClick(!click);
          }}
          variant="contained"
          className="px-8 py-4 bg-purple-900 text-xs font-bold rounded-lg"
          style={{
            background:
              "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%)",
          }}
        >
          Дэлгэрэнгүй
        </Button>
        {click && <Sol trigger={handlePopupToggle} />}
      </div>
    </section>
  );
};
