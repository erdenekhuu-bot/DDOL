"use client";
import { useState, createContext } from "react";
import slide_events from "../list/slide_events";
import { Event_item_show, Event_item_image } from "../Event_item";

export const Context = createContext<number | null>(0);

const SixthSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex == index ? null : index);
  };

  return (
    <Context.Provider value={activeIndex}>
      <section className="py-12 my-8 overflow-hidden rounded-tl-md rounded-tr-md">
        <div className="flex justify-center">
          <p className="font-bold text-2xl my-8">
            Кодиг ашиглан Та юу бүтээж чадах вэ?
          </p>
        </div>
        <section className="flex h-[650px] overflow-y-scroll">
          <div className="w-1/3 p-4">
            {slide_events.map((item, index) => (
              <Event_item_show
                key={item.id}
                icon={item.icon}
                title={item.title}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <div className="w-full flex overflow-hidden">
            {slide_events.map((item, index) => (
              <Event_item_image
                key={item.id}
                image={item.image}
                isActive={index == activeIndex}
              />
            ))}
          </div>
        </section>
      </section>
    </Context.Provider>
  );
};

export default SixthSection;
