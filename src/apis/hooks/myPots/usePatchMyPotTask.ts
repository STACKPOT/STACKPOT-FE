import { useMutation } from "@tanstack/react-query";
import { patchMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams, TaskPatch } from "apis/types/myPot";
import { useSnackbar } from "providers";

const usePatchMyPotTask = () => {
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async ({ potId, taskId, data }: TaskAPIParams & { data: TaskPatch }) => {
      const response = await patchMyPotTask({ potId, taskId }, data);
      return response;
    },
    onSuccess: () => {
      showSnackbar({
        message: "업무가 수정되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "업무 수정에 실패했습니다.",
        severity: "error",
      });

    }
  });
};


export default usePatchMyPotTask;
