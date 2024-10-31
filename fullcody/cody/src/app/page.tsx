import Image from "next/image";
import { Firstsection } from "./components/pages/Firstsection";
import Layout from "antd/es/layout/layout";
import { token, test_token } from "./types/type";
import { array } from "./json/image";
import ellipse from "../app/images/ellipsee-opt.webp";
import ellipsedown from "../app/images/ellipsee-down.webp";
import { Sliding2 } from "./pages/Sliding2";
import { Platform } from "./pages/Platform";
import { Solution } from "./pages/Solution";
import { Feature } from "./pages/Feature";
import { Event } from "./pages/Event";
import { Comments } from "./pages/Comment";
import { Seventhsection } from "./components/pages/Seventhsection";

export const header_api = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default function Home() {
  return (
    <Layout>
      <Firstsection />
      <Sliding2 />
      <Platform />
      <Solution />
      <Image
        src={ellipse}
        alt=""
        width={1000}
        height={1000}
        className="w-full"
      />
      <Feature />
      <section>
        <Image
          src={ellipsedown}
          alt=""
          width={1000}
          height={1000}
          className="w-full transform rotate-180"
        />
      </section>
      <Event />
      {/* <Comments /> */}
      <Seventhsection />
    </Layout>
  );
}
