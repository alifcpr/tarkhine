import { getUserAddress } from "@/services/user.services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useGetAddresses = () => {
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page");

  const { data, isLoading } = useQuery({
    queryKey: ["address", pageQuery],
    queryFn: async () =>
      await getUserAddress({ page: pageQuery ? +pageQuery : 1, limit: 10 }),
    keepPreviousData: true,
  });

  return { data, isLoading };
};

export default useGetAddresses;
