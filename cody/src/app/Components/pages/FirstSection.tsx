import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Image from "next/image";
import phone_background from "../../images/phone_template.png";
import pad_background from "../../images/pad_template.png";
import background_back from "../../images/background_image.jpg";
import { tablet_image, phone_image } from "../list/images";

const FirstSection = function () {
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
        <div
          className="z-10 p-2"
          style={{
            backgroundImage: `url(${phone_background.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Image
            src={phone_image[2].image}
            width={150}
            height={100}
            alt=""
            className="object-cover z-0 rounded-3xl"
          />
        </div>
      </div>
      <Stack spacing={2} className="md:w-1/3">
        <div className="text-center md:p-8">
          <p className="font-bold my-4 text-blue-950 text-[32px] md:text-3xl">
            Өөрийн цахим дэлгүүрээ бүтээ!
          </p>
          <p className="font-bold text-[#4c39db]">
            Та онлайнаар хаана ч, хэнд ч юу ч зарж болно
          </p>
        </div>
        <div className="z-10 mr-[5%] flex justify-center md:hidden">
          <div
            className="z-10 p-2"
            style={{
              backgroundImage: `url(${phone_background.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Image
              src={phone_image[2].image}
              width={150}
              height={100}
              alt=""
              className="object-cover z-0 rounded-3xl w-full h-full"
            />
          </div>
        </div>
        <div className="overflow-hidden hidden typing text-center md:block">
          <span className="">www.allstars.mn.</span>
        </div>
        <div className="hidden text-center md:block">
          <Button
            variant="contained"
            className="bg-blue-950 w-[70%] p-3 rounded-xl"
            style={{
              background:
                "linear-gradient(95.41deg, rgb(131, 38, 226) 34.67%, rgb(82, 6, 225) 148.46%)",
            }}
          >
            <span className="text-sm">Бидэнтэй холбогдох</span>
          </Button>
        </div>
      </Stack>
      <div className="hidden w-1/2 mx-auto md:ml-[5%] md:w-1/4 md:mx-auto md:flex">
        <div
          className="z-10 p-2 flex overflow-hidden"
          style={{
            backgroundImage: `url(${pad_background.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Image
            src={tablet_image[1].image}
            width={350}
            height={100}
            alt=""
            className="object-cover mr-3 z-0 rounded-xl"
          />
        </div>
      </div>
      <div className="overflow-hidden flex my-4 typing justify-center md:hidden">
        <span className="text-xl text-blue-500">www.allstars.mn.</span>
      </div>
      <div className="text-center md:hidden">
        <Button
          variant="contained"
          className="bg-blue-950 w-[40%] p-3 rounded-xl"
        >
          <span className="text-sm">Бидэнтэй холбогдох</span>
        </Button>
      </div>
    </section>
  );
};

export default FirstSection;
