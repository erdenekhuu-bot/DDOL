import { navlink } from "../types/type";
import { slide } from "../types/type";
import shoppy from "../../app/images/shoppy.png";
import homeshopping from "../../app/images/homeshopping.png";
import goyol from "../../app/images/goyol.png";

export const navList: navlink = [
  {
    id: 1,
    title: "Коди Платформ",
    url: "#cody",
  },
  {
    id: 2,
    title: "Шийдэл",
    url: "#solution",
  },
  {
    id: 3,
    title: "Боломжууд",
    url: "#features",
  },
  {
    id: 4,
    title: "Зөвөлгөө",
    url: "/article",
  },
  {
    id: 5,
    title: "Бидний тухай",
    url: "/about",
  },
  {
    id: 6,
    title: "Ажлын байр",
    url: "/career",
  },
];

export const mobilenavList: navlink = [
  {
    id: 1,
    title: "Коди Платформ",
    url: "/",
  },
  {
    id: 2,
    title: "Шийдэл",
    url: "/",
  },
  {
    id: 3,
    title: "Боломжууд",
    url: "/",
  },
  {
    id: 4,
    title: "Зөвөлгөө",
    url: "/article",
  },
  {
    id: 5,
    title: "Бидний тухай",
    url: "/about",
  },
  {
    id: 6,
    title: "Ажлын байр",
    url: "/career",
  },
  {
    id: 7,
    title: "Холбоо барих",
    url: "/",
  },
];

export const sliding: slide = [
  {
    id: 1,
    title: "goyol",
    image: goyol,
    url: "",
  },
  {
    id: 2,
    title: "homeshopping",
    image: homeshopping,
    url: "",
  },
  {
    id: 3,
    title: "shoppy",
    image: shoppy,
    url: "",
  },
];
