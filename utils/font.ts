import localFont from "next/font/local";

export const estedadFont = localFont({
  src: [
    {
      path: "../public/fonts/Estedad-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-ExtraBold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
});
