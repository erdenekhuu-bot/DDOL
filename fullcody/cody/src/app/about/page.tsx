import { Statistics } from "../components/Statistics";
import { Team } from "../components/Team";
import { Purpose } from "../components/Purpose";
import { Services } from "../components/Services";
import { Organization } from "../components/Organization";

const About = function () {
  return (
    <section className="">
      <div className="relative pt-44">
        <img
          src="https://cody.mn/5e947460bab3e3e28a2d76be52a79bdd.svg"
          alt=""
          className=""
        />
        <div className="absolute top-32 right-56 w-[500px]">
          <p className="font-bold text-center py-6">Бидний тухай</p>
          <p className="">
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
        <Statistics />
      </div>
      <Team />
      <Purpose />
      <Services />
      <Organization />
    </section>
  );
};
export default About;
