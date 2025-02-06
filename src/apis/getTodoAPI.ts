import { authApiGet } from "./apiUtils";  
import { ApiResponse } from "./types/response";  
import { Result } from "./types/todo";

export const GetTodos = async (potId: number, page: number = 1, size: number = 3): Promise<ApiResponse<Result>> => {
  const url = `/my-pots/${potId}/todos`;  

  const params = {
    page,
    size
  };

  return authApiGet<Result>(url, params);  
};
