import routes from "@constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams } from "apis/types/myPot";
import { useSnackbar } from "providers";
import { useNavigate } from "react-router-dom";

export const useDeleteMyPotTask = () => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ potId, taskId }: TaskAPIParams) =>
      deleteMyPotTask({ potId, taskId }),
    onSuccess: (_, { potId }) => {
      navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
      queryClient.invalidateQueries({ queryKey: ["myPotTasks", potId] });
      showSnackbar({
        message: "업무가 삭제되었습니다.",
        severity: "success",
      });
    },
    onError: () => {
      showSnackbar({
        message: "업무 삭제에 실패했습니다.",
        severity: "error",
      });
    },
  });
};

export default useDeleteMyPotTask;
