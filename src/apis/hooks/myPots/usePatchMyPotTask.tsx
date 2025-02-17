import { useMutation } from "@tanstack/react-query";
import { patchMyPotTask } from "apis/myPotAPI";
import { TaskAPIParams, TaskPatch } from "apis/types/myPot";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const usePatchMyPotTask = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const handleClose = () => {
    setOpen(false);
  };

  const mutation = useMutation({
    mutationFn: ({ potId, taskId, data }: TaskAPIParams & { data: TaskPatch }) =>
      patchMyPotTask({ potId, taskId }, data),
    onSuccess: () => {
      setMessage("업무가 성공적으로 수정되었습니다.");
      setSeverity("success");
      setOpen(true);
    },
    onError: (error) => {
      setMessage(`업무 수정 실패: ${error instanceof Error ? error.message : "알 수 없는 오류"}`);
      setSeverity("error");
      setOpen(true);
    },
  });

  return {
    ...mutation,
    snackbar: (
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    ),
  };
};

export default usePatchMyPotTask;
