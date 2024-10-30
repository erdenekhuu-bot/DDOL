"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { feature } from "../types/type";
import { header_api } from "../page";
import { Fifthsection } from "../components/pages/Fifthsection";

export const Feature = function () {
  const qs = require("qs");
  const [getFeature, setFeature] = useState<feature>([]);

  const fetchingFeature = async function () {
    try {
      const query = qs.stringify({
        populate: {
          feature: {
            populate: "*",
          },
        },
      });
      const response = await axios.get(
        `http://192.168.0.101:1337/api/homes?${query}`,
        header_api
      );
      setFeature(response.data.data[0].feature);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetchingFeature();
  }, []);

  return <Fifthsection data={getFeature} />;
};
