import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PatchAppealPot } from "apis/potAPI";
import { PatchAppealPotParam } from "apis/types/pot";

const usePatchAppealPot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ potId, body }: PatchAppealPotParam) =>
      PatchAppealPot(potId, body),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["profile", "feeds", variables.potId, "me"],
      });
      queryClient.invalidateQueries({
        queryKey: ["summary", variables.potId],
      });
    },
  });
};

export default usePatchAppealPot;
