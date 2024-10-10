import Image from "next/image";
import instagram from "../../app/images/instagram.png";
import facebook from "../../app/images/facebook-logo.png";

const Footer = function () {
  return (
    <footer className="z-10 py-8 px-6 hidden w-full justify-around bg-purple-900 text-white md:flex">
      <section className="text-white">
        <div className="font-bold text-xl my-8">КОДИ ПЛАТФОРМ</div>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Платформын тухай
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Шийдэл
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Онцлог, боломжууд
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Бизнесийн төрөл
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Харилцагчид
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Web Submit 2022
        </p>
      </section>
      <section className="text-white">
        <div className="font-bold text-xl my-8">КОДИ ПЛАТФОРМ</div>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Танилцуулга
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Үйлчилгээний төрөл
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Хамтрагч байгууллага
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Холбоо барих
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Ажлын байр
        </p>
        <p className="my-2 text-xs hover:cursor-pointer hover:text-gray-300">
          Веб үйлчилгээний сургалт
        </p>
      </section>
      <section className="text-white">
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
      <section className="text-white">
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

export default Footer;
