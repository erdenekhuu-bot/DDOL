"use client";
import { useContext } from "react";
import { EventProps } from "../types/type";
import Image from "next/image";
import { EventItem, EventItemImage } from "../types/type";
import { Context } from "./pages/SixthSection";

const Event_item_show = function ({
  icon,
  title,
  image,
  onClick,
  isActive,
}: EventItem) {
  return (
    <section
      onClick={onClick}
      className="hidden hover:cursor-pointer items-center p-4 md:flex"
    >
      <img className="mx-4" width={20} height={20} src={icon} alt="" />
      <p className="font-bold text-opacity-60 hover:text-purple-500">{title}</p>
    </section>
  );
};

const Event_item_image = function ({ image, isActive }: EventItemImage) {
  const context = useContext(Context);
  return (
    <div className="sticky top-0 flex-shrink-0 w-full h-full py-4">
      <Image
        width={980}
        height={980}
        src={image}
        alt=""
        className="object-cover"
      />
    </div>
  );
};

export { Event_item_show, Event_item_image };
