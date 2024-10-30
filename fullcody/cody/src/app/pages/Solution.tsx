"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { solution } from "@/app/types/type";
import { header_api } from "@/app/page";
import { Fourthsection } from "../components/pages/Fourthsection";

export const Solution = function () {
  const qs = require("qs");
  const [getSolution, setSolution] = useState<solution>([]);
  const fetchingSolution = async function () {
    try {
      const query = qs.stringify({
        populate: {
          solution: {
            populate: "*",
          },
        },
      });
      const response = await axios.get(
        `http://192.168.0.101:1337/api/homes?${query}`,
        header_api
      );
      setSolution(response.data.data[0].solution);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetchingSolution();
  }, []);

  return <Fourthsection data={getSolution} />;
};
