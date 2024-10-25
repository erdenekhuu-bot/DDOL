export type navlink = {
  id: number;
  title: string;
  url: string;
  scroll?: string;
}[];

export const token: string =
  "00aa7bef9f9579d79356ddb2e03bd8cffaa435a3a1d53b0de7ad89f09f43c83d8896868cd3dec0f10be234aaa3499ec86a377b211a1b7f923143e1cc951356e5b897a161d43d298338cfb68cb1b33366e87de62e16c910bace7a04bcc138fcf838c1fedafe28467d1bd9a8dac4f979c2426fd1b23b1a8c7a570b97b5d1388781";

export type home = {
  id: number;
  title: string;
  phone: any;
  tablet: any;
}[];

export type sliding1 = {
  id: number;
  title: string;
  image: any;
  icon: string;
}[];

export type sliding2 = {
  id: number;
  name: string;
  icon: any;
  url: string;
}[];

export type platform = {
  id: number;
  title: string;
  content: string;
  image: any;
}[];

export type solution = {
  id: number;
  title: string;
  content: string;
}[];

export type feature = {
  id: number;
  icon: any;
  title: string;
  feature: string;
}[];

export type team = {
  id: number;
  name: string;
  profile: any;
  major: string;
  division?: string;
}[];

export type servicesing = {
  id: number;
  name: string;
}[];

export type articles = {
  id: number;
  documentId?: string;
  title: string;
  image: any;
  content: string;
}[];

export type event = {
  id: number;
  title: string;
  icon: any;
  image: any;
  mobile?: any;
}[];

export type comment = {
  id: number;
  name: string;
  image: any;
}[];
