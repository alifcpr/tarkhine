"use client";
import { getUserInfo } from "@/services/user.services";
import { User } from "@/types/type.d";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type userDataType = {
  status: "authorized" | "unauthorized";
  data: null | User;
};

const useUser = () => {
  // set userData in this state
  const [userData, setUserData] = useState<userDataType>({
    status: "unauthorized",
    data: null,
  });

  // fetching user data from getUserInfo
  const { isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await getUserInfo(),
    onSuccess: ({ data }) => {
      setUserData({ status: "authorized", data });
    },
    onError: (): any => {
      setUserData({ status: "unauthorized", data: null });
    },
    retry: false,
  });

  return { data: userData.data, status: userData.status, isLoading };
};

export default useUser;
