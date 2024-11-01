"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { articles } from "../../types/type";
import { header_api } from "../../page";
import { Input } from "antd";
import { Form, FormProps, Button } from "antd";

const { TextArea } = Input;

type FieldType = {
  comment?: string;
};

export default function Article() {
  const params = useParams();
  const [getArticle, setArticle] = useState<articles>([]);
  const [getComment, setComment] = useState<
    {
      id: number;
      name: string;
      comment: string;
    }[]
  >([]);
  const [value, setValue] = useState("");

  const fetching = async function () {
    try {
      const response = await axios.get(
        `http://192.168.1.19:1337/api/articles/${params.article}?populate=*`,
        header_api
      );
      setArticle(response.data.data);
      setComment(response.data.data.comments);
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

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await axios.post(
        `http://192.168.1.19:1337/api/articles/${params.article}/comments`,
        {
          data: {
            name: "Зочин",
            comment: values.comment,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Success posted");
    } catch (error) {
      return;
    }
  };

  return (
    <section className="w-full pt-44">
      <div className="p-8 mx-auto w-[60%] mobilecustom:mx-0 mobilecustom:w-full">
        <img
          src={`http://192.168.1.19:1337${getArticle.image?.formats.small.url}`}
          alt=""
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </div>
      <div className="p-8 mx-auto w-[60%] mobilecustom:mx-0 mobilecustom:w-full">
        {getArticle.content}
      </div>
      <p className="text-center my-2 font-bold text-2xl">Сэтгэгдлүүд</p>

      {getComment.length > 0 &&
        getComment.map((items) => (
          <div className="py-8 border-t border-gray-800 border-opacity-30 mx-auto w-1/2">
            <p className="text-sm uppercase text-gray-400">Контент бүтээгч</p>
            <p className="my-2 font-bold">{items.name}</p>
            <p className="text-sm text-gray-400">{items.comment}</p>
          </div>
        ))}
      <Form
        className="mx-auto w-1/2 p-8 mobilecustom:w-full"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="comment"
          rules={[{ required: true, message: "Сэтгэгдэлээ үлдээнэ үү" }]}
        >
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="сэтгэгдэл..."
            className="w-full"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Нийтлэх
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
