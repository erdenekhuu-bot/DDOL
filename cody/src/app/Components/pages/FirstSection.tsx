import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Image from "next/image";
import phone_background from "../../images/phone_template.png";
import pad_background from "../../images/pad_template.png";

const FirstSection = function () {
  return (
    <section className="z-0 block items-center justify-center h-[500px] mt-20 bg-gradient-to-tr from-purple-400 to-white md:flex">
      <div className="mr-[5%] hidden md:block">
        <Image src={phone_background} width={150} height={100} alt="" />
      </div>
      <Stack spacing={2}>
        <div className="text-center">
          <span className="font-bold text-blue-950 text-[28px]">
            Өөрийн цахим дэлгүүрээ бүтээ!
          </span>
          <br />
          <span className="font-bold text-[#4c39db]">
            Та онлайнаар хаана ч, хэнд ч юу ч зарж болно
          </span>
        </div>
        <div className="w-[70%] text-center">
          <span>www.allstars.mn</span>
        </div>
        <div className="w-[70%] text-center">
          <Button
            variant="contained"
            className="bg-blue-950 w-[70%] p-2 rounded-xl"
          >
            <span className="font-bold text-[10px]">Бидэнтэй холбогдох</span>
          </Button>
        </div>
      </Stack>
      <div className="md:ml-[5%]">
        <Image src={pad_background} width={350} height={100} alt="" />
      </div>
    </section>
  );
};

export default FirstSection;
