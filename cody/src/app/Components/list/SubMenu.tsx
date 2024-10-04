import Image from "next/image";
import menu_ios from "../../images/arrow_ios.png";

const SubMenu = function () {
  return (
    <section className="w-full h-full overflow-hidden">
      <div className="flex justify-between px-8">
        <span>Коди Платформ</span>
        <Image src={menu_ios} width={40} height={40} alt="" />
      </div>
    </section>
  );
};

export default SubMenu;
