"use client";
import Solution_Item from "../Solution_Item";
import { Button } from "@mui/material";
import { Popup } from "../Popup";
import axios from "axios";
import { useState, useEffect } from "react";

const FourthSection = function () {
  const [click, setClick] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const handlePopupToggle = () => {
    setClick(!click);
  };
  const togglePopup = () => {
    setTrigger(!trigger);
  };

  return (
    <section className="my-6 bg-gray-50 md:h-[550px]  md:rounded-bl-[300px] md:rounded-br-[300px]">
      {click && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 w-full h-full"></div>
      )}
      <div className="text-center">
        <span className="font-bold text-2xl">Бидний шийдэл</span>
      </div>
      <div className="text-xs md:flex md:justify-evenly md:flex-wrap md:p-8 md:text-xl">
        <Solution_Item
          title="Headless Ecommerce"
          content="Headless цахим худалдааны шийдлээр бизнесийн онцлогтоо тохирох цахим худалдааг бүтээж ирээдүйтэй бэлтгэ"
        />
        <Solution_Item
          title="Multi Store"
          content="Ашиглахад хялбар, салбар бизнесүүдийнхээ сүлжээг бий болгож удирдах"
        />
        <Solution_Item
          title="Marketplace"
          content="Олон борлуулагчдын бүтээгдэхүүн, үйлчилгээг нэгтгэж цахим худалдааны платформыг бий болгоорой"
        />
        <Solution_Item
          title="Media Platform"
          content="Медиа платформын тусламжтайгаар контент дээр суурилсан цахим худалдаагаа эхлүүлээрэй"
        />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            setClick(!click);
          }}
          variant="contained"
          className="px-8 py-4 bg-purple-900 text-xs font-bold rounded-lg"
        >
          Дэлгэрэнгүй
        </Button>
        {click && <Popup onClose={handlePopupToggle} />}
      </div>
    </section>
  );
};

export default FourthSection;
