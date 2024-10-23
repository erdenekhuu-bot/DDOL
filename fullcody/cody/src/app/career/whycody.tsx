"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";
import { Cards } from "../components/pages/Fifthsection";

export const Whycody = function () {
  const [getData, setData] = useState([]);

  const fetching = async function () {
    try {
      const respone = await axios.get(
        "http://127.0.0.1:1337/api/careers?populate=*",
        header_api
      );
      setData(respone.data.data[0].reason);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return (
    <div className="">
      <p className="text-2xl font-bold py-8 text-center">Яагаад Коди гэж?</p>
      <div className="flex justify-evenly flex-wrap">
        {getData.map((items: any) => (
          <Cards key={items.id} icon={items.url} title={items.reason} />
        ))}
      </div>
    </div>
  );
};
