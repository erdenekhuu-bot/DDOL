"use client";
import Opportunity_item from "../Opportunity_item";
import { opportunity_list } from "@/app/types/type";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Popuplist } from "../Popup";
import axios from "axios";
import { token } from "@/app/types/type";
import Draggable from "react-draggable";

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
    <div className="bg-gray-100 py-4">
      {click && (
        <div
          onClick={handlePopupToggle}
          className="fixed z-10 inset-0 bg-black bg-opacity-50 w-full h-full"
        ></div>
      )}
      <div className="text-center p-8">
        <span className="font-bold text-2xl">Системийн боломжууд</span>
      </div>
      <section className="flex overflow-hidden p-4 md:justify-around md:flex-wrap md:p-8 md:h-[560px]">
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
          style={{
            background:
              "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%)",
          }}
        >
          Дэлгэрэнгүй
        </Button>
        {click && <Popuplist onClose={handlePopupToggle} />}
      </section>
    </div>
  );
};

export default FifthSection;
