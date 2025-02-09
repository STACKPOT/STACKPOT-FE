import { useQuery } from "@tanstack/react-query";
import { GetFinishedModal } from "apis/finishedmodalAPI";
import { GetFinishedModalParams } from "apis/types/finishedmodal";

const useGetFinishedModal = ({ potId }: GetFinishedModalParams) => {
  return useQuery({
    queryKey: ["mypage", potId],
    queryFn: () => GetFinishedModal({ potId }),
    select: (data) => data.result,
  });
};

export default useGetFinishedModal;
