import Image from "next/image";
import { Stack } from "@mui/material";
import background_back from "../app/images/background_image.jpg";

export default function Home() {
  return (
    <Stack>
      <section
        className="h-[700px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${background_back.src})`,
        }}
      >
        1
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
