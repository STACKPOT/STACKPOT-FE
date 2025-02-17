import { useMutation } from "@tanstack/react-query";
import { PatchFinishedPotParams } from "apis/types/user";
import { patchFinishedPot } from "apis/userAPI";

const usePatchFinishedPot = () => {
  return useMutation({
    mutationFn: ({ potId, body }: PatchFinishedPotParams) =>
      patchFinishedPot({ potId, body }),
  });
};
export default usePatchFinishedPot;
