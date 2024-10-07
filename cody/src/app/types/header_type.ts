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
