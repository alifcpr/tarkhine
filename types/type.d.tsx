export interface HeaderLinks {
  _id: number;
  title: string;
  type?: string;
  href?: string;
  dropDownItems?: {
    _id: number;
    href: string;
    title: string;
    type: string;
  }[];
}

export interface ProfileLinks {
  _id: number;
  title: string;
  href?: string;
  type: string;
  value: string;
  icon: boolean;
}

export interface MobileLinks {
  _id: number;
  title: string;
  value: string;
  icon: boolean;
  type: string;
  href?: string;
  accordionItems?: {
    _id: number;
    type: string;
    href: string;
    title: string;
  }[];
}

export interface BannerSliderItems {
  _id: number;
  title: string;
  buttonText: string;
  href: string;
  picture: string;
}
