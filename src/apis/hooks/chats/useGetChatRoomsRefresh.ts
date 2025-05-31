import { useQuery } from "@tanstack/react-query";
import { getChatRoomsRefresh } from "apis/chatAPI";

const useGetChatRoomsRefresh = () => {
  return useQuery({
    queryKey: ["chatRoomsRefresh"],
    queryFn: () => getChatRoomsRefresh(),
  });
};

export default useGetChatRoomsRefresh;
