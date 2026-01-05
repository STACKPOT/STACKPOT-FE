import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postSavePot } from "apis/saveAPI";

const usePostSavePot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (potId: number) => postSavePot(potId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
      queryClient.invalidateQueries({ queryKey: ["search"] });
    },
  });
};

export default usePostSavePot;
