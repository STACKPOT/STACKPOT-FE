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
  CreatePotPage,
  MyPotMainPage
} from "@pages/index";
import MyPotStatusPage from "@pages/MyPot/MyPotStatus/MyPotStatus";
import MyPotCalendarPage from "@pages/MyPot/MyPotCalendar/MyPotCalendar";

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
        path: routes.createPot,
        element: <CreatePotPage />,
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
        path: routes.pot.base,
        element: <PotMain />,
        children: [
          { index: true, element: <AllPotPage /> },
          { path: routes.pot.applied, element: <AppliedPotPage /> },
          { path: routes.pot.madeByMe, element: <MadePotPage /> },
        ],
      },
      {
        path: routes.myPot.base,
        element: <MyPotMainPage />,
        children: [
          { index: true, element: <MyPotStatusPage /> },
          { path: routes.myPot.calendar, element: <MyPotCalendarPage /> }
        ]
      }
    ],
  },
]);

export default router;
