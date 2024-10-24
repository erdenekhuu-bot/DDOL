"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { team } from "../types/type";
import { header_api } from "../page";

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
      <p className="font-bold text-3xl text-center py-6 mobilecustom:hidden">
        Удирдлагын баг
      </p>
      <p className="hidden font-bold text-3xl text-center py-6 mobilecustom:block">
        УДИРДЛАГЫН БАГ
      </p>
      <div className="flex justify-evenly p-4 mobilecustom:flex-wrap">
        {getTeam.map((item) => (
          <div className="rounded-lg" key={item.id}>
            <img
              src={`http://127.0.0.1:1337${item.profile?.url}`}
              alt=""
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
