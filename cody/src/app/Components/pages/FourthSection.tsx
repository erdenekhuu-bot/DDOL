"use client";
import Solution_Item from "../Solution_Item";
import { Button } from "@mui/material";
import { Popup } from "../Popup";
import { useState } from "react";

const FourthSection = function () {
  const [click, setClick] = useState(false);

  const handlePopupToggle = () => {
    setClick(!click);
  };
  return (
    <section className="py-6 bg-gray-50 rounded-br-[30%] rounded-bl-[30%]">
      {click && (
        <div
          onClick={handlePopupToggle}
          className="fixed z-10 inset-0 bg-black bg-opacity-50 w-full h-full"
        ></div>
      )}
      <div className="text-center p-8">
        <span className="font-bold text-2xl">Бидний шийдэл</span>
      </div>
      <div className="text-xs md:flex md:justify-around md:flex-wrap md:px-4 md:text-xl">
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
      <div className="flex my-12 justify-center">
        <Button
          onClick={() => {
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
        {click && <Popup onClose={handlePopupToggle} />}
      </div>
    </section>
  );
};

export default FourthSection;
