"use client";
import Solution_Item from "./Solution_Item";
import { PopupProps } from "../types/type";
import { opportunity_list } from "@/app/types/type";
import Opportunity_item from "./Opportunity_item";
import axios from "axios";
import { useState, useEffect } from "react";
import { solution_list } from "../types/type";
import { token } from "../types/type";
import menu_list from "./list/menu";
import header_arrow from "../../app/images/header_arrow.svg";
import insta from "../../app/images/insta.svg";
import face from "../../app/images/face.svg";
import x from "../../app/images/x.svg";
import inx from "../../app/images/in.svg";
import Image from "next/image";
import cody from "../../app/images/cody.svg";

const Popup = function ({ onClose, isOpen }: PopupProps) {
  const [save, setSave] = useState<solution_list>([]);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.0.102:1337/api/codysolutions",
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
    <section
      onClick={onClose}
      className="fixed inset-0 z-10 bg-white w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col"
    >
      <div className="flex justify-center items-center p-4">
        <span className="font-bold text-3xl">Шийдлүүд</span>
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
        "http://192.168.0.102:1337/api/codysolutions",
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
    <section
      onClick={onClose}
      className="fixed inset-0 z-10 bg-gray-200 w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col"
    >
      <div className="flex justify-center items-center p-4">
        <span className="font-bold text-3xl">Системийн боломжууд</span>
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

const Popupheader = function ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <section
      className={`fixed z-0 mt-14 right-0 left-0 bg-white transition-all duration-300`}
    >
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? `max-h-screen` : `max-h-0`
        }`}
      >
        <section className="w-full">
          {menu_list.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-3 border border-r-0 border-l-0 hover:cursor-pointer"
            >
              <span className="text-[14px] hover:cursor-pointer transition">
                {item.title}
              </span>
              <Image src={header_arrow} width={10} height={10} alt="" />
            </div>
          ))}
          <div className="my-8 flex justify-center">
            <Image src={insta} width={20} height={20} alt="" className="mx-4" />
            <Image src={face} width={20} height={20} alt="" className="mx-4" />
            <Image src={x} width={20} height={20} alt="" className="mx-4" />
            <Image src={inx} width={20} height={20} alt="" className="mx-4" />
          </div>
          <div className="my-8 flex justify-center text-sm">
            ©2024 Cody Inc. All rights reserved.
          </div>
          <div className="my-10 flex justify-center">
            <Image src={cody} width={90} height={40} alt="" />
          </div>
        </section>
      </div>
    </section>
  );
};

export { Popup, Popuplist, Popupheader };
