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

export type EventItemProps = {
  icon: string;
  title: string;
  image: string;
  onClick: () => void;
  isActive: boolean;
};

export type SlideEvent = {
  id: number;
  icon: string;
  title: string;
  image: string;
};
