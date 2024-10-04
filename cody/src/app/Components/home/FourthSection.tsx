import solution_list from "../list/solution_list";
import Solution_Item from "../Solution_Item";

const FourthSection = function () {
  return (
    <section className="h-[500px] my-4">
      <div className="text-center">
        <span className="font-bold text-[20px]">Бидний шийдэл</span>
      </div>
      <div className="flex flex-wrap p-20">
        <Solution_Item
          title="Headless Ecommerce"
          content="Headless цахим худалдааны шийдлээр бизнесийн онцлогтоо тохирох цахим худалдааг бүтээж ирээдүйтэй бэлтгэ"
        />
        <Solution_Item
          title="Multi Store"
          content="Ашиглахад хялбар, салбар бизнесүүдийнхээ сүлжээг бий болгож удирдах"
        />
        <Solution_Item
          title="Marketplace"
          content="Олон борлуулагчдын бүтээгдэхүүн, үйлчилгээг нэгтгэж цахим худалдааны платформыг бий болгоорой"
        />
        <Solution_Item
          title="Media Platform"
          content="Медиа платформын тусламжтайгаар контент дээр суурилсан цахим худалдаагаа эхлүүлээрэй"
        />
      </div>
    </section>
  );
};

export default FourthSection;
