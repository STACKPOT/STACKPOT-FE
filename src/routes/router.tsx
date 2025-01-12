import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import { LandingPage, MyPage, NotFound } from "@pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: routes.myPage,
        element: <MyPage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
