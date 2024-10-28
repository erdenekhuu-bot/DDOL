"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";
import { Whycody } from "../career/whycody";

export const Whycodypage = function () {
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
  return <Whycody data={getData} />;
};
