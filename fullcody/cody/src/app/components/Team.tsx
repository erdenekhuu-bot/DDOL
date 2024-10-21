"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { team } from "../types/type";
import Image from "next/image";
import { header_api } from "../page";
import zol from "../../app/images/zol.png";
import zolorg from "../../app/images/zolorg.png";
import gun from "../../app/images/gun.png";
import gunorg from "../../app/images/gunorg.png";
import tur from "../../app/images/tur.png";
import turorg from "../../app/images/turorg.png";
import er from "../../app/images/er.png";
import erorg from "../../app/images/erorg.png";
import us from "../../app/images/us.png";
import usorg from "../../app/images/usorg.png";

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
    <section className="z-20 py-20 w-full bg-white">
      <p className="font-bold text-3xl text-center py-6">Удирдлагын баг</p>
      <div className="flex justify-evenly p-4">
        {getTeam.map((item) => (
          <div className="rounded-lg" key={item.id}>
            <img
              src={`http://192.168.1.102:1337${item.profile.url}`}
              alt="wrong"
              width={800}
              height={800}
              className="w-56"
            />
            <p className="font-bold text-center text-sm my-4">{item.name}</p>
            <p className="text-center text-sm my-2">{item.major}</p>
            <p className="text-center">{item.division}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
