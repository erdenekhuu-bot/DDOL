"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { header_api } from "@/app/page";
import { comment } from "@/app/types/type";
import { Seventhsection } from "../components/pages/Seventhsection";

export const Comments = function () {
  const qs = require("qs");
  const [getComment, setComment] = useState<comment>([]);

  const fetching = async function () {
    try {
      const query = qs.strigify({
        populate: {
          comment: {
            populate: "*",
          },
        },
      });
      const response = await axios.get(
        `http://192.168.1.19:1337/api/homes?populate[comment][populate]=*`,
        header_api
      );
      setComment(response.data.data[0].comment);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return <Seventhsection data={getComment} />;
};
