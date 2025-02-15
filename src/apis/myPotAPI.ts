import { authApiGet, authApiPatch, authApiDelete } from "./apiUtils";  
import { Result, Todo, TaskResponse, MyPotResponse, TaskDetailResponse, TaskPatch, TaskAPIPrams } from "./types/myPot"; 

export const getMyPotTodo = async (potId: number, page: number, size: number) => {
  const params = { page, size };
  return authApiGet<Result>(`/my-pots/${potId}/todos`, params);
};

export const patchMyPotTodo = async ({ potId, data }: { potId: number; data: Todo[] })  => {
  return authApiPatch<Result>(`/my-pots/${potId}/todos`, data);
};

export const patchMyPotTodoStatus = async (potId: number, todoId: number) => {
  return authApiPatch(`/my-pots/${potId}/todos/${todoId}`, { status: "COMPLETED" });
};

export const getMyPotTask = async (potId: number) => {
  return authApiGet<TaskResponse>(`/my-pots/${potId}/tasks`);
};

export const getMyPotTaskDetail = async ({ potId, taskId }: TaskAPIPrams) => {
  return authApiGet<TaskDetailResponse>(`/my-pots/${potId}/tasks/${taskId}`);
};

export const deleteMyPotTask = async ({ potId, taskId }: TaskAPIPrams) => {
  return authApiDelete(`/my-pots/${potId}/tasks/${taskId}`);
};

export const patchMyPotTask = async ({ potId, taskId }: TaskAPIPrams, data: TaskPatch) => {
  return authApiPatch(`/my-pots/${potId}/tasks/${taskId}`, data);
};

export const getMyPot = async () => {
  return authApiGet<MyPotResponse[]>("/my-pots");
};