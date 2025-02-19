import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import { patchMyPotStatus } from "apis/myPotAPI"; 
import { PatchStatus, TaskAPIParams } from "apis/types/myPot";  

export const usePatchMyPotStatus = () => { 
  const queryClient = useQueryClient(); 

  return useMutation({
    mutationFn: ({ potId, taskId, data }: TaskAPIParams & { data: PatchStatus }) =>
      patchMyPotStatus({ potId, taskId }, data),
    onSuccess: (_, variables) => { 
      queryClient.invalidateQueries({ queryKey: ["taskDetail", variables.potId, variables.taskId] });
    }, 
    onError: (error) => { 
      console.error("할 일 업데이트 실패:", error); 
    }, 
  }); 
};
