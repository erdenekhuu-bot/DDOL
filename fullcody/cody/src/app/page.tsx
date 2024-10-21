import Image from "next/image";
import phone_background from "../app/images/phone_template.png";
import pad_background from "../app/images/pad_template.png";
import bacgrkound_img from "../app/images/background_image.jpg";
import { Firstsection } from "./components/pages/Firstsection";
import { Thirdsection } from "./components/pages/Thirdsection";
import { Fourthsection } from "./components/pages/Fourthsection";
import { Secondsection } from "./components/pages/Secondsection";
import { Fifthsection } from "./components/pages/Fifthsection";
import Layout from "antd/es/layout/layout";
import { token } from "./types/type";

export const header_api = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function Home() {
  return (
    <Layout>
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
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
    </Layout>
  );
}
