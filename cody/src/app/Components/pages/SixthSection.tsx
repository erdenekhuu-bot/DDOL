"use client";
import { useState } from "react";
import slide_events from "../list/slide_events";
import Event_item from "../Event_item";

const SixthSection = function () {
  const [click, setClick] = useState<boolean>(false);

  return (
    <section className="h-[600px] py-12">
      <div className="flex justify-center">
        <span className="font-bold text-2xl">
          Кодиг ашиглан Та юу бүтээж чадах вэ?
        </span>
      </div>
      {slide_events.map((item) => (
        <Event_item
          key={item.id}
          icon={item.id}
          title={item.title}
          image={item.id}
        />
      ))}
    </section>
  );
};

export default SixthSection;
