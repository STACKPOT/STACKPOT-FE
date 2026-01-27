import { useQuery } from "@tanstack/react-query";
import { GetNotification } from "apis/notificationAPI";

const useGetNotification = (enabled: boolean) => {
  return useQuery({
    queryKey: ["notification"],
    queryFn: () => GetNotification(),
    select: (data) => data.result,
    enabled,
  });
};
export default useGetNotification;
