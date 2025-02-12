import { useQuery } from "@tanstack/react-query";
import { getMyPot } from "apis/myPotAPI";

const useGetMyPot = () => {
  return useQuery({
    queryKey: ["myPot"],
    queryFn: () => getMyPot(),
    select: (data) => data.result,
  });
};

export default useGetMyPot;
