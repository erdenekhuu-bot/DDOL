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
  console.log(getOrganiation);
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
