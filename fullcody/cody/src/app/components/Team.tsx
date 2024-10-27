"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { team } from "../types/type";
import { header_api } from "../page";
import Image from "next/image";
import manag from "../images/managament.svg";
import { Flex, Spin } from "antd";

export const Team = function () {
  const [getTeam, setTeam] = useState<team>([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/abouts?populate[team][populate]=*",
        header_api
      );
      setTeam(response.data.data[0].team);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return (
    <Flex align="center" justify="center" gap="middle">
      {getTeam.length > 0 ? (
        <section className="z-20 py-20 w-full bg-white">
          <div className="relative w-[500px] mx-auto mobilecustom:hidden">
            <Image
              src={manag}
              width={800}
              height={800}
              alt=""
              className="w-36 absolute top-4 right-1/4"
            />
            <p className="text-3xl py-8 font-bold text-center">
              Удирдлагын баг
            </p>
          </div>
          <div className="hidden relative mobilecustom:block">
            <Image
              src={manag}
              width={800}
              height={800}
              alt=""
              className="w-36 absolute top-1 right-0 mobilecustom:mx-24"
            />
            <p className="text-3xl py-8 font-bold text-center uppercase">
              Удирдлагын баг
            </p>
          </div>
          <div className="flex justify-evenly p-4 mobilecustom:flex-wrap mobilecustom:mx-8">
            {getTeam.map((item) => (
              <div className="rounded-lg" key={item.id}>
                <img
                  src={`http://127.0.0.1:1337${item.profile?.url}`}
                  alt=""
                  width={800}
                  height={800}
                  className="w-56"
                />
                <p className="font-bold text-center text-sm my-4">
                  {item.name}
                </p>
                <p className="text-center text-sm my-2">{item.major}</p>
                <p className="text-center">{item.division}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Spin size="large" />
      )}
    </Flex>
  );
};
