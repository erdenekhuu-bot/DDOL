"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Aritcle } from "./Article";
import { articles } from "../types/type";
import { header_api } from "../page";
import Link from "next/link";

export const CustomCard = function ({
  title,
  image,
  blog,
}: {
  title: string;
  image: any;
  blog: string;
}) {
  return (
    <div className="z-10 w-[500px] bg-white rounded-lg flex mx-8">
      <img
        src={`http://127.0.0.1:1337/${image.image.url}`}
        alt=""
        width={800}
        height={800}
        className="w-52"
      />
      <div className="p-6">
        <p className="font-bold my-4">{title}</p>
        <p className="h-[ 80%] overflow-hidden text-sm">
          {blog.substring(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
};

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

  const customarr: articles = [];

  for (let i = 0; i < getArticle.length; i++)
    if (i < 1) customarr.push(getArticle[i]);

  return (
    <Aritcle>
      {customarr.length > 0 && (
        <div className="relative">
          s<div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img
            src={`http://127.0.0.1:1337${customarr[0].image.url}`}
            alt=""
            width={1000}
            className="object-cover w-full h-[800px]"
          />
          <p className="absolute px-8 text-3xl top-60 z-20 font-bold text-white">
            {customarr[0].title}
          </p>
          <p className="absolute px-8 w-[60%] text-xl text-opacity-50 top-80 z-20 text-white">
            {customarr[0].content.slice(0, 178) + "..."}
          </p>
        </div>
      )}
      <div className="absolute bottom-0 flex">
        {getArticle.map((items: any) => (
          <Link href={`/article/${items.documentId}`}>
            <CustomCard
              key={items.id}
              image={items}
              title={items.title}
              blog={items.content}
            />
          </Link>
        ))}
      </div>
    </Aritcle>
  );
};
export default Article;
