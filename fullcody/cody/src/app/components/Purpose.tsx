import maps from "../../app/images/map.jpg";
import Image from "next/image";
import mission from "../images/mission.svg";

export const Purpose = function () {
  return (
    <section
      className="h-[600px] bg-cover mobilecustom:bg-center"
      style={{
        backgroundImage: `url(${maps.src})`,
      }}
    >
      <div className="relative w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={mission}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="text-3xl py-8 font-bold text-center">Бидний зорилго</p>
      </div>
      <div className="hidden relative mobilecustom:block">
        <Image
          src={mission}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
        />
        <p className="text-3xl py-8 font-bold text-center uppercase">
          Бидний зорилго
        </p>
      </div>
      <div className="flex justify-center my-8">
        <p className="text-[50px] text-center w-[90%] mobilecustom:text-xl">
          Дэвшилтэд шийдэл, технологиор дамжуулан мянга мянган бизнест боломжийг
          нээж өгнө.
        </p>
      </div>
    </section>
  );
};
