import { EventProps } from "../types/type";
import Image from "next/image";

const Event_item = function ({ id, icon, image, title, click }: EventProps) {
  return (
    <div className="flex">
      <div className="w-1/3 flex items-center p-4 overflow-y-scroll ">
        <section
          onClick={click}
          className="flex hover:cursor-pointer
        "
        >
          <Image
            className="mx-4 font-bold"
            width={20}
            height={20}
            src={icon}
            alt=""
          />
          <p className="font-bold text-opacity-60 hover:text-purple-500">
            {title}
          </p>
        </section>
      </div>
      <div className="w-full">{image}</div>
    </div>
  );
};

export default Event_item;
