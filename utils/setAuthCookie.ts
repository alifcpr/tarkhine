"use server";
import { cookies } from "next/headers";

export const setAuthCookie = (accessToken: string, refreshToken: string) => {
  cookies().set("access-token", accessToken, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 1 * 3600 * 1200,
  });
  cookies().set("refresh-token", refreshToken, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 1 * 3600 * 1200,
  });
};
