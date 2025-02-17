import { useQuery } from "@tanstack/react-query";
import { GetFinishedModal } from "apis/userAPI";
import { GetFinishedModalParams } from "apis/types/mypage";

const useGetFinishedModal = ({ potId }: GetFinishedModalParams) => {
  return useQuery({
    queryKey: ["mypage", potId],
    queryFn: () => GetFinishedModal({ potId }),
    select: (data) => data.result,
  });
};

export default useGetFinishedModal;
