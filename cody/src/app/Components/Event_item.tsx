import { EventProps } from "../types/type";
import Image from "next/image";

interface EventItemProps {
  icon: string;
  title: string;
  image: string;
  onClick: () => void;
  isActive: boolean;
}

const Event_item = ({
  icon,
  title,
  image,
  onClick,
  isActive,
}: EventItemProps) => {
  return (
    <section className="flex">
      <div className="w-1/3 flex items-center p-4">
        <section onClick={onClick} className="flex hover:cursor-pointer">
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
      <div
        className={`flex overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <Image
          width={800}
          height={800}
          src={image}
          alt=""
          className={`transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
};

export default Event_item;
