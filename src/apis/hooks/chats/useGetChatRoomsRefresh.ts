import { useQuery } from "@tanstack/react-query";
import { getChatRoomsRefresh } from "apis/chatAPI";

const useGetChatRoomsRefresh = () => {
  return useQuery({
    queryKey: ["chatRoomsRefresh"],
    queryFn: () => getChatRoomsRefresh(),
    refetchInterval: 3000,
  });
};

export default useGetChatRoomsRefresh;
