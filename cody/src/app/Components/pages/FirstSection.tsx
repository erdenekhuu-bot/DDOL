import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Image from "next/image";
import phone_background from "../../images/phone_template.png";
import pad_background from "../../images/pad_template.png";
import background_back from "../../images/background_image.jpg";

const FirstSection = function () {
  return (
    <section
      className="z-0 block py-10 mt-20 md:flex md:py-12 md:items-center md:justify-center"
      style={{ backgroundImage: `url(${background_back.src})` }}
    >
      <div className="mr-[5%] hidden md:block">
        <Image src={phone_background} width={150} height={100} alt="" />
      </div>
      <Stack spacing={2}>
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
      <div className="mx-auto w-1/2 md:ml-[5%]">
        <Image src={pad_background} width={350} height={100} alt="" />
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
