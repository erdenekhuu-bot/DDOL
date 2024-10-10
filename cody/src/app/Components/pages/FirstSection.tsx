import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Image from "next/image";
import phone_background from "../../images/phone_template.png";
import pad_background from "../../images/pad_template.png";
import background_back from "../../images/background_image.jpg";
import { tablet_image, phone_image } from "../list/images";

const FirstSection = function () {
  const arr: JSX.Element[] = [];

  return (
    <section
      className="z-0 block py-10 mt-20 md:flex md:py-12 md:items-center md:justify-center"
      style={{
        backgroundImage: `url(${background_back.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="z-10 mr-[5%] hidden md:block md:mx-auto">
        {/* <Image
          src={phone_background}
          width={150}
          height={100}
          alt=""
          className=" z-10"
        /> */}
        <div
          className="z-10 p-2"
          style={{
            backgroundImage: `url(${phone_background.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Image
            src={phone_image[4].image}
            width={150}
            height={100}
            alt=""
            className="object-cover z-0 rounded-3xl"
          />
        </div>
      </div>
      <Stack spacing={2} className="md:w-1/3">
        <div className="text-center p-10">
          <span className="font-bold text-blue-950 text-[28px]">
            Өөрийн цахим дэлгүүрээ бүтээ!
          </span>
          <br />
          <span className="font-bold text-[#4c39db]">
            Та онлайнаар хаана ч, хэнд ч юу ч зарж болно
          </span>
        </div>
        <div className="hidden text-center md:block">
          <span>www.allstars.mn</span>
        </div>
        <div className="hidden text-center md:block">
          <Button
            variant="contained"
            className="bg-blue-950 w-[70%] p-2 rounded-xl"
          >
            <span className="font-bold text-[10px]">Бидэнтэй холбогдох</span>
          </Button>
        </div>
      </Stack>
      <div className="w-1/2 mx-auto flex md:ml-[5%] md:w-1/4 md:mx-auto">
        {/* <Image
          src={pad_background}
          width={350}
          height={100}
          alt=""
          className="absolute z-10"
        /> */}
        <div
          className="z-10 p-2 flex overflow-hidden"
          style={{
            backgroundImage: `url(${pad_background.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {tablet_image.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              width={350}
              height={100}
              alt=""
              className="object-cover mr-3 z-0 rounded-xl transition-transform duration-300 translate-x-[-930px]"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center md:hidden">
        <span>www.allstars.mn</span>
      </div>
      <div className="text-center md:hidden">
        <Button
          variant="contained"
          className="bg-blue-950 w-[30%] p-2 rounded-xl"
        >
          <span className="font-bold text-[10px]">Бидэнтэй холбогдох</span>
        </Button>
      </div>
    </section>
  );
};

export default FirstSection;
