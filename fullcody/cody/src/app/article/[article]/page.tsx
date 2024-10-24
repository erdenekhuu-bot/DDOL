"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { articles } from "../../types/type";
import { header_api } from "../../page";

export default function Article() {
  const params = useParams();
  const [getArticle, setArticle] = useState<articles>([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        `http://127.0.0.1:1337/api/articles/${params.article}?populate=*`,
        header_api
      );
      setArticle(response.data.data);
    } catch (error) {
      return;
    }
  };

  useEffect(
    function () {
      fetching();
    },
    [params.article]
  );

  return (
    <section className="w-full pt-44">
      <div className="p-8 mx-auto w-1/2">
        <img
          src={`http://127.0.0.1:1337${getArticle.image?.formats.small.url}`}
          alt=""
          width={1000}
          height={1000}
          className="w-96"
        />
      </div>
      <div className="p-8 mx-auto w-1/2">{getArticle.content}</div>
    </section>
  );
}
