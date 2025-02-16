import { useQuery } from "@tanstack/react-query";
import { getMyPotTodo } from "apis/myPotAPI";
import { GetTodoParams, Result } from "apis/types/myPot";

const defaultResult: Result = {
  totalPages: 0,
  potName: "",
  todos: [],
  currentPage: 0,
  totalElements: 0,
};

const useGetMyPotTodo = ({ potId, page, size }: GetTodoParams) => {
  return useQuery({
    queryKey: ["todos", potId, page, size],
    queryFn: () => getMyPotTodo({potId, page, size}).then((response) => response.result ?? defaultResult),
    select: (result) => ({
      title: result.potName,
      nickname: result.todos?.[0]?.userNickname ?? "",
      taskCount: result.todos?.[0]?.todoCount ?? 0,
      todos: result.todos,
      totalElements: result.totalElements,
    }),
  });
};

export default useGetMyPotTodo;
