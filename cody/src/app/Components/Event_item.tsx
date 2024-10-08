import { EventProps } from "../types/type";
import Image from "next/image";
import { EventItem, EventItemImage } from "../types/type";

// const Event_item = ({
//   icon,
//   title,
//   image,
//   onClick,
//   isActive,
// }: EventItemProps) => {
//   return (
//     <section className="flex items-center h-16">
//       <div className="w-1/3 flex items-center p-4">
//         <section
//           onClick={onClick}
//           className="flex hover:cursor-pointer items-center"
//         >
//           <Image className="mx-4" width={20} height={20} src={icon} alt="" />
//           <p className="font-bold text-opacity-60 hover:text-purple-500">
//             {title}
//           </p>
//         </section>
//       </div>

//       <div
//         className={`flex transition-opacity duration-300 overflow-hidden w-full ${
//           isActive ? "opacity-100 w-[800px]" : "opacity-0 w-[0px]"
//         }`}
//       >
//         <Image
//           width={800}
//           height={800}
//           src={image}
//           alt=""
//           className="transition-opacity duration-100"
//         />
//       </div>
//     </section>
//   );
// };

const Event_item_show = function ({
  icon,
  title,
  image,
  onClick,
  isActive,
}: EventItem) {
  return (
    <section className="flex hover:cursor-pointer items-center">
      <Image className="mx-4" width={20} height={20} src={icon} alt="" />
      <p className="font-bold text-opacity-60 hover:text-purple-500">{title}</p>
    </section>
  );
};

const Event_item_image = function ({
  image,
  onClick,
  isActive,
}: EventItemImage) {
  return (
    <div className="flex-shrink-0 w-full h-full">
      <Image
        width={900}
        height={900}
        src={image}
        alt=""
        className="object-cover"
      />
    </div>
  );
};

export { Event_item_show, Event_item_image };
