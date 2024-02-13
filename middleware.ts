import { NextRequest, NextResponse } from "next/server";

const protectRoutes = [
  "/profile",
  "/profile/info",
  "/profile/orders",
  "/profile/favorite",
  "/profile/addresses",
  "/admin",
];

const adminRoutes = ["/admin"];

export const middleware = async (req: NextRequest) => {
  const accessToken = req.cookies.get("access-token")?.value ?? "";
  const refreshToken = req.cookies.get("refresh-token")?.value ?? "";

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/user`, {
    headers: {
      "access-token": accessToken,
      "refresh-token": refreshToken,
    },
  });
  const data = await res.json();

  // redirect when user not login
  if (data.statusCode === 401 && protectRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // redirect to profile when user not admin
  if (
    data.statusCode === 200 &&
    data.role !== "admin" &&
    adminRoutes.includes(req.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/profile/info", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // redirect user to profile when login
  if (data.statusCode === 200 && req.nextUrl.pathname === "/login") {
    const absoluteURL = new URL("/profile/info", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
};

export const config = {
  matcher: ["/login", "/profile", "/admin"],
};
