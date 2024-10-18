import Image from "next/image";
import career from "../images/career.jpg";

const Career = function () {
  return (
    <section className="h-[800px]">
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

      <div className="z-10 ">About</div>
    </section>
  );
};

export default Career;
