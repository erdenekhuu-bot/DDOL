"use client";
import Image from "next/image";
import slide_1 from "../../images/slide1.webp";
import slide_2 from "../../images/slide2.webp";
import slide_3 from "../../images/slide3.webp";
import { useState } from "react";
import { Button } from "@mui/material";

const ThirdSection = function () {
  const [tap, setTap] = useState(0);
  return (
    <section className="h-[650px] overflow-hidden md:h-[480px]">
      {tap == 0 ? (
        <div className="block my-4 px-10 transition md:flex">
          <Image src={slide_1} width={500} height={500} alt="" />
          <div className="px-10">
            <div className="mt-10 text-center md:text-left">
              <span className="font-bold text-[20px]">КОДИ ПЛАТФОРМ</span>
            </div>
            <div className="mt-4">
              <span className="text-xs text-center md:text-[16px] md:text-left">
                Худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун
                ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй Цахим худалдааны цогц
                платформ юм.
              </span>
            </div>
            <div className="flex">
              <Button
                onClick={() => {
                  setTap(0);
                }}
                variant="contained"
                className="rounded-full mx-2 bg-purple-600"
              >
                {""}
              </Button>
              <Button
                onClick={() => {
                  setTap(1);
                }}
                variant="contained"
                className="rounded-full mx-2 bg-purple-600"
              >
                {""}
              </Button>
              <Button
                onClick={() => {
                  setTap(2);
                }}
                variant="contained"
                className="rounded-full mx-2 bg-purple-600"
              >
                {""}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
      {tap == 1 ? (
        <div className="block my-4 px-10 transition md:flex">
          <Image src={slide_2} width={530} height={530} alt="" />
          <div className="px-10">
            <div className="mt-10 text-center md:text-left">
              <span className="font-bold text-[20px]">
                ЦАХИМ ХУДАЛДААНЫ ЦОГЦ ПЛАТФОРМ
              </span>
            </div>
            <div className="mt-4">
              <span>
                Бид маш бага зардлаар таны бизнесийг цахим орчинд ажиллах
                боломжийг бүрдүүлнэ. Та богино хугацаанд, найдвартай, уян хатан
                цахим худалдаагаа эхлүүлээрэй.
              </span>
            </div>
            <div className="flex">
              <Button
                onClick={() => {
                  setTap(0);
                }}
                variant="contained"
                className="rounded-full mx-2 bg-purple-600"
              >
                {""}
              </Button>
              <Button
                onClick={() => {
                  setTap(1);
                }}
                variant="contained"
                className="rounded-full mx-2 bg-purple-600"
              >
                {""}
              </Button>
              <Button
                onClick={() => {
                  setTap(2);
                }}
                variant="contained"
                className="rounded-full mx-2 bg-purple-600"
              >
                {""}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="block my-4 px-10 transition md:flex">
        <Image src={slide_3} width={530} height={530} alt="" />
        <div className="px-10">
          <div className="mt-10 text-center md:text-left">
            <span className="font-bold text-[20px]">
              ПЛАТФОРМЫН ХҮЧИЙГ МЭДЭР
            </span>
          </div>
          <div className="mt-4">
            <span>
              Дэлхийн тэргүүлэгч технологиудыг хослуулан ашиглаж, технологийн
              тасралтгүй хөгжүүлэлтээр хэрэглэгч байгууллагыг хангана.
              Платформын гайхалтай шийдлүүдийг ашиглан борлуулалтаа өсгөөрэй.
            </span>
          </div>
          <div className="flex">
            <Button
              onClick={() => {
                setTap(0);
              }}
              variant="contained"
              className="rounded-full mx-2 bg-purple-600"
            >
              {""}
            </Button>
            <Button
              onClick={() => {
                setTap(1);
              }}
              variant="contained"
              className="rounded-full mx-2 bg-purple-600"
            >
              {""}
            </Button>
            <Button
              onClick={() => {
                setTap(2);
              }}
              variant="contained"
              className="rounded-full mx-2 bg-purple-600"
            >
              {""}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
