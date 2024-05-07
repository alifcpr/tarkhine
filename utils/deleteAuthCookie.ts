"use server";
import { cookies } from "next/headers";

const deleteAuthCookie = () => {
  cookies().delete("access-token");
  cookies().delete("refresh-token");
};

export default deleteAuthCookie;
