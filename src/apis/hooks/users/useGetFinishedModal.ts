import { useQuery } from "@tanstack/react-query";
import { GetFinishedModal } from "apis/userAPI";

const useGetFinishedModal = (potId: number) => {
  return useQuery({
    queryKey: ["mypage", potId],
    queryFn: () => GetFinishedModal(potId),
    select: (data) => data.result,
  });
};

export default useGetFinishedModal;
