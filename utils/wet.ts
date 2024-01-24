"use server";
import { setCookie } from "cookies-next";

export const makeCookie = () => {
  setCookie("test", "ok");
};

makeCookie();
