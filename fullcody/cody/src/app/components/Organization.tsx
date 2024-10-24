"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "../page";

export const Organization = function () {
  const [getOrganiation, setOrganization] = useState([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/abouts?populate[teamprofiles][populate]=*",
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
      <p className="font-bold text-center py-6 text-3xl">Хамт олон</p>
      <div className="flex justify-center my-4">
        {getOrganiation.map((photos: any) => (
          <img
            src={`http://127.0.0.1:1337${photos.profile.formats.large.url}`}
            alt=""
            width={1000}
            height={1000}
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
        "http://127.0.0.1:1337/api/careers?populate[teamprofiles][populate]=*",
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
    <section>
      <p className="font-bold text-center py-6 text-3xl">Хамт олон</p>
      <div className="flex flex-wrap items-center p-8 ">
        {getOrganiation.map((items: any) => (
          <img
            src={`http://127.0.0.1:1337${items.profile.url}`}
            alt=""
            width={800}
            height={800}
            className="w-44 h-44"
          />
        ))}
      </div>
    </section>
  );
};
