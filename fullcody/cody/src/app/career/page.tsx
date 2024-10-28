import career from "../images/career.jpg";
import tsuk1 from "../images/tsuk1.png";
import tsuk2 from "../images/tsuk2.png";
import tsuk3 from "../images/tsuk3.png";
import tsuk4 from "../images/tsuk4.png";
import { Tsukcard } from "../components/Tsukcard";
import { Organ } from "../components/Organization";
import { Whycodypage } from "../pages/Whycodypage";
import { Openjobspage } from "../pages/Openjobspage";

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
      <Whycodypage />
      <div className="py-4 bg-gray-50">
        <p className="text-2xl font-bold py-8 text-center">
          Сонгон шалгаруулалтын үе шат
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly p-8 bg-gray-50">
        <Tsukcard tsuk={tsuk1} content="Анкетын сонгон шалгаруулалт" />
        <Tsukcard tsuk={tsuk2} content="Ярилцлага" />
        <Tsukcard tsuk={tsuk3} content="Нэмэлт сонгон шалгаруулалт" />
        <Tsukcard tsuk={tsuk4} content="Ажилд авах шийдвэр" />
      </div>
      <Openjobspage />
      <Organ />
    </section>
  );
};

export default Career;
