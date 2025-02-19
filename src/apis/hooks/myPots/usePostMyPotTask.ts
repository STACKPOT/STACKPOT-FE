import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postMyPotTask } from "apis/myPotAPI";
import { PostTask } from "apis/types/myPot";

export const usePostMyPotTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, data }: { potId: number; data: PostTask }) => postMyPotTask({ potId, data }),
    onSuccess: (_, { potId }) => {
      queryClient.invalidateQueries({ queryKey: ["myPotTasks", potId] });
    },
  });
};
