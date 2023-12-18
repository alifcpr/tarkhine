import {
  BannerSliderItems,
  CategoryItems,
  HeaderLinks,
  MobileLinks,
  ProfileLinks,
} from "@/types/type.d";

export const headerLinks: HeaderLinks[] = [
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

export const profileLinks: ProfileLinks[] = [
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

export const mobileLinks: MobileLinks[] = [
  {
    _id: 1,
    title: "صفحه اصلی",
    value: "home page",
    icon: true,
    type: "link",
    href: "/",
  },
  {
    _id: 2,
    title: "منو",
    value: "menu",
    icon: true,
    type: "filter",
    accordionItems: [
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
  {
    _id: 3,
    title: "شعبه",
    value: "branch",
    icon: true,
    type: "filter",
    accordionItems: [
      { _id: 1, title: "اکباتان", type: "link", href: "/branch/etkbatan" },
      { _id: 2, title: "چالوس", type: "link", href: "/branch/chalos" },
      { _id: 3, title: "اقدسیه", type: "link", href: "/branch/aghdasie" },
      { _id: 4, title: "ونک", type: "link", href: "/branch/vanak" },
    ],
  },
  {
    _id: 4,
    title: "درباره ما",
    icon: true,
    type: "link",
    href: "/about",
    value: "about",
  },
  {
    _id: 5,
    title: "تماس با ما",
    icon: true,
    type: "link",
    href: "/contact",
    value: "contact",
  },
];

export const bannerSliderItems: BannerSliderItems[] = [
  {
    _id: 1,
    picture: "/assets/images/Slider-image1.jpg",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    buttonText: "سفارش غذا",
    href: "/foods",
  },
  {
    _id: 2,
    picture: "/assets/images/Slider-image2.jpg",
    title: "سرسبزی تریخینه دلیل حس خوب شماست!",
    buttonText: "سفارش غذا",
    href: "/foods",
  },
  {
    _id: 3,
    picture: "/assets/images/Slider-image3.jpg",
    title: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    buttonText: "سفارش غذا",
    href: "/foods",
  },
];

export const categoryItems: CategoryItems[] = [
  {
    _id: 1,
    pitcture: "/assets/images/ct-1.png",
    href: "/food?category=nooshidani",
    title: "نوشیدنی",
  },
  {
    _id: 2,
    pitcture: "/assets/images/ct-2.png",
    href: "/food?category=deser",
    title: "دسر",
  },
  {
    _id: 3,
    pitcture: "/assets/images/ct-3.png",
    href: "/food?category=pishghaza",
    title: "پیش غذا",
  },
  {
    _id: 4,
    pitcture: "/assets/images/ct-4.png",
    href: "/food?category=mainfood",
    title: "غذای اصلی",
  },
];
