import { useQuery } from "@tanstack/react-query";
import { GetNotification } from "apis/notificationAPI";

const useGetNotification = () => {
  return useQuery({
    queryKey: ["notification"],
    queryFn: () => GetNotification(),
    select: (data) => data.result,
  });
};
export default useGetNotification;
