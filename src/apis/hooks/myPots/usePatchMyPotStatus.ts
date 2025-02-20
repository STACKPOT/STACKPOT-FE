import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import { patchMyPotStatus } from "apis/myPotAPI"; 
import { PatchStatus, TaskAPIParams } from "apis/types/myPot";  
import { useSnackbar } from "providers";

export const usePatchMyPotStatus = () => { 
  const queryClient = useQueryClient(); 
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ potId, taskId, data }: TaskAPIParams & { data: PatchStatus }) =>
      patchMyPotStatus({ potId, taskId }, data),
    onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: ["taskDetail"] });
      showSnackbar({
        message: "업무 상태가 수정되었습니다.",
        severity: "success",
      });
    }, 
    onError: () => { 
      showSnackbar({
        message: "업무 상태 수정에 실패했습니다.",
        severity: "error",
      });
    }, 
  }); 
};
