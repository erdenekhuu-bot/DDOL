"use client";
import Image from "next/image";
import slide_1 from "../../images/slide1.webp";
import slide_2 from "../../images/slide2.webp";
import slide_3 from "../../images/slide3.webp";
import { slide_category } from "@/app/types/type";
import { useState, useEffect } from "react";
import axios from "axios";
import { token } from "@/app/types/type";

const ThirdSection = function () {
  const [save, setSave] = useState<slide_category>([]);

  const read_list = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://192.168.1.41:1337/api/codyplatforms?populate=*",
        config
      );
      setSave(response.data.data);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    read_list();
  }, []);

  const [tap, setTap] = useState(0);
  const arr: JSX.Element[] = [];
  console.log(save);
  return (
    <section className="bg-white py-12 overflow-hidden md:px-20">
      {tap == 0 && (
        <div className="block transition md:flex">
          <Image src={slide_1} width={500} height={500} alt="" />
          <div className="px-10">
            <div className="mt-10 text-center md:text-left">
              <span className="font-bold text-[20px]">КОДИ ПЛАТФОРМ</span>
            </div>
            <div className="mt-4">
              <span className="text-xs text-center md:text-xl md:text-left">
                Худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун
                ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй Цахим худалдааны цогц
                платформ юм.
              </span>
            </div>
            <div className="flex justify-center mt-10 md:justify-normal">
              <button
                onClick={() => {
                  setTap(0);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(1);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(2);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
            </div>
          </div>
        </div>
      )}
      {tap == 1 && (
        <div className="block my-4 transition md:flex">
          <Image src={slide_2} width={500} height={500} alt="" />
          <div className="px-10">
            <div className="mt-10 text-center md:text-left">
              <span className="font-bold text-[20px]">
                ЦАХИМ ХУДАЛДААНЫ ЦОГЦ ПЛАТФОРМ
              </span>
            </div>
            <div className="mt-4">
              <span className="text-xs text-center md:text-xl md:text-left">
                Бид маш бага зардлаар таны бизнесийг цахим орчинд ажиллах
                боломжийг бүрдүүлнэ. Та богино хугацаанд, найдвартай, уян хатан
                цахим худалдаагаа эхлүүлээрэй.
              </span>
            </div>
            <div className="flex justify-center mt-10 md:justify-normal">
              <button
                onClick={() => {
                  setTap(0);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(1);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(2);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
            </div>
          </div>
        </div>
      )}
      {tap == 2 && (
        <div className="block my-4 transition md:flex">
          <Image src={slide_3} width={500} height={500} alt="" />
          <div className="px-10">
            <div className="mt-10 text-center md:text-left">
              <span className="font-bold text-[20px]">
                ПЛАТФОРМЫН ХҮЧИЙГ МЭДЭР
              </span>
            </div>
            <div className="mt-4">
              <span className="text-xs text-center md:text-xl md:text-left">
                Дэлхийн тэргүүлэгч технологиудыг хослуулан ашиглаж, технологийн
                тасралтгүй хөгжүүлэлтээр хэрэглэгч байгууллагыг хангана.
                Платформын гайхалтай шийдлүүдийг ашиглан борлуулалтаа өсгөөрэй.
              </span>
            </div>
            <div className="flex justify-center mt-10 md:justify-normal">
              <button
                onClick={() => {
                  setTap(0);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(1);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
              <button
                onClick={() => {
                  setTap(2);
                }}
                className="rounded-full mx-2 bg-purple-600 w-[15px] h-[15px]"
              >
                {""}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ThirdSection;
