import Image from "next/image";
import image_list from "../list/image_list";

const SecondSection = function () {
  return (
    <section className="flex items-center justify-center p-4 opacity-50 overflow-hidden">
      {image_list.map((item) => (
        <Image
          key={item.id}
          src={item.image}
          width={80}
          height={80}
          alt=""
          className="hover:cursor-pointer hover:opacity-100 mx-4"
        />
      ))}
    </section>
  );
};

export default SecondSection;
