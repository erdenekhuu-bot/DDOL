import Image from "next/image";
import almaa from "../../images/almaa.png";
import coinhub from "../../images/coinhub.png";
import cose from "../../images/cose.png";
import playtime from "../../images/playtime.png";
import sarlag from "../../images/sarlag.png";
import sarnai from "../../images/sarnai.png";
import shoppy from "../../images/shoppy.png";
import smartstore from "../../images/smartstore.png";
import technozone from "../../images/technozone.png";
import vistastore from "../../images/vistastore.jpg";
import zanady from "../../images/zanady.png";

const SecondSection = function () {
  return (
    <section className="flex items-center justify-center p-4 opacity-50 overflow-hidden">
      <Image
        src={almaa}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100"
      />
      <Image
        src={coinhub}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={cose}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={playtime}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={sarlag}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={sarnai}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={shoppy}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={smartstore}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={technozone}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={vistastore}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
      <Image
        src={zanady}
        width={80}
        height={80}
        alt=""
        className="hover:cursor-pointer hover:opacity-100 mx-4"
      />
    </section>
  );
};

export default SecondSection;
