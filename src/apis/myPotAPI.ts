import { authApiGet, authApiPatch } from "./apiUtils";  
import { ApiResponse } from "./types/response";  
import { Result } from "./types/todo";

export const GetTodos = async (potId: number, page: number = 1, size: number = 3): Promise<ApiResponse<Result>> => {
  const params = { page, size };
  return authApiGet<Result>(`/my-pots/${potId}/todos`, params);  
};

export const patchTodo = async ({ potId, data }: { potId: number; data: { todoId: number | null, content: string, status: string }[] }) 
  : Promise<ApiResponse<Result>> => {
  return authApiPatch<Result>(`/my-pots/${potId}/todos`, data);
};
