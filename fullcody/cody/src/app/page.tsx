import Image from "next/image";
import { Stack } from "@mui/material";
import background_back from "../app/images/background_image.jpg";
import phone_background from "../app/images/phone_template.png";
import pad_background from "../app/images/pad_template.png";
import Button from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <section
        className="h-[700px] bg-no-repeat bg-cover flex justify-around items-center"
        style={{
          backgroundImage: `url(${background_back.src})`,
        }}
      >
        <div>
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
          <p className="mt-8 mb-4">www.allstars.mn</p>
        </div>
        <div>
          <Image
            src={pad_background}
            width={800}
            height={800}
            alt=""
            className="w-96"
          />
        </div>
      </section>
      <section className="h-[80px] bg-blue-200">2</section>
      <section className="h-[800px] bg-blue-300">3</section>
      <section className="h-[800px] bg-blue-400">4</section>
      <section className="h-[800px] bg-blue-500">5</section>
      <section className="h-[800px] bg-blue-600">6</section>
      <section className="h-[800px] bg-blue-700">7</section>
    </Stack>
  );
}
