export type navlink = {
  id: number;
  title: string;
  url: string;
  scroll?: string;
}[];

export const token: string =
  "db7366f10ba3578b47fb26b8be709181bc50df678bcca1673254a87eca5039a93573b26d16acdfcaacd4fabbf98996e9124c3bc96faa0d2762f2b4d9b8ab6935c46b202813cf058a009842e986dce310709598fb4a1be9f64fd6d4d15e350ad5a43857966313dfb41b2ed04131f39508660404bf3bf72508794ebbf732691535";

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
