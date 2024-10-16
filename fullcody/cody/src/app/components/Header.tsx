"use client";
import Image from "next/image";
import cody from "../images/cody.svg";
import Link from "next/link";
import { Button } from "@mui/material";
import { navList } from "../json/objects";
import menu from "../images/white_menu.png";
import x from "../images/x_ios.png";
import { useState, useRef } from "react";
import { Nav } from "./pages/PopUp";

export const Header = function () {
  const [click, setClick] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const togglePopup = () => {
    setTrigger(!trigger);
  };

  return (
    <header className="fixed w-full bg-white z-20 p-4 drop-shadow-2xl">
      <nav className="flex justify-between items-center navcustom:block mobilecustom:flex">
        <Link href="/">
          <Image
            src={cody}
            alt=""
            width={800}
            height={800}
            className="w-32 navcustom:w-44"
          />
        </Link>
        <div className="hidden relative hover:cursor-pointer mobilecustom:block">
          <Image
            onClick={() => {
              setClick(!click);
              togglePopup();
            }}
            src={click ? x : menu}
            alt=""
            width={40}
            height={40}
            className="bg-purple-900 rounded-lg p-2"
          />
        </div>
        <div className="flex items-center justify-between navcustom:flex navcustom:items-center navcustom:justify-between mobilecustom:hidden">
          {navList.map((items) => (
            <Link
              key={items.id}
              href={items.url}
              scroll={true}
              className="mx-4"
            >
              <div key={items.id} className="font-bold text-sm text-gray-800 ">
                {items.title}
              </div>
            </Link>
          ))}

          <Button
            variant="contained"
            className="px-4 py-2 text-[12px] rounded-lg"
            style={{
              background:
                "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%);",
            }}
          >
            Холбоо барих
          </Button>
        </div>
      </nav>
      <Nav
        call={click}
        click={() => {
          setTrigger(!trigger);
        }}
      />
    </header>
  );
};
