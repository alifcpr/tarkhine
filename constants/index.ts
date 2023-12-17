import { HeaderItems } from "@/types/type.d";

export const headerItems: HeaderItems[] = [
  { _id: 1, type: "link", href: "/", title: "صفحه اصلی" },
  {
    _id: 2,
    title: "شعبه",
    dropDownItems: [
      { _id: 1, type: "link", href: "/branch/etkbatan", title: "اکباتان" },
      { _id: 2, type: "link", href: "/branch/chalos", title: "چالوس" },
      { _id: 3, type: "link", href: "/branch/aghdasie", title: "اقدسیه" },
      { _id: 4, type: "link", href: "/branch/vanak", title: "ونک" },
    ],
  },
  {
    _id: 3,
    title: "منو",
    dropDownItems: [
      {
        _id: 1,
        type: "link",
        href: "/food?filter=mainfood",
        title: "غذای اصلی",
      },
      {
        _id: 2,
        type: "link",
        href: "/food?filter=appetizer",
        title: "پیش غذا",
      },
      { _id: 3, type: "link", href: "/food?filter=dessert", title: "دسر" },
      {
        _id: 4,
        type: "link",
        href: "/food?filter=beverages",
        title: "نوشیدنی",
      },
    ],
  },
  { _id: 4, type: "link", href: "/franchise", title: "اعطای نمایندگی" },
  { _id: 4, type: "link", href: "/about", title: "درباره ی ما" },
  { _id: 5, type: "link", href: "/contact", title: "تماس با ما" },
];

export const profileItems = [
  {
    _id: 1,
    title: "پروفایل",
    href: "/profile",
    type: "link",
    value: "profile",
    icon: true,
  },
  {
    _id: 2,
    title: "پیگیری سفارش",
    href: "/orders",
    type: "link",
    value: "orders",
    icon: true,
  },
  {
    _id: 3,
    title: "علاقه مندی ها",
    href: "/favorite",
    type: "link",
    value: "favorite",
    icon: true,
  },
  {
    _id: 4,
    title: "آدرس های من",
    href: "/my-locations",
    type: "link",
    value: "addresses",
    icon: true,
  },
  {
    _id: 5,
    title: "خروج از حساب",
    type: "logout",
    value: "logout",
    icon: true,
  },
];
