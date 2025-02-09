import { useQuery } from "@tanstack/react-query";
import { GetTodos } from "apis/myPotAPI";
import { GetTodoParams, Result } from "apis/types/todo";

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
    queryFn: async () => {
      const response = await GetTodos(potId, page, size);
      return response.result ?? defaultResult;
    },
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
