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

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  try {
    await axios.post(
      "http://127.0.0.1:1337/api/comments",
      {
        data: {
          name: "guest",
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

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Article() {
  const params = useParams();
  const [getArticle, setArticle] = useState<articles>([]);
  const [value, setValue] = useState("");

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
      <p className="text-center my-2 font-bold text-2xl">Сэтгэгдлүүд</p>

      <Form
        className="mx-auto w-1/2"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
