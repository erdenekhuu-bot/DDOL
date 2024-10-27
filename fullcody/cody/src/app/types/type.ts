export type navlink = {
  id: number;
  title: string;
  url: string;
  scroll?: string;
}[];

export const token: string =
  "c47d901557b5d047fed1fb86c832a87b889c9b7c3c4a3212846841df67b7e24bc8c82dcef6b059cad7cd8615ac92be60a2b5c8939ea1ed4b9a49ef25c48ea8f069378bfb956092ca433c2553ea01c05fb9369196c6feb29bb5f225103a3344acb810b663059c913c333d9c5b0dda042962ddcef5bdc5ea9fd38bc04c4410297e";

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

export type statistics = {
  id: number;
  web: number;
  user: number;
  partner: number;
  feature: number;
  product: number;
  brand: number;
}[];
