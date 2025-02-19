import React, { createContext, useState, useContext, ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SnackbarOptions {
  message: string;
  severity?: "success" | "info" | "warning" | "error";
}

interface SnackbarContextType {
  showSnackbar: (options: SnackbarOptions) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbarList, setSnackbarList] = useState<
    {
      key: number;
      message: string;
      severity: "success" | "info" | "warning" | "error";
    }[]
  >([]);

  const showSnackbar = ({ message, severity = "success" }: SnackbarOptions) => {
    setSnackbarList((prev) => [
      ...prev,
      { key: Date.now(), message, severity },
    ]);
  };

  const handleClose = (key: number) => {
    setSnackbarList((prev) => prev.filter((snackbar) => snackbar.key !== key));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbarList.map(({ key, message, severity }) => (
        <Snackbar
          key={key}
          open={true}
          autoHideDuration={2000}
          onClose={() => handleClose(key)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => handleClose(key)}
            severity={severity}
            sx={{ fontSize: "1.5rem" }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                onClick={() => handleClose(key)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {message}
          </Alert>
        </Snackbar>
      ))}
    </SnackbarContext.Provider>
  );
};
