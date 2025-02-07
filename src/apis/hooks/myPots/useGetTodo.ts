import { useQuery } from "@tanstack/react-query";
import { GetTodos } from "apis/myPotAPI";
import { GetTodoParams } from "apis/types/todo";

const useGetTodo = ({ potId, page = 1, size = 3 }: GetTodoParams) => {
  return useQuery({
    queryKey: ["todos", potId, page],
    queryFn: () => GetTodos(potId, page, size),
  });
};

export default useGetTodo;