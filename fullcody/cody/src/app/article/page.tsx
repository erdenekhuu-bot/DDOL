"use client";
import ga4 from "../images/ga4.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Aritcle } from "./Article";
import { articles } from "../types/type";
import { header_api } from "../page";

const Article = function () {
  const [getArticle, setArticle] = useState<articles>([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1337/api/articles?populate=*",
        header_api
      );
      setArticle(response.data.data);
    } catch (error) {
      return;
    }
  };

  useEffect(function () {
    fetching();
  }, []);

  return (
    <Aritcle attr={ga4}>
      <div></div>
    </Aritcle>
  );
};
export default Article;
