"use client";
import solution_list from "../list/solution_list";
import Solution_Item from "../Solution_Item";
import { Button } from "@mui/material";
import { useState } from "react";
import Popup from "../Popup";

const FourthSection = function () {
  const [click, setClick] = useState(false);

  return (
    <section className="h-[500px] my-4">
      <div className="text-center">
        <span className="font-bold text-[20px]">Бидний шийдэл</span>
      </div>
      <div className="flex justify-evenly flex-wrap p-4">
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
            if (click) <Popup />;
          }}
          variant="contained"
          className="px-8 py-4 bg-purple-900 text-xs font-bold rounded-lg"
        >
          Дэлгэрэнгүй
        </Button>
      </div>
    </section>
  );
};

export default FourthSection;
