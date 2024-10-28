"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";
import { event } from "../types/type";
import { Openjobs } from "../career/openjob";

export const Openjobspage = function () {
  const qs = require("qs");
  const [getData, setData] = useState<event>([]);

  const fetching = async function () {
    try {
      const query = qs.stringify({
        populate: {
          caropen: {
            populate: "*",
          },
        },
      });
      const response = await axios.get(
        `http://127.0.0.1:1337/api/careers?${query}`,
        header_api
      );
      setData(response.data.data[0].caropen);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return <Openjobs data={getData} />;
};
