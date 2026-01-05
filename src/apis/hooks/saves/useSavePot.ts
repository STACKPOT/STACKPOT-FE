import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postSavePot } from "apis/saveAPI";

const usePostSavePot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (potId: number) => postSavePot(potId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
      queryClient.invalidateQueries({ queryKey: ["search"] });
      queryClient.invalidateQueries({ queryKey: ["potDetail", variables] });
    },
  });
};

export default usePostSavePot;
