import { authApiGet, authApiPatch } from "./apiUtils";  
import { ApiResponse } from "./types/response";  
import { Result, Todo } from "./types/myPot"; 

export const GetTodos = async (potId: number, page: number = 1, size: number = 3): Promise<ApiResponse<Result>> => {
  const params = { page, size };
  return authApiGet<Result>(`/my-pots/${potId}/todos`, params);  
};

export const patchTodo = async ({ potId, data }: { potId: number; data: Todo[] }) 
  : Promise<ApiResponse<Result>> => {
  return authApiPatch<Result>(`/my-pots/${potId}/todos`, data);
};

export const patchMyTodoStatus = async (potId: number, todoId: number) => {
  return authApiPatch(`/my-pots/${potId}/todos/${todoId}`, { status: "COMPLETED" });
};
