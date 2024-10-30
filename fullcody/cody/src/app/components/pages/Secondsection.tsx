import { Image } from "antd";
import { Flex, Spin } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Secondsection = function ({ data }: { data: any }) {
  return (
    <Flex
      gap="large"
      className="flex bg-white opacity-50 items-center overflow-hidden p-4 select-none"
    >
      {data.length > 0 ? (
        <Swiper
          scrollbar={{ draggable: true }}
          loop={true}
          spaceBetween={5}
          slidesPerView={3}
        >
          {data.map((items: any) => (
            <SwiperSlide key={items.id}>
              <Image
                src={`http://192.168.1.19:1337/${items.icon?.url}`}
                alt=""
                width={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Spin size="large" />
      )}
    </Flex>
  );
};
