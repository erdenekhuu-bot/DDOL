export type navlink = {
  id: number;
  title: string;
  url: string;
  scroll?: string;
}[];

export const token: string =
  "5d9d71326b7f8d9e3f9d88c39519c78e7c2921ffc6da914f2e0c2e096a28a0061b0a455820327deca4ac82467c27ebd83a5e3fd753bc4c265141a2f01648459362fe37e48dac6aeebc439fe5ed14716132d878cadf3650a7810908be15967fbffb69c1092f2e4111eb43e3b18ae69f2a9a2578a553b2d0cb7bc13dca29e941c4";

export type home = {
  id: number;
  title: string;
  phone: any;
  tablet: any;
}[];

export type slide = {
  id: number;
  title: string;
  image: any;
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
