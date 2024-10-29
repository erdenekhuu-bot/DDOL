"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Aritcle } from "./Article";
import { articles } from "../types/type";
import { header_api } from "../page";
import Link from "next/link";
import Image from "next/image";
import search from "../images/search.svg";
import { Flex, Input } from "antd";
import { useDraggable } from "react-use-draggable-scroll";

export const MakeCommentPopup = function ({ data }: { data: any }) {
  const [search, setSearch] = useState("");

  const searching = data.filter((letter: any) =>
    letter.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="fixed top-32 inset-0 z-30 bg-gray-50 w-[90%] h-[35%] rounded-lg mx-auto">
      <Flex vertical gap={12} className="p-4">
        <Input
          placeholder="Article хайх..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="">Хайлтын илэрц</p>
        <div className="flex space-x-5">
          {search.length > 0 ? (
            searching.map((items: any) => (
              <Link href={`/article/${items.documentId}`}>
                <div key={items.id} className="w-24">
                  <img
                    src={`http://127.0.0.1:1337/${items.image.url}`}
                    alt=""
                  />

                  <p className="text-center lowercase text-[12px]">
                    {items.title.substring(0, 30) + "..."}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="bg-gray-400 bg-opacity-50 w-full">
              Та хайх түлхүүр үгээ оруулна уу
            </p>
          )}
        </div>
      </Flex>
    </section>
  );
};

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
    <div className="z-10 w-[500px] bg-white rounded-lg flex">
      <img
        src={`http://127.0.0.1:1337/${image.image.url}`}
        alt=""
        width={800}
        className="w-52"
      />
      <div className="p-6">
        <p className="font-bold text-sm my-4">{title}</p>
        <p className="h-[80%] overflow-hidden text-sm">
          {blog.substring(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
};

const Article = function ({ data }: { data?: any }) {
  const [getArticle, setArticle] = useState<articles>([]);
  const [click, setClick] = useState(false);

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

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <Aritcle>
      {click && (
        <div className="select-none absolute inset-0 top-0 right-0 left-0 z-30 bg-black bg-opacity-50"></div>
      )}

      <div className="fixed top-52 z-30 right-10 bg-white p-2 w-10 rounded-[50%] hover:bg-opacity-50">
        <button
          className=""
          type="button"
          onClick={function () {
            setClick(!click);
          }}
        >
          <Image src={search} width={800} height={800} alt="" className="" />
        </button>
      </div>
      {customarr.length > 0 && (
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img
            src={`http://127.0.0.1:1337${customarr[0].image.url}`}
            alt=""
            width={1000}
            className="object-cover w-full h-[800px]"
          />
          <Link href={`/article/${customarr[0].documentId}`}>
            <p className="absolute px-8 text-3xl top-60 z-20 font-bold text-white">
              {customarr[0].title}
            </p>
          </Link>
          <p className="absolute px-8 w-[60%] text-xl text-opacity-80 top-80 z-20 text-white">
            {customarr[0].content.slice(0, 178) + "..."}
            <Link href={`/article/${customarr[0].documentId}`}>
              <p className="my-12 text-2xl z-20 text-white text-opacity-80 hover:text-opacity-100">
                Дэлгэрэнгүй
              </p>
            </Link>
          </p>
        </div>
      )}
      <div
        {...events}
        ref={ref}
        className="ml-32 absolute bottom-3 flex w-[80%] hide-scrollbar space-x-20 overflow-x-hidden scrollbar-hide select-none"
      >
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
      {click && <MakeCommentPopup data={getArticle} />}
    </Aritcle>
  );
};
export default Article;
