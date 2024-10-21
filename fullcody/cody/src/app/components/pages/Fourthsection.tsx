"use client";
import { Card } from "../Card";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Sol } from "../PopUp";
import axios from "axios";
import { solution } from "@/app/types/type";
import { header_api } from "@/app/page";

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
          {click && <Sol trigger={handlePopupToggle} array={getSolution} />}
        </div>
      </section>
    )
  );
};
