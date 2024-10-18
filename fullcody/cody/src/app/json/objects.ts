import { navlink, solution } from "../types/type";
import { slide } from "../types/type";
import { platform } from "../types/type";
import { feature } from "../types/type";
import shoppy from "../../app/images/shoppy.png";
import homeshopping from "../../app/images/homeshopping.png";
import goyol from "../../app/images/goyol.png";
import coinhub from "../../app/images/coinhub.png";
import erdenet from "../../app/images/erdenet.png";
import gobi from "../../app/images/gobi.png";
import pizza from "../../app/images/pizza.png";
import ris from "../../app/images/ris.png";
import simple from "../../app/images/simple.png";
import tavan from "../../app/images/tavan.png";
import platform1 from "../../app/images/platform1.jpg";
import platform2 from "../../app/images/platform2.jpg";
import platform3 from "../../app/images/platform3.jpg";
import { AndroidFilled, AndroidOutlined } from "@ant-design/icons";

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
  {
    id: 4,
    title: "coinhub",
    image: coinhub,
    url: "",
  },
  {
    id: 5,
    title: "erdenet",
    image: erdenet,
    url: "",
  },
  {
    id: 6,
    title: "gobi",
    image: gobi,
    url: "",
  },
  {
    id: 7,
    title: "pizza",
    image: pizza,
    url: "",
  },
  {
    id: 8,
    title: "ris",
    image: ris,
    url: "",
  },
  {
    id: 9,
    title: "simple",
    image: simple,
    url: "",
  },
  {
    id: 10,
    title: "tavan",
    image: tavan,
    url: "",
  },
];

export const platforms: platform = [
  {
    id: 1,
    title: "КОДИ ПЛАТФОРМ",
    content:
      "Худалдаа, үйлчилгээний бизнест зориулсан, дата, хиймэл оюун ухаанд суурилсан, тасралтгүй хөгжүүлэлттэй Цахим худалдааны цогц платформ юм.",
    image: platform1,
  },
  {
    id: 2,
    title: "ЦАХИМ ХУДАЛДААНЫ ЦОГЦ ПЛАТФОРМ",
    content:
      "Бид маш бага зардлаар таны бизнесийг цахим орчинд ажиллах боломжийг бүрдүүлнэ. Та богино хугацаанд, найдвартай, уян хатан цахим худалдаагаа эхлүүлээрэй",
    image: platform2,
  },
  {
    id: 3,
    title: "ПЛАТФОРМЫН ХҮЧИЙГ МЭДЭР",
    content:
      "Дэлхийн тэргүүлэгч технологиудыг хослуулан ашиглаж, технологийн тасралтгүй хөгжүүлэлтээр хэрэглэгч байгууллагыг хангана. Платформын гайхалтай шийдлүүдийг ашиглан борлуулалтаа өсгөөрэй.",
    image: platform3,
  },
];

export const solutions: solution = [
  {
    id: 1,
    title: "Headless Ecommerce",
    content:
      "Headless цахим худалдааны шийдлээр бизнесийн онцлогтоо тохирох цахим худалдааг бүтээж ирээдүйтэй бэлтгэ",
  },
  {
    id: 2,
    title: "Multi Store",
    content:
      "Ашиглахад хялбар, салбар бизнесүүдийнхээ сүлжээг бий болгож удирдах",
  },
  {
    id: 3,
    title: "Marketplace",
    content:
      "Олон борлуулагчдын бүтээгдэхүүн, үйлчилгээг нэгтгэж цахим худалдааны платформыг бий болгоорой",
  },
  {
    id: 4,
    title: "Media Platform",
    content:
      "Медиа платформын тусламжтайгаар контент дээр суурилсан цахим худалдаагаа эхлүүлээрэй",
  },
  {
    id: 5,
    title: "In App",
    content:
      "In app шийдлийн тусламжтайгаар томоохон Цахим хэтэвтч, Супер аппликейшнд худалдаагаа өргөжүүлэх",
  },
  {
    id: 6,
    title: "Digital Wallet",
    content:
      "Цахим хэтэвч дээр суурилсан төлбөр тооцооны нэмэлт шийдэлүүдийг болгох",
  },
  {
    id: 7,
    title: "Mobile applications",
    content:
      "Андройд болон IOS whitelabel аппликейшнтэй нэмэлт програмчлалын шаардлаггүй болох",
  },
  {
    id: 8,
    title: "Page Builder",
    content: "Програмчлал хийж, код бичихгүйгээр контентоо хялбархан бүтээх",
  },
];

export const features: feature = [
  {
    id: 1,
    icon: AndroidFilled,
    title: "Контент менежмент систем",
    feature: "CMS",
  },
  {
    id: 2,
    icon: AndroidFilled,
    title: "Хямдрал & Купон",
    feature: "Discount & Promotion",
  },
  {
    id: 3,
    icon: AndroidFilled,
    title: "Бэлгийн карт",
    feature: "Gift card",
  },
  {
    id: 4,
    icon: AndroidOutlined,
    title: "Маркетинг хэрэгслүүд ",
    feature: "Marketing manager",
  },
  {
    id: 5,
    icon: AndroidFilled,
    title: "Захиалгын удирдлага",
    feature: "Order manager",
  },
  {
    id: 6,
    icon: AndroidFilled,
    title: "Бүтээгдэхүүний удирдлага",
    feature: "Product manager",
  },
  {
    id: 7,
    icon: AndroidFilled,
    title: "Хэрэглэгчийн удирдлага",
    feature: "User management",
  },
  {
    id: 8,
    icon: AndroidFilled,
    title: "Худалдааны удирдлага",
    feature: "Sales manager",
  },
  {
    id: 9,
    icon: AndroidFilled,
    title: "Агуулах, Ложистикийн шийдэл",
    feature: "Fulfillment manager",
  },
  {
    id: 10,
    icon: AndroidFilled,
    title: "Дижитал хэтэвч",
    feature: "Digital Wallet",
  },
];

export const reason: { id: number; icon: any; title: string }[] = [
  {
    id: 1,
    icon: AndroidFilled,
    title: "Чадварлаг залуу хамт олон",
  },
  {
    id: 2,
    icon: AndroidFilled,
    title: "Хөгжиж суралцах боломж",
  },
  {
    id: 3,
    icon: AndroidFilled,
    title: "Технологийн ухаалаг шийдэл",
  },
  {
    id: 4,
    icon: AndroidFilled,
    title: "Байгууллагын соёл",
  },
];

export const services: { id: number; service: string }[] = [
  {
    id: 1,
    service: "Агуулахын цогц шийдэл",
  },
  {
    id: 2,
    service: "Цахим худалдааны платформ",
  },
  {
    id: 3,
    service: "Медиа платформ",
  },
  {
    id: 4,
    service: "SEO шийдэл",
  },
  {
    id: 5,
    service: "Крипто интеграци",
  },
  {
    id: 6,
    service: "Дэлхийн системүүдийн холболт",
  },
  {
    id: 7,
    service: "In App шийдэл",
  },
  {
    id: 8,
    service: "Дэлгүүрийн ухаалаг систем",
  },
  {
    id: 9,
    service: "Цахим хэтэвч",
  },
  {
    id: 10,
    service: "Хиймэл оюун ухаан хөгжүүлэлт",
  },
];
