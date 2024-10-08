"use client";
import { SvgIcon } from "@mui/material";
import Opportunity_item from "../Opportunity_item";
import opportunity_list from "../list/opportunity_list";
import { Button } from "@mui/material";
import { useState } from "react";
import { Popup } from "../Popup";

const FifthSection = function () {
  const [click, setClick] = useState(false);

  const handlePopupToggle = () => {
    setClick(!click);
  };
  return (
    <div className="bg-gray-200 py-4 h-[600px]">
      <section className="flex justify-around h-[600px] overflow-hidden flex-wrap p-8">
        {opportunity_list.map((item) => (
          <Opportunity_item
            key={item.id}
            image={item.id}
            title={item.title}
            feature={item.feature}
          />
        ))}
      </section>
      <section className="flex justify-center">
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
      </section>
    </div>
  );
};

export default FifthSection;
