"use client";
import { getUserInfo } from "@/services/user.services";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  // fetching user data from getUserInfo
  const { isLoading, data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfo(),
    retry: false,
  });

  const status = userData?.statusCode === 200 ? "authorized" : "unauthorized";
  const { data } = userData ?? { data: null };
  return { data, status, isLoading };
};

export default useUser;
