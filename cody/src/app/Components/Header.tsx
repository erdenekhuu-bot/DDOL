"use client";
import SVGcody from "../svg/SVG";
import { Button } from "@mui/material";
import Image from "next/image";
import menu from "../../app/images/white_menu.png";
import x from "../../app/images/x_ios.png";
import menu_list from "./list/menu";
import { useState, useContext, createContext } from "react";

const Header = function () {
  const [click, setClick] = useState(false);

  return (
    <nav className="fixed bg-[white] w-full flex justify-between px-8 py-4 z-10 border drop-shadow">
      <section>
        <SVGcody />
      </section>
      <section className="md:hidden hover:cursor-pointer">
        {click == true ? (
          <Image
            onClick={function () {
              setClick(!click);
            }}
            src={menu}
            alt=""
            width={50}
            height={50}
            className="bg-purple-900 rounded-lg p-2"
          />
        ) : (
          <Image
            onClick={function () {
              setClick(!click);
            }}
            src={x}
            alt=""
            width={50}
            height={50}
            className="bg-purple-900 rounded-lg p-2"
          />
        )}
      </section>
      <section className="hidden justify-between items-center md:flex">
        {menu_list.map((item) => (
          <div key={item.id} className="mx-4">
            <span className="font-bold text-[14px] hover:cursor-pointer transition hover:text-purple-900">
              {item.title}
            </span>
          </div>
        ))}
        <div className="mx-4">
          <Button variant="contained" className="bg-purple-900 p-4 rounded-xl">
            <span className="font-bold text-[10px]">Холбоо барих</span>
          </Button>
        </div>
      </section>
    </nav>
  );
};

export default Header;
