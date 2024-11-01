import Image from "next/image";
import instagram from "../../app/images/instagram.png";
import facebook from "../../app/images/facebook-logo.png";

export const Footer = function () {
  return (
    <footer
      className="z-10 py-8 px-6 flex w-full text-white mobilecustom:hidden"
      style={{
        background:
          "linear-gradient(-91.81deg, rgb(142, 45, 226) 0%, rgb(142, 45, 226) 0%, rgb(77, 2, 224) 105.82%, rgb(76, 2, 224) 105.83%, rgba(75, 1, 224, 0.043) 105.84%, rgba(74, 0, 224, 0) 105.85%, rgb(74, 0, 224) 105.85%, rgb(77, 2, 224) 105.85%) left center",
      }}
    >
      <section id="contact" className="text-white mx-20">
        <div className="font-bold text-xl my-8">ХОЛБОО БАРИХ</div>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Имэйл: info@cody.mn
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Хаяг: Нью Хоризон оффис, 401 тоот, Улаанбаатар хот
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Утас: 77778977
        </p>
      </section>
      <section className="text-white mx-20">
        <p className="font-bold text-xl my-20"></p>
        <div className="flex items-center">
          <Image src={instagram} width={20} height={20} alt="" />
          <p className="my-2 text-xs hover:cursor-pointer px-2 hover:text-gray-300">
            instagram
          </p>
        </div>
        <div className="flex items-center">
          <Image src={facebook} width={20} height={20} alt="" />
          <p className="my-2 text-xs hover:cursor-pointer px-2 hover:text-gray-300">
            facebook
          </p>
        </div>
      </section>
    </footer>
  );
};
