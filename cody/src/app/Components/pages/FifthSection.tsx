"use client";
import Opportunity_item from "../Opportunity_item";
import { opportunity_list } from "@/app/types/type";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Popuplist } from "../Popup";
import axios from "axios";
import { token } from "@/app/types/type";

const FifthSection = function () {
  const [click, setClick] = useState(false);
  const [save, setSave] = useState<opportunity_list>([]);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.1.41:1337/api/codyopportunits",
        config
      );
      setSave(response.data.data);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    read_list();
  }, []);

  const handlePopupToggle = () => {
    setClick(!click);
  };
  return (
    <div className="bg-gray-100 py-4 ">
      <div className="text-center mt-16">
        <span className="font-bold text-2xl">Системийн боломжууд</span>
      </div>
      <section className="flex justify-around h-[560px] overflow-hidden flex-wrap p-8">
        {save.map((item) => (
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
          className="px-8 py-4 my-8 bg-purple-900 text-xs font-bold rounded-lg"
        >
          Дэлгэрэнгүй
        </Button>
        {click && <Popuplist onClose={handlePopupToggle} />}
      </section>
    </div>
  );
};

export default FifthSection;
