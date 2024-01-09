import { estedadFont } from "@/utils/font";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import NextTopLoader from "nextjs-toploader";

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
          <ReactQueryProvider>
            <NextTopLoader
              color="#417F56"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
            />
            <Header />
            <main className="mx-auto max-w-7xl">{children}</main>
            <Toaster containerClassName="font-estedad" />
            <Footer />
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
