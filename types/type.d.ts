import { Address } from "cluster";

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
  href: string;
  type: string;
  value: string;
  Icon: any;
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

export interface BranchParams {
  _id: number;
  title: string;
  thumbnail: string;
  href: string;
  address: string;
  phoneOne: string;
  phoneTwo: string;
  workTime: string;
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
  name?: string;
  family?: string;
  email?: string;
  birthday?: string;
  imageUrl?: string;
  image?: string;
}

export interface AboutItems {
  _id: number;
  text: string;
  icon: string;
}

export interface HelpLinksItems {
  _id: number;
  title: string;
  href: string;
}

export interface Question {
  _id: number;
  title: string;
  content: string;
}

export interface UrlQuery {
  searchParams: { [key: string]: string | undefined };
}

export interface Author {
  _id: string;
  family: string;
  name: string;
  imageUrl: string;
  role: string;
}

export interface ReplyComment {
  author: Author[];
  createdAt: number;
  text: string;
}

export interface Comment {
  _id: string;
  author: Author[];
  foodId: string;
  text: string;
  createdAt: number;
  show: boolean;
  rate: number;
  reply?: ReplyComment;
}

export interface Product {
  _id: string;
  title: string;
  ingredients: string[];
  description: string;
  price: number;
  discount: number;
  quantity: number;
  category: string[];
  subCategory: string[];
  imagesUrl: string[];
  rate: number;
  rateCount: number;
  comments: Comment[];
  newPrice?: number;
  isFavorite: boolean;
}

export interface CommonResponse {
  message: string;
  statusCode: number;
}

export interface EditAddressParams {
  id: string;
  addressData: AddAddress;
}

export interface CheckOtpParams {
  phone: string;
  otpCode: number;
}

export interface CheckOtpResponse {
  message: string;
  statusCode: number;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface AddCommentParams {
  foodId: string;
  text: string;
  rate: number;
}

export interface allProductParams {
  main?: string;
  sub?: string;
  page?: number;
  limit?: number;
  q?: string;
}

export interface AllProductResponse {
  foods: {
    data: Product[];
    subCategory: string;
  }[];
  maxPage: number;
  statusCode: number;
}

export interface GetProductByIdResponse {
  data: Product;
  statusCode: number;
}

export interface GetUserInfoResponse {
  data: User | null;
  statusCode: number | null;
}

export interface GetUserAddresses {
  data: Address;
  statusCode: number;
}

export interface GetUserAddressParams {
  page: number;
  limit: number;
}

export interface GetUserAddressResponse {
  data: Addresses[] | [];
  maxPage: string;
}

export interface UploadProfileImageParams {
  setLoadingProgress: (progress: number) => void;
  file: FormData;
}

export interface GetAllFavoriteFoodsResponse {
  favoriteFood: Product[];
  maxPage: number;
  statusCode: number;
}

export interface GetAllFavoriteFoodsParams {
  main: string;
  q: string;
  page: number;
  limit: number;
}

export interface ShoppingCart
  extends Omit<
    Product,
    | "comments"
    | "isFavorite"
    | "category"
    | "subCategory"
    | "ingredients"
    | "description"
  > {}

export interface ShoppingCartList {
  data: {
    quantity: number;
    foodDetail: ShoppingCart;
  }[];
  detail: {
    totalPrice: number;
    totalDiscount: number;
    cardQunatity: 4;
  };
  statusCode: number;
}

export interface sendToPaymentGatewayParams {
  addressId: string;
  discountCode?: string;
}

export interface sendToPaymentGatewayResponse {
  statusCode: number;
  gatewayURL: string;
}
