import Image from "next/image";
import ga4 from "../images/ga4.jpg";

const Article = function () {
  return (
    <section
      className="h-[800px] bg-cover bg-center z-0 drop-shadow-2xl"
      style={{
        backgroundImage: `url(${ga4.src})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-400 opacity-30 z-10"></div>
      <div></div>
    </section>
  );
};
export default Article;
