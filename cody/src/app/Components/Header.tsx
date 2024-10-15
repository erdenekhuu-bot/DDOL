"use client";
import cody from "../../app/images/cody.svg";
import { Button } from "@mui/material";
import Image from "next/image";
import menu from "../../app/images/white_menu.png";
import x from "../../app/images/x_ios.png";
import menu_list from "./list/menu";
import { useState } from "react";
import { Popupheader } from "./Popup";
import Link from "next/link";

const Header = function () {
  const [click, setClick] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const togglePopup = () => {
    setTrigger(!trigger);
  };

  return (
    <nav className="fixed w-full flex items-center justify-between bg-white px-8 py-4 z-10 border drop-shadow-2xl">
      <Link href="/">
        <Image src={cody} width={100} height={40} alt="" />
      </Link>
      <section className="md:hidden hover:cursor-pointer relative">
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
      </section>
      <section className="hidden justify-between items-center md:flex">
        {menu_list.map((item) => (
          <div key={item.id} className="mx-4">
            <Link
              key={item.id}
              href={item.url}
              className="font-bold text-[14px] hover:cursor-pointer transition hover:text-purple-900"
            >
              {item.title}
            </Link>
          </div>
        ))}
        <div className="mx-4">
          <Link href="/contact-form">
            <Button
              variant="contained"
              className="bg-purple-900 p-4 rounded-xl"
            >
              <span className="font-bold text-[10px]">Холбоо барих</span>
            </Button>
          </Link>
        </div>
      </section>
      <Popupheader isOpen={trigger} onClick={() => setTrigger(false)} />
    </nav>
  );
};

export default Header;
