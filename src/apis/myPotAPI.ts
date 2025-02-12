import { authApiGet, authApiPatch } from "./apiUtils";  
import { Result, Todo, TaskResponse } from "./types/myPot"; 

export const getTodo = async (potId: number, page: number, size: number) => {
  const params = { page, size };
  return authApiGet<Result>(`/my-pots/${potId}/todos`, params);  
};

export const patchTodo = async ({ potId, data }: { potId: number; data: Todo[] })  => {
  return authApiPatch<Result>(`/my-pots/${potId}/todos`, data);
};

export const patchMyTodoStatus = async (potId: number, todoId: number) => {
  return authApiPatch(`/my-pots/${potId}/todos/${todoId}`, { status: "COMPLETED" });
};

export const getTask = async (potId: number) => {
  return authApiGet<TaskResponse>(`/my-pots/${potId}/tasks`);
};
