export interface Todo {
  todoId: number;
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

export interface TodoUpdateRequest {
  potId: number;
  data: TodoItem[];
}

export interface TodoItem {
  todoId: number | null;
  content: string;
  status: string;
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
