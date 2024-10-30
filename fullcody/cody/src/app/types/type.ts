export type navlink = {
  id: number;
  title: string;
  url: string;
  scroll?: string;
}[];

export const token: string =
  "9e06192fd24819353daf15add3bacc1837c05e836e40b4b41cc1a50974b5122dc0496eb3f714dd62e71cc7e11cf2eb48875b26306c022d9673926ab3c9c2850c6dd3a7294d3269a7b87088dbf8b6fd3661b89d087a9d465b92a8dd01fdeb667a3384740704c8a8d25f34c4f709f178485c6d65567f787718712d34ef8759695f";

export const test_token: string =
  "ee51836b89eb9a60761f6dba8470f1fc8571fa8388e67d4e2a17eafdc2af74ddce15e9d550661c64eb3f4c84e78ede422b293b9e4b69d461769fdf4b2af32df244b243ea00a18fe0deb4f19d93e899c138bfd0add59093527e2571cb18ae41fb0e85a587b18b17388a7183907ca5b3d286356ca4e45cc399f033e4dff67ec278";

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
  customcolor?: string;
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
