import { mobilenavList } from "@/app/json/objects";
import x from "../images/x.svg";
import face from "../images/face.svg";
import inn from "../images/in.svg";
import insta from "../images/insta.svg";
import Image from "next/image";
import cody from "../images/cody.svg";
import { Card } from "./Card";
import { Cards, CardsMobile } from "./pages/Fifthsection";
import Link from "next/link";
import { mixing } from "../components/Header";
import imgsol from "../images/svgsoltion.svg";
import popfeature from "../images/popfeature.svg";

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
          <Link key={items.id} href={mixing(items.url)} scroll={true}>
            <div className="p-4 border">
              <p className="text-sm">{items.title}</p>
            </div>
          </Link>
        ))}
        <div className="my-8">
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
        <div className="mx-auto w-1/2 my-12">
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
      <div className="relative my-4 w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={imgsol}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="text-2xl py-8 font-bold text-center">Шийдлүүд</p>
      </div>
      <div className="mx-auto w-full px-20 flex justify-start flex-wrap overflow-y-scroll mobilecustom:px-0">
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
    <section className="fixed inset-0 z-30 bg-popupcolor bg-opacity-50 w-[90%] h-[90%] rounded-lg mx-auto my-auto flex flex-col">
      {/* <div className="flex justify-center items-center p-4 my-4">
        <span className="font-bold text-3xl">Системийн боломжууд</span>
      </div> */}
      <div className="relative my-4 w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={popfeature}
          width={800}
          height={800}
          alt=""
          className="w-20 absolute top-4 right-1/4"
        />
        <p className="text-2xl py-8 font-bold text-center">
          Системийн боломжууд
        </p>
      </div>
      <div className="mx-auto w-full p-8 flex justify-start flex-wrap overflow-y-scroll mobilecustom:p-0">
        {array.map((item: any) => (
          <CardsMobile
            key={item.id}
            icon={item.icon}
            title={item.title}
            feature={item.feature}
            customcolor={item.customcolor}
          />
        ))}
      </div>
    </section>
  );
};
