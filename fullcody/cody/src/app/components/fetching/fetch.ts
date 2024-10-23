import axios from "axios";
import { useEffect } from "react";
import { token } from "@/app/types/type";

export const header = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const fetchingPlatform = async function () {
  try {
    const response = await axios.get(
      "http://127.0.0.1:1337/api/homes?populate[platform][populate]=image",
      header
    );
    return response.data.data;
  } catch (error) {
    return;
  }
};