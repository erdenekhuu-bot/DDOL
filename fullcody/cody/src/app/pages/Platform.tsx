"use client";
import { useState, useEffect } from "react";
import { platform } from "@/app/types/type";
import axios from "axios";
import { header_api } from "@/app/page";
import { Thirdsection } from "../components/pages/Thirdsection";

export const Platform = function () {
  const qs = require("qs");
  const [getPlatform, setPlatform] = useState<platform>([]);

  const fetchingPlatform = async function () {
    try {
      const query = qs.stringify({
        populate: {
          platform: {
            populate: "*",
          },
        },
      });
      const response = await axios.get(
        `http://127.0.0.1:1337/api/homes?${query}`,
        header_api
      );
      setPlatform(response.data.data[0].platform);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchingPlatform();
  }, []);

  return <Thirdsection data={getPlatform} />;
};
