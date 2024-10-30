import { Team } from "../components/Team";
import { Purpose } from "../components/Purpose";
import { Services } from "../components/Services";
import { Organization } from "../components/Organization";
import about_mobile from "../images/about_mobile.svg";
import Image from "next/image";
import about from "../images/about.svg";
import { Statisticspage } from "../pages/Statisticspage";

const About = function () {
  return (
    <section className="">
      <div className="relative pt-44">
        <div className="mobilecustom:hidden">
          <img
            src="https://cody.mn/5e947460bab3e3e28a2d76be52a79bdd.svg"
            alt=""
            className=""
          />
        </div>
        <div className="hidden mobilecustom:block">
          <Image
            src={about_mobile}
            alt=""
            width={1000}
            height={1000}
            className=""
          />
        </div>
        <p className="hidden text-sm mobilecustom:block mobilecustom:px-4 mobilecustom:my-4">
          Коди ХХК нь худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл
          оюун ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй цогц платформыг
          хөгжүүлж зах зээлд амжилттай нэвтрүүлэн ажиллаж байна. Өнөөдрийн
          байдлаар Коди нь дотоодын 100 гаруй томоохон компаниудад платформ
          түрээсийн үйлчилгээгээ үзүүлж, нийт 1 сая давсан хэрэглэгчдэд хүрч,
          дотоодын томоохон 15 орчим банк болон финтек төслүүдэд системийн
          дэмжлэг үзүүлж, нийт 1,000 гаруй компанид ямар нэгэн байдлаар шийдлээ
          түгээж, 20 гаруй салбарыг цахимжуулан ажиллаж байна.
        </p>
        <div className="absolute top-32 right-56 w-[500px] mobilecustom:hidden">
          <div className="relative w-[500px] mx-auto mobilecustom:hidden">
            <Image
              src={about}
              width={800}
              height={800}
              alt=""
              className="w-20 absolute top-4 right-1/4"
            />
            <p className="text-2xl py-8 font-bold text-center">Бидний тухай</p>
          </div>
          <div className="hidden relative mobilecustom:block">
            <Image
              src={about}
              width={800}
              height={800}
              alt=""
              className="w-20 absolute top-1 right-0 mobilecustom:mx-24"
            />
            <p className="text-2xl py-8 font-bold text-center uppercase">
              Бидний тухай
            </p>
          </div>
          <p className="mobilecustom:hidden">
            Коди ХХК нь худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл
            оюун ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй цогц платформыг
            хөгжүүлж зах зээлд амжилттай нэвтрүүлэн ажиллаж байна. Өнөөдрийн
            байдлаар Коди нь дотоодын 100 гаруй томоохон компаниудад платформ
            түрээсийн үйлчилгээгээ үзүүлж, нийт 1 сая давсан хэрэглэгчдэд хүрч,
            дотоодын томоохон 15 орчим банк болон финтек төслүүдэд системийн
            дэмжлэг үзүүлж, нийт 1,000 гаруй компанид ямар нэгэн байдлаар
            шийдлээ түгээж, 20 гаруй салбарыг цахимжуулан ажиллаж байна.
          </p>
        </div>
        <Statisticspage />
      </div>
      <Team />
      <Purpose />
      <Services />
      <Organization />
    </section>
  );
};
export default About;
