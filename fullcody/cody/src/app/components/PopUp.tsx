import { mobilenavList } from "@/app/json/objects";
import x from "../images/x.svg";
import face from "../images/face.svg";
import inn from "../images/in.svg";
import insta from "../images/insta.svg";
import Image from "next/image";
import cody from "../images/cody.svg";

export const Nav = function ({
  call,
  click,
}: {
  call: boolean;
  click: () => void;
}) {
  return (
    <section
      className={`fixed z-20 my-4 right-0 left-0 bg-white transition-all duration-300 hidemenu:hidden`}
    >
      <div
        className={`overflow-hidden transition-all duration-300 ${
          call ? `max-h-screen` : `max-h-0`
        }`}
      >
        {mobilenavList.map((items) => (
          <div className="p-2 border">
            <p className="text-sm">{items.title}</p>
          </div>
        ))}
        <div className="my-4">
          <div className="flex p-4 items-center justify-center">
            <Image
              src={insta}
              alt=""
              width={800}
              height={800}
              className="w-8 mx-2"
            />
            <Image
              src={face}
              alt=""
              width={800}
              height={800}
              className="w-8 mx-2"
            />
            <Image
              src={x}
              alt=""
              width={800}
              height={800}
              className="w-8 mx-2"
            />
            <Image
              src={inn}
              alt=""
              width={800}
              height={800}
              className="w-8 mx-2"
            />
          </div>
        </div>
        <div className="my-4 flex justify-center">
          ©2024 Cody Inc. All rights reserved.
        </div>
        <div className="mx-auto w-1/2 my-4">
          <Image src={cody} alt="" width={800} height={800} className="w-32" />
        </div>
      </div>
    </section>
  );
};
