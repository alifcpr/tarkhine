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

export interface CategoryItems {
  _id: number;
  title: string;
  pitcture: string;
  href: string;
}

export interface BranchList {
  _id: number;
  title: string;
  thumbnail: string;
  href: string;
  address: string;
  slideImages: { _id: number; picture: string }[];
}

export interface MessageBoxInputs {
  name: string;
  phoneNumber: string;
  email?: string;
  text: string;
}

export interface UrlQueryParams {
  params: string;
  value: string;
  key: string;
}

export interface RemoveUrlQueryParams {
  key: string;
  params: string;
}

export interface Addresses {
  _id: string;
  addressTitle: string;
  description: string;
  phone: string;
  name: string;
  ownReceiver: boolean;
}

export interface AddAddress {
  addressTitle: string;
  description: string;
  anotherReceiver: {
    addressTitle: string;
    description: string;
    phone: string;
    name: string;
  };
  ownReceiver: boolean;
}

export interface User {
  createdAt: string;
  updatedAt: string;
  _id: string;
  phone: string;
  username: string;
  addresses: any;
}
