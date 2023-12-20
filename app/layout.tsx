import { estedadFont } from "@/utils/font";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "ترخینه",
  description:
    "ترخینه رستورانی برتر و متمایز است که با تمرکز بر غذاهای سالم و با کیفیت، تجربه‌ای منحصربه‌فرد از سفر به دنیای طعم‌های خوشمزه را به شما ارائه می‌دهد. با استفاده از بهترین مواد اولیه و تکنیک‌های پخت متفاوت، غذاهای لذیذ و تازه‌ای را آماده می‌کنیم. همچنین، با محیطی دلنشین و دوستانه، ترخینه شما را به سفری شگفت‌انگیز به دنیای طعم‌ها و لذت‌های خوب دعوت می‌کند.",
  icons: {
    icon: "../public/assets/icons/site-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // mx-auto max-w-sm p-1 md:max-w-5xl xl:max-w-7xl

  return (
    <html lang="fa" dir="rtl">
      <body className={estedadFont.variable}>
        <div className="">
          <Header />
          <main className="mx-auto max-w-7xl">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
