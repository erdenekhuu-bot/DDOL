"use client";
import { Button } from "@mui/material";
import Solution_Item from "./Solution_Item";
import { PopupProps } from "../types/type";
import { opportunity_list } from "@/app/types/type";
import Opportunity_item from "./Opportunity_item";
import axios from "axios";
import { useState, useEffect } from "react";
import { solution_list } from "../types/type";
import { token } from "../types/type";

const Popup = function ({ onClose }: PopupProps) {
  const [save, setSave] = useState<solution_list>([]);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.1.41:1337/api/codysolutions",
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

  return (
    <section className="fixed inset-0 z-10 bg-white w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col">
      <div className="flex justify-center items-center p-4">
        <span className="font-bold text-3xl">Шийдлүүд</span>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </div>
      <div className="w-full p-8 flex justify-around flex-wrap overflow-scroll">
        {save.map((item) => (
          <Solution_Item
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};

const Popuplist = function ({ onClose }: PopupProps) {
  const [save, setSave] = useState<opportunity_list>([]);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.1.41:1337/api/codysolutions",
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
  return (
    <section className="fixed inset-0 z-10 bg-gray-200 w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col">
      <div className="flex justify-center items-center p-4">
        <span className="font-bold text-3xl">Системийн боломжууд</span>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </div>
      <div className="w-full p-8 flex justify-around flex-wrap overflow-scroll">
        {save.map((item) => (
          <Opportunity_item
            key={item.id}
            image={item.id}
            title={item.title}
            feature={item.feature}
          />
        ))}
      </div>
    </section>
  );
};

const Popupheader = function () {
  return (
    <section className="">
      <div>1</div>
      <div>2</div>
    </section>
  );
};

export { Popup, Popuplist, Popupheader };
