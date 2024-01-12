import {
  BannerSliderItems,
  BranchList,
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
    href: "/profile/info",
    type: "link",
    value: "profile",
    icon: true,
  },
  {
    _id: 2,
    title: "پیگیری سفارش",
    href: "/profile/orders",
    type: "link",
    value: "orders",
    icon: true,
  },
  {
    _id: 3,
    title: "علاقه مندی ها",
    href: "/profile/favorite",
    type: "link",
    value: "favorite",
    icon: true,
  },
  {
    _id: 4,
    title: "آدرس های من",
    href: "/profile/addresses",
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

export const branchList: BranchList[] = [
  {
    _id: 1,
    title: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    thumbnail: "/assets/images/branch-1.png",
    href: "/branch/ekbatan",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
  {
    _id: 2,
    title: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    thumbnail: "/assets/images/branch-2.png",
    href: "/branch/chalos",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
  {
    _id: 3,
    title: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    thumbnail: "/assets/images/branch-3.png",
    href: "/branch/ahdasie",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
  {
    _id: 4,
    title: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    thumbnail: "/assets/images/branch-4.png",
    href: "/branch/vanak",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
];

export const aboutItems = [
  { _id: 1, text: "پرسنلی مجرب و حرفه ای", icon: "user" },
  { _id: 2, text: "کیفیت بالای غذاها", icon: "chart" },
  { _id: 3, text: "محیطی دلنشین و آرام", icon: "home" },
  { _id: 4, text: "منوی متنوع", icon: "menu" },
];
