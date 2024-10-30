"use client";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Image } from "antd";
import { Flex, Spin } from "antd";

export const Secondsection = function ({ data }: { data: any }) {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <Flex
      gap="large"
      {...events}
      ref={ref}
      className="flex bg-white opacity-50 space-x-20 items-center overflow-x-hidden scrollbar-hide p-4 drop-shadow-2xl select-none"
    >
      {data.length > 0 ? (
        data.map((items: any) => (
          <Image
            key={items.id}
            src={`http://192.168.0.101:1337/${items.icon?.url}`}
            alt=""
            width={100}
            className="mx-4"
          />
        ))
      ) : (
        <Spin size="large" />
      )}
    </Flex>
  );
};
