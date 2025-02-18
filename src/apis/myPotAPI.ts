import { authApiGet, authApiPatch, authApiDelete } from "./apiUtils";
import {
  Result,
  TaskResponse,
  MyPotResponse,
  TaskDetailResponse,
  TaskPatch,
  TaskAPIParams,
  GetTodoParams,
  TodoUpdateRequest,
  PatchTodoStatusParams,
  GetTaskParams,
  MyPotMember
} from "./types/myPot";

export const getMyPotTodo = async ({ potId, page, size }: GetTodoParams) => {
  return authApiGet<Result>(`/my-pots/${potId}/todos`, { page, size });
};

export const patchMyPotTodo = async ({ potId, data }: TodoUpdateRequest) => {
  return authApiPatch<Result>(`/my-pots/${potId}/todos`, data);
};

export const patchMyPotTodoStatus = async ({ potId, todoId }: PatchTodoStatusParams) => {
  return authApiPatch(`/my-pots/${potId}/todos/${todoId}`, { status: "COMPLETED" });
};

export const getMyPotTask = async ({ potId }: GetTaskParams) => {
  return authApiGet<TaskResponse>(`/my-pots/${potId}/tasks`);
};

export const getMyPotTaskDetail = async ({ potId, taskId }: TaskAPIParams) => {
  return authApiGet<TaskDetailResponse>(`/my-pots/${potId}/tasks/${taskId}`);
};

export const deleteMyPotTask = async ({ potId, taskId }: TaskAPIParams) => {
  return authApiDelete(`/my-pots/${potId}/tasks/${taskId}`);
};

export const patchMyPotTask = async ({ potId, taskId }: TaskAPIParams, data: TaskPatch) => {
  return authApiPatch(`/my-pots/${potId}/tasks/${taskId}`, data);
};

export const getMyPotOwner = async ({ potId }: GetTaskParams) => {
  return authApiGet(`/my-pots/${potId}/isOwner`);
}

export const getMyPotMembers = async ({ potId }: GetTaskParams ) => {
  return authApiGet<MyPotMember[]>(`/pots/${potId}/members`);
}

export const getMyPot = async () => {
  return authApiGet<MyPotResponse[]>("/my-pots");
};
