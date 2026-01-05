import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PatcheadNotification } from "apis/notificationAPI";
import { NotificationBody } from "apis/types/notification";

const usePatchNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: NotificationBody) => PatcheadNotification(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notification"],
      });
    },
  });
};

export default usePatchNotification;
