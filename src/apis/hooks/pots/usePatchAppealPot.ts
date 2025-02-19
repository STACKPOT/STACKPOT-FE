import { useMutation } from "@tanstack/react-query";
import { PatchAppealPot } from "apis/potAPI";
import { PatchAppealPotParam } from "apis/types/pot";

const usePatchAppealPot = () => {
  return useMutation({
    mutationFn: ({ potId, body }: PatchAppealPotParam) =>
      PatchAppealPot(potId, body),
  });
};

export default usePatchAppealPot;
