"use client";
import { useState, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import { Fea } from "../PopUp";
import axios from "axios";
import { feature } from "@/app/types/type";
import { header_api } from "@/app/page";
import featureban from "../../images/featureban.svg";
import Image from "next/image";
import { Spin } from "antd";

export const Cards = function ({
  title,
  icon,
  feature,
}: {
  title: string;
  icon: string;
  feature?: string;
}) {
  const switchcolor = () => {
    const cls = ["red", "yellow", "pink", "green"];
    return cls[Math.floor(Math.random() * cls.length)];
  };
  return (
    <Card className="w-[200px] rounded-lg py-2 m-4 relative">
      <CardContent>
        <div
          className={`bg-${switchcolor()}-400 px-3 w-1/3 h-14 rounded-xl flex items-center`}
        >
          <img
            src="https://cody.mn/84255cf7e189d5386dd3d0001103d4fa.svg"
            alt=""
            width={800}
            height={800}
          />
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

  return getFeature.length > 0 ? (
    <section id="features" className="bg-ssdcolor">
      {click && (
        <div
          onClick={handlePopupToggle}
          className="fixed z-20 inset-0 bg-black bg-opacity-50 w-full h-full"
        ></div>
      )}
      <div className="relative w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={featureban}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="text-2xl py-8 font-bold text-center">
          Системийн боломжууд
        </p>
      </div>
      <div className="hidden relative mobilecustom:block">
        <Image
          src={featureban}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
        />
        <p className="text-2xl py-8 font-bold text-center">
          {" "}
          СИСТЕМИЙН БОЛОМЖУУД
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly px-28 h-[500px] overflow-hidden mobilecustom:h-[250px] mobilecustom:space-x-0">
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
  ) : (
    <Spin size="large" />
  );
};
