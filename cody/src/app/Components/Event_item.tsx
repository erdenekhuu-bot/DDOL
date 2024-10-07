import { EventProps } from "../types/type";

const Event_item = function ({ id, icon, image, title }: EventProps) {
  return (
    <div className="flex">
      <div className="w-1/3 flex items-center overflow-y-scroll">
        <p className="px-4 font-bold">{icon}</p>
        <p className="font-bold">{title}</p>
      </div>
      <div className="w-full">{image}</div>
    </div>
  );
};

export default Event_item;
