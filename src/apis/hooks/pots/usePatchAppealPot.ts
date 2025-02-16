import { useMutation } from "@tanstack/react-query";
import { PatchAppealPot } from "apis/potAPI";
import { PatchAppealPotParam } from "apis/types/pot";

const usePatchAppealPot = () => {
  return useMutation({
    mutationFn: ({ potId, memberId, body }: PatchAppealPotParam) =>
      PatchAppealPot(potId, memberId, body),
  });
};

export default usePatchAppealPot;
