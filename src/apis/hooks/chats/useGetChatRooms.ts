import { useQuery } from "@tanstack/react-query";
import { getChatRooms } from "apis/chatAPI";

const useGetChatRooms = () => {
  return useQuery({
    queryKey: ["chatRooms"],
    queryFn: () => getChatRooms(),
  });
};

export default useGetChatRooms;
