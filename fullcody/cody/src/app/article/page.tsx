"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Aritcle } from "./Article";
import { articles } from "../types/type";
import { header_api } from "../page";

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

  const customarr: any = [];

  for (let i = 0; i < getArticle.length; i++)
    if (i < 1) customarr.push(getArticle[i]);

  return (
    <Aritcle>
      {customarr.length > 0 && (
        <div className="">
          <img
            src={`http://127.0.0.1:1337${customarr[0].image.url}`}
            alt=""
            width={1000}
            className="object-cover w-full h-[800px]"
          />
        </div>
      )}
      <div className="absolute bottom-0 flex">
        {getArticle.map((items: any) => (
          <CustomCard
            key={items.id}
            image={items}
            title={items.title}
            blog={items.content}
          />
        ))}
      </div>
    </Aritcle>
  );
};
export default Article;
