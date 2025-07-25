import { Role } from "types/role";
import { APITaskStatus } from "types/taskStatus";

export interface Todo {
  todoId: number | null;
  content: string;
  status: string;
}

export interface User {
  userNickname: string;
  userRole: string;
  userId: number;
  todoCount: number;
  todos: Todo[];
}

export interface Result {
  totalPages: number;
  potName: string;
  todos: User[];
  currentPage: number;
  totalElements: number;
}

export interface GetTodoParams {
  potId: number;
  page: number;
  size: number;
}

export interface Participant {
  potMemberId: number;
  userId: number;
  nickName: string;
  role: string;
}

export interface Task {
  taskboardId: number;
  title: string;
  description: string;
  creatorNickname: string;
  creatorRole: string;
  category: string[];
  status: APITaskStatus;
  deadLine: string;
  participants: Participant[];
  dday: string;
}

export interface TaskResponse {
  OPEN?: Task[];
  IN_PROGRESS?: Task[];
  CLOSED?: Task[];
}

export interface TaskDetailResponse {
  taskboardId: number;
  creatorUserId: number;
  creatorNickname: string;
  creatorRole: string;
  title: string;
  description: string;
  deadLine: string;
  status: APITaskStatus;
  potId: number;
  participants: Participant[];
  dday: string;
  createdAt: string;
}

export interface TodoUpdateRequest {
  potId: number;
  data: Todo[];
}

export interface TaskPatch {
  title: string;
  deadline: string;
  taskboardStatus: string;
  description: string;
  participants: number[] | null;
}

export interface PatchTodoStatusParams {
  potId: number;
  todoId: number;
}

export interface MyPotResponse {
  map: any;
  potId: number;
  potName: string;
  isOwner: boolean;
  members: {
    FRONTEND?: number;
    BACKEND?: number;
    DESIGN?: number;
    PLANNING?: number;
  };
}

export interface TaskAPIParams {
  potId: number;
  taskId: number;
}

export interface GetTaskParams {
  potId: number;
}

export interface GetTasksMonthParams {
  potId: number;
  year: number;
  month: number;
}

export interface GetTasksMonthResponse {
  taskId: number;
  deadLine: string;
  participating: boolean;
}

export interface GetTasksCalendarParams {
  potId: number;
  date: string;
}

export interface GetTasksCalendarResponse {
  taskboardId: number;
  title: string;
  description: string;
  creatorNickname: string;
  creatorRole: Role;
  category: Role[];
  status: APITaskStatus;
  deadLine: string;
  participants: Participant[];
  dday: string;
}
export interface MyPotMember {
  potMemberId: number;
  nickname: string;
  kakaoId?: string;
  potRole: Role;
  owner: boolean;
}

export interface PostTask {
  title: string;
  deadline: string;
  taskboardStatus: APITaskStatus;
  description: string;
  participants: number[] | null;
}

export interface PatchStatus {
  status: string;
}
