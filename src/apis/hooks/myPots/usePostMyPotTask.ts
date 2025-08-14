import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postMyPotTask } from "apis/myPotAPI";
import { PostTask } from "apis/types/myPot";
import { useSnackbar } from "providers";

export const usePostMyPotTask = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, data }: { potId: number; data: PostTask }) => postMyPotTask({ potId, data }),
    onSuccess: (_, { potId }) => {
      queryClient.invalidateQueries({ queryKey: ["myPotTasks", potId] });
      queryClient.invalidateQueries({ queryKey: ["tasksMonth"], });

      showSnackbar({
        message: "업무가 생성되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "업무 생성에 실패했습니다.",
        severity: "error",
      });
    },
  });
};
