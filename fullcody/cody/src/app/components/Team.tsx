import Image from "next/image";
import zol from "../../app/images/zol.png";
import zolorg from "../../app/images/zolorg.png";
import gun from "../../app/images/gun.png";
import gunorg from "../../app/images/gunorg.png";
import tur from "../../app/images/tur.png";
import turorg from "../../app/images/turorg.png";
import er from "../../app/images/er.png";
import erorg from "../../app/images/erorg.png";
import us from "../../app/images/us.png";
import usorg from "../../app/images/usorg.png";

export const Team = function () {
  return (
    <section className="z-20 py-20 w-full bg-white">
      <p className="font-bold text-3xl text-center py-6">Удирдлагын баг</p>
      <div className="flex justify-evenly p-4">
        <div className="rounded-lg">
          <Image
            src={zolorg}
            alt=""
            width={800}
            height={800}
            className="w-56"
          />
          <p className="font-bold text-center text-sm my-4">ZOLJARGAL. A</p>
          <p className="text-center text-sm my-2">Chief Executive Officer</p>
          <p className="text-center">CEO</p>
        </div>
        <div className="rounded-lg">
          <Image
            src={gunorg}
            alt=""
            width={800}
            height={800}
            className="w-56"
          />
          <p className="font-bold text-center text-sm my-4">GUNDSAMBUU. N</p>
          <p className="text-center text-sm my-2">Vice President, Technology</p>
          <p className="text-center">CTO</p>
        </div>
        <div className="rounded-lg">
          <Image
            src={turorg}
            alt=""
            width={800}
            height={800}
            className="w-56"
          />
          <p className="font-bold text-center text-sm my-4">TURBOLD. A</p>
          <p className="text-center text-sm my-2">
            Head of Front-End Development Division
          </p>
        </div>
        <div className="rounded-lg">
          <Image src={erorg} alt="" width={800} height={800} className="w-56" />
          <p className="font-bold text-center text-sm my-4">ERBOLD. D</p>
          <p className="text-center text-sm my-2">
            Head of Process Development Division
          </p>
        </div>
        <div className="rounded-lg">
          <Image src={usorg} alt="" width={800} height={800} className="w-56" />
          <p className="font-bold text-center text-sm my-4">USUKHBAYAR. G</p>
          <p className="text-center text-sm my-2">
            Head of Data and Listing Division
          </p>
        </div>
      </div>
    </section>
  );
};
