"use client";
import { useState } from "react";
import slide_events from "../list/slide_events";
import Event_item from "../Event_item";

const SixthSection = function () {
  const [click, setClick] = useState<boolean>(false);

  return (
    <section className="py-12 h-[650px] overflow-y-scroll">
      <div className="flex justify-center">
        <p className="font-bold text-2xl my-8">
          Кодиг ашиглан Та юу бүтээж чадах вэ?
        </p>
      </div>
      {slide_events.map((item) => (
        <Event_item
          key={item.id}
          icon={item.icon}
          title={item.title}
          image={item.image}
        />
      ))}
    </section>
  );
};

export default SixthSection;
