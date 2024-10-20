import { sliding } from "@/app/json/objects";
import Image from "next/image";

export const Secondsection = function () {
  return (
    <section className="flex justify-evenly overflow-x-scroll items-center p-2">
      {sliding.map((items) => (
        <div key={items.id} className="">
          <Image
            src={items.image}
            alt=""
            width={800}
            height={800}
            className="w-16 mx-4"
          />
        </div>
      ))}
    </section>
  );
};
