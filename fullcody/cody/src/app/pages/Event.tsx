"use client";
import { useState, useEffect } from "react";
import { event } from "@/app/types/type";
import axios from "axios";
import { header_api } from "../page";
import { Sixthsection } from "../components/pages/Sixthsection";

export const Event = function () {
  const qs = require("qs");
  const [getEvent, setEvent] = useState<event>([]);

  const fetching = async function () {
    try {
      const query = qs.stringify({
        populate: {
          event: {
            populate: "*",
          },
        },
      });
      const response = await axios.get(
        `http://192.168.1.19:1337/api/homes?${query}`,
        header_api
      );
      setEvent(response.data.data[0].event);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return <Sixthsection data={getEvent} />;
};
