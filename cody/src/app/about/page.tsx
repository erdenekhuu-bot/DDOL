const About = function () {
  return (
    <section className="">
      <div className="z-0 relative py-48 overflow-hidden h-[1350px]">
        <img
          className="object-cover"
          src="https://cody.mn/5e947460bab3e3e28a2d76be52a79bdd.svg"
          alt=""
        />
        <div className="absolute px-20 top-36 right-14 w-[50%]">
          <p className="text-center text-2xl font-bold my-4">Бидний тухай</p>
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
        <div className="absolute p-8 bottom-10 z-10">
          <p className="font-bold text-white text-3xl">Статистик</p>
        </div>
      </div>
    </section>
  );
};

export default About;
