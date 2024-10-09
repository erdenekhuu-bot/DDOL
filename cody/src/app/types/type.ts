export type header_menu = {
  id: number;
  title: string;
};

export type subitems = {
  id?: number;
  image?: any;
  title?: string;
  feature?: string;
};

export type PopupProps = {
  onClose: () => void;
};

export type EventProps = {
  id?: number;
  icon?: any;
  image?: any;
  title?: string;
  click?: () => void;
};

export type EventItem = {
  icon: string;
  title: string;
  image?: string;
  onClick?: () => void;
  isActive?: boolean;
};

export type EventItemImage = {
  image: string;
  onClick?: () => void;
  isActive?: boolean;
};

export type SlideEvent = {
  id: number;
  icon: string;
  title: string;
  image: string;
};

export type solution_list = { id: number; title: string; content: string }[];

export const token: string =
  "de8fee265589ff11295169b71344dee05ec8a1b5b8e1fdab4c49aef3812aa727aa95a97fac0a6cb7f6d1e79678dcb375fcee4d26925ddc4b7b609de795ab8745d65d3ef648eb3d0560a365feeed28079063c1d5b69d27db9d487ef68c8b5da60496e0d4c3130bee856dfccce0a0d947f3a6d4881b2e14938bfcf42684a356552";
