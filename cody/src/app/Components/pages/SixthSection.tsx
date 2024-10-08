"use client";
import { useState } from "react";
import slide_events from "../list/slide_events";
import { Event_item_show, Event_item_image } from "../Event_item";
import { SlideEvent } from "@/app/types/type";
import Image from "next/image";
interface SixthSectionProps {
  slide_events: SlideEvent[];
}

const SixthSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex == index ? null : index);
  };

  return (
    <section className="py-12 h-[650px] overflow-y-scroll rounded-tl-md rounded-tr-md">
      <div className="flex justify-center">
        <p className="font-bold text-2xl my-8">
          Кодиг ашиглан Та юу бүтээж чадах вэ?
        </p>
      </div>
      {/* {slide_events.map((item, index) => (
        <Event_item
          key={item.id}
          icon={item.icon}
          title={item.title}
          image={item.image}
          onClick={() => handleClick(index)}
          isActive={activeIndex == index}
        />
      ))} */}
      <section className="flex">
        <div className="w-1/3  p-4">
          {slide_events.map((item) => (
            <Event_item_show
              key={item.id}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
        <div className="w-full flex overflow-hidden">
          {slide_events.map((item) => (
            <Event_item_image image={item.image} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default SixthSection;
