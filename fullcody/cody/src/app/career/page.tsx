import Image from "next/image";
import career from "../images/career.jpg";
import { reason } from "../json/objects";
import { Cards } from "../components/pages/Fifthsection";
import tsuk1 from "../images/tsuk1.png";
import tsuk2 from "../images/tsuk2.png";
import tsuk3 from "../images/tsuk3.png";
import tsuk4 from "../images/tsuk4.png";

const Career = function () {
  return (
    <section className="">
      <div
        className="relative h-[480px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${career.src})`,
        }}
      >
        <p className="absolute bottom-24 font-bold text-white text-xl">
          Бид авьяаслаг, чөлөөт сэтгэхүйтэй, бүтээлч, хөдөлмөрч залуустай
          хамтран ажиллахдаа үргэлж нээлттэй байх болно.
        </p>
      </div>

      <div className="">
        <p className="text-2xl font-bold py-8 text-center">Яагаад Коди гэж?</p>
        <div className="flex justify-evenly flex-wrap">
          {reason.map((items) => (
            <Cards key={items.id} title={items.title} />
          ))}
        </div>
      </div>

      <div className="py-4 bg-gray-50">
        <p className="text-2xl font-bold py-8 text-center">
          Сонгон шалгаруулалтын үе шат
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly p-8 bg-gray-50">
        <div className="relative hover:drop-shadow-xl">
          <Image
            src={tsuk1}
            alt=""
            width={800}
            height={800}
            className="w-60 z-10"
          />
          <p className="absolute top-24 left-14 font-bold">
            Анкетын сонгон шалгаруулалт
          </p>
        </div>
        <div className="relative hover:drop-shadow-xl">
          <Image
            src={tsuk2}
            alt=""
            width={800}
            height={800}
            className="w-60 z-10"
          />
          <p className="absolute top-24 left-14 font-bold">Ярилцлага</p>
        </div>
        <div className="relative hover:drop-shadow-xl">
          <Image
            src={tsuk3}
            alt=""
            width={800}
            height={800}
            className="w-60 z-10"
          />
          <p className="absolute top-24 left-14 font-bold">
            Нэмэлт сонгон шалгаруулалт
          </p>
        </div>
        <div className="relative hover:drop-shadow-xl">
          <Image
            src={tsuk4}
            alt=""
            width={800}
            height={800}
            className="w-60 z-10"
          />
          <p className="absolute top-24 left-14 font-bold">
            Ажилд авах шийдвэр
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
