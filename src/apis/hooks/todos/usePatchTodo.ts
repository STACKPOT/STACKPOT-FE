import { useState } from "react";
import { patchTodo } from "../../patchTodoAPI";  

export const usePatchTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const patchTodoRequest = async (
    potId: number,
    tasks: { todoId: number | null, content: string, status: string }[] 
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await patchTodo(potId, tasks); 
      if (!response.isSuccess) {
        throw new Error("투두 수정 실패");
      }
      return response;
    } catch (err: any) {
      setError(err.message || "서버 오류");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { patchTodoRequest, loading, error };
};
