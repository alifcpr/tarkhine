import { getUserAddress } from "@/services/user.services";
import { useQuery } from "@tanstack/react-query";

const useGetAddresses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["address"],
    queryFn: async () => await getUserAddress({ page: "1", limit: "10" }),
  });

  return { data, isLoading };
};

export default useGetAddresses;
