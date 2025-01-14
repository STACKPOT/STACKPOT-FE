import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import { LandingPage, MyPage, NotFound } from "@pages/index";
import Home from "@pages/Home/Home";
import Pot from "@pages/Pot/Pot";
import MyPot from "@pages/MyPot/MyPot";
import Setting from "@pages/Setting/Setting";

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
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.pot,
        element: <Pot />,
      },
      {
        path: routes.myPot,
        element: <MyPot />,
      },
      {
        path: routes.setting,
        element: <Setting />,
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
