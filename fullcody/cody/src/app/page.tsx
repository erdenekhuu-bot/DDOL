import Image from "next/image";
import { Stack } from "@mui/material";
import phone_background from "../app/images/phone_template.png";
import pad_background from "../app/images/pad_template.png";
import bacgrkound_img from "../app/images/background_image.jpg";
import { Firstsection } from "./components/pages/Firstsection";

export default function Home() {
  return (
    <Stack>
      <Firstsection background_img={bacgrkound_img}>
        <div className="mobilecustom:hidden">
          <Image
            src={phone_background}
            width={800}
            height={800}
            alt=""
            className="w-44"
          />
        </div>
        <div className="text-center p-4">
          <p className="font-bold text-2xl">Өөрийн цахим дэлгүүрээ бүтээ!</p>
          <p className="my-4">Та онлайнаар хаана ч, хэнд ч юу ч зарж болно</p>
          <p className="mt-8 mb-4 mobilecustom:hidden">www.allstars.mn</p>
        </div>
        <div className="hidden mobilecustom:flex mobilecustom:justify-center">
          <Image
            src={phone_background}
            width={1000}
            height={1000}
            alt=""
            className="w-52"
          />
        </div>
        <p className="hidden my-8 mobilecustom:flex mobilecustom:justify-center">
          www.allstars.mn
        </p>
        <div className="mobilecustom:hidden">
          <Image
            src={pad_background}
            width={800}
            height={800}
            alt=""
            className="w-96"
          />
        </div>
      </Firstsection>

      <section className="h-[80px] bg-blue-200">2</section>
      {/* <section id="cody" className="h-[800px] bg-blue-300">
        3
      </section> */}
      {/* <section id="solution" className="h-[800px] bg-blue-400">
        4
      </section> */}
      {/* <section id="features" className="h-[800px] bg-blue-500">
        5
      </section> */}
      {/* <section className="h-[800px] bg-blue-600">6</section> */}
      {/* <section className="h-[800px] bg-blue-700">7</section> */}
    </Stack>
  );
}
