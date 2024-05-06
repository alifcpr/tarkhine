"use server";
import { cookies } from "next/headers";

export const setAuthCookie = (accessToken: string, refreshToken: string) => {
  cookies().set("access-token", accessToken, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 3 * 3600 * 1000,
  });
  cookies().set("refresh-token", refreshToken, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 9 * 3600 * 24 * 1000,
  });
};
