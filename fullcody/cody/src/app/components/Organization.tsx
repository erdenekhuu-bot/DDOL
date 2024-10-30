"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "../page";
import Image from "next/image";
import join from "../images/join.svg";
import { Flex, Spin } from "antd";

export const Organization = function () {
  const [getOrganiation, setOrganization] = useState([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://192.168.1.19:1337/api/abouts?populate[teamprofiles][populate]=*",
        header_api
      );
      setOrganization(response.data.data[0].teamprofiles);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return (
    <section className="">
      <div className="relative w-[500px] mx-auto mobilecustom:hidden">
        <Image
          src={join}
          width={800}
          height={800}
          alt=""
          className="w-36 absolute top-4 right-1/4"
        />
        <p className="text-3xl py-6 font-bold text-center">Хамт олон</p>
      </div>
      <div className="hidden relative mobilecustom:block">
        <Image
          src={join}
          width={800}
          height={800}
          alt=""
          className="w-36 absolute top-1 right-0 mobilecustom:mx-24"
        />
        <p className="text-3xl py-6 font-bold text-center uppercase">
          Хамт олон
        </p>
      </div>
      <div className="flex justify-center my-4">
        {getOrganiation.map((photos: any) => (
          <Image
            src={`http://192.168.1.19:1337${photos.profile.formats.large.url}`}
            alt=""
            width={1000}
            height={400}
            className=""
          />
        ))}
      </div>
    </section>
  );
};

export const Organ = function () {
  const [getOrganiation, setOrganization] = useState([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://192.168.1.19:1337/api/careers?populate[teamprofiles][populate]=*",
        header_api
      );
      setOrganization(response.data.data[0].teamprofiles);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return (
    <Flex align="center" justify="center" gap="middle">
      {getOrganiation.length > 0 ? (
        <section>
          <p className="font-bold text-center py-6 text-3xl">Хамт олон</p>
          <div className="flex flex-wrap items-center p-8 ">
            {getOrganiation.map((items: any) => (
              <Image
                src={`http://192.168.1.19:1337${items.profile.url}`}
                alt=""
                width={200}
                height={200}
              />
            ))}
          </div>
        </section>
      ) : (
        <Spin size="large" />
      )}
    </Flex>
  );
};
