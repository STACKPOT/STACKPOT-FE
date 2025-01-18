import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import {
  HomePage,
  LandingPage,
  MyPage,
  NotFound,
  SearchPage,
  SearchResultPage,
  SettingPage,
  PotMain,
  AllPotPage,
  AppliedPotPage,
  MadePotPage,
} from "@pages/index";
import MyPot from "@pages/MyPot/MyPot";

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
        element: <HomePage />,
      },
      {
        path: routes.myPot,
        element: <MyPot />,
      },
      {
        path: routes.setting,
        element: <SettingPage />,
      },
      {
        path: routes.myPage,
        element: <MyPage />,
      },
      {
        path: routes.search,
        element: <SearchPage />,
      },
      {
        path: routes.searchResult,
        element: <SearchResultPage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: routes.pot,
        element: <PotMain />,
        children: [
          { path: "", element: <AllPotPage /> },
          { path: "applied", element: <AppliedPotPage /> },
          { path: "madebyme", element: <MadePotPage /> },
        ],
      }
    ],
  },
]);

export default router;
