"use client";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { AndroidFilled } from "@ant-design/icons";
import { Button } from "@mui/material";
import { Fea } from "../PopUp";
import axios from "axios";
import { feature } from "@/app/types/type";
import { header_api } from "@/app/page";
import { features } from "@/app/json/objects";

export const Cards = function ({
  title,
  icon,
  feature,
}: {
  title: string;
  icon?: any;
  feature?: string;
}) {
  const solution_list = [];
  return (
    <Card sx={{ width: 200 }} className="rounded-lg py-2 m-4 relative">
      <CardContent>
        <div className="bg-purple-400 px-3 w-1/3 h-14 rounded-xl flex items-center">
          <AndroidFilled className="w-20 text-3xl text-white" />
        </div>
      </CardContent>
      <CardContent className="font-bold text-xl">{title}</CardContent>
      <CardActions className="absolute right-0 bottom-0">
        <span>{feature}</span>
      </CardActions>
    </Card>
  );
};

export const Fifthsection = function () {
  const [click, setClick] = useState(false);
  const [getFeature, setFeature] = useState<feature>([]);

  const fetchingFeature = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/homes?populate[feature][populate]=*",
        header_api
      );
      setFeature(response.data.data[0].feature);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetchingFeature();
  }, []);

  const handlePopupToggle = () => {
    setClick(!click);
  };

  return (
    getFeature.length > 0 && (
      <section id="features" className="">
        {click && (
          <div
            onClick={handlePopupToggle}
            className="fixed z-20 inset-0 bg-black bg-opacity-50 w-full h-full"
          ></div>
        )}
        <p className="text-2xl py-8 text-center">Системийн боломжууд</p>
        <div className="flex flex-wrap justify-evenly h-[500px] overflow-hidden">
          {getFeature.map((elements: any) => (
            <Cards
              key={elements.id}
              title={elements.title}
              icon={elements.icon}
              feature={elements.feature}
            />
          ))}
        </div>
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
        </div>
        {click && <Fea trigger={handlePopupToggle} array={getFeature} />}
      </section>
    )
  );
};
