import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "routes/router";
import { worker } from "mocks/browser";

if (process.env.NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' }).then(() => {
    createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  });
} else {
  // 프로덕션에서 워커 없이 실행
  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}