import { mobilenavList } from "@/app/json/objects";
import x from "../images/x.svg";
import face from "../images/face.svg";
import inn from "../images/in.svg";
import insta from "../images/insta.svg";
import Image from "next/image";
import cody from "../images/cody.svg";
import { solutions } from "@/app/json/objects";
import { Card } from "./Card";
import { features } from "@/app/json/objects";
import { Cards } from "./pages/Fifthsection";

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
        {mobilenavList.map((items: any) => (
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

export const Sol = function ({
  trigger,
  array,
}: {
  trigger: () => void;
  array: any;
}) {
  return (
    <section className="fixed inset-0 z-30 bg-gray-50 w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col">
      <div className="flex justify-center items-center p-4 my-4">
        <span className="font-bold text-3xl">Шийдлүүд</span>
      </div>
      <div className="mx-auto w-full p-8 flex justify-start flex-wrap overflow-y-scroll">
        {array.map((item: any) => (
          <Card key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
};

export const Fea = function ({
  trigger,
  array,
}: {
  trigger: () => void;
  array: any;
}) {
  return (
    <section className="fixed inset-0 z-30 bg-gray-50 w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col">
      <div className="flex justify-center items-center p-4 my-4">
        <span className="font-bold text-3xl">Системийн боломжууд</span>
      </div>
      <div className="mx-auto w-full p-8 flex justify-start flex-wrap overflow-y-scroll">
        {array.map((item: any) => (
          <Cards
            key={item.id}
            icon={item.icon}
            title={item.title}
            feature={item.feature}
          />
        ))}
      </div>
    </section>
  );
};
