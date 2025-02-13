import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTask } from "apis/myPotAPI";
import { TaskPatch } from "apis/types/myPot.ts"; 

const usePatchTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ potId, taskId, data }: { potId: number; taskId: number; data: TaskPatch }) =>
      patchTask(potId, taskId, data),
    onSuccess: (_, { potId, taskId }) => {
      queryClient.invalidateQueries({ queryKey: ["taskDetail", potId, taskId] });
    },
    onError: (error) => {
      console.error("업무 수정 실패:", error);
    },
  });
};

export default usePatchTask;
