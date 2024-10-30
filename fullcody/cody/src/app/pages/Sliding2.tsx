"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Secondsection } from "../components/pages/Secondsection";
import { sliding2 } from "../types/type";
import { header_api } from "../page";

export const Sliding2 = function () {
  const qs = require("qs");
  const [getSliding2, setSliding2] = useState<sliding2>([]);

  const fetchingSlide = async function () {
    try {
      const query = qs.stringify({
        populate: {
          sliding2: {
            populate: "*",
          },
        },
      });
      const response = await axios.get(
        `http://192.168.0.101:1337/api/homes?${query}`,
        header_api
      );
      setSliding2(response.data.data[0].sliding2);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchingSlide();
  }, []);

  return <Secondsection data={getSliding2} />;
};
