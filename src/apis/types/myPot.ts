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

export type APITaskStatus = "OPEN" | "IN_PROGRESS" | "CLOSED";

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