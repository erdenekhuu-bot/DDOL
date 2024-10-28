"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "../page";
import { statistics } from "../types/type";
import { Statistics } from "../components/Statistics";

export const Statisticspage = function () {
  const qs = require("qs");
  const [getSatatistic, setStatistic] = useState<statistics>([]);

  const fetching = async function () {
    try {
      const query = qs.strigify({
        populate: {
          statistic: "*",
        },
      });
      const response = await axios.get(
        `http://127.0.0.1:1337/api/abouts?${query}`,
        header_api
      );
      setStatistic(response.data.data[0].statistic);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return <Statistics data={getSatatistic} />;
};
