"use client";
import { useState } from "react";
import slide_events from "../list/slide_events";

const SixthSection = function () {
  const [click, setClick] = useState<boolean>(false);

  return (
    <section className="h-[600px] py-12">
      <div className="flex justify-center">
        <span className="font-bold text-2xl">
          Кодиг ашиглан Та юу бүтээж чадах вэ?
        </span>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-blue-300">1</div>
        <div className="w-full bg-yellow-300">2</div>
      </div>
    </section>
  );
};

export default SixthSection;
