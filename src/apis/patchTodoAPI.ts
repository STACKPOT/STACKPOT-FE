import { authApiPatch } from "./apiUtils";  
import { ApiResponse } from "./types/response";  
import { Result } from "./types/todo";

export const patchTodo = async (
  potId: number, 
  tasks: { todoId: number | null, content: string, status: string }[]
): Promise<ApiResponse<Result>> => {
  const url = `/my-pots/${potId}/todos`;

  return authApiPatch<Result>(url, tasks);  
};
