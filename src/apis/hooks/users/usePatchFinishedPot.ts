import { useMutation } from "@tanstack/react-query";
import { PatchPotCompleteParams } from "apis/types/pot";
import { patchFinishedPot } from "apis/userAPI";

const usePatchFinishedPot = () => {
  return useMutation({
    mutationFn: ({ potId, body }: PatchPotCompleteParams) =>
      patchFinishedPot(potId, body),
  });
};
export default usePatchFinishedPot;
