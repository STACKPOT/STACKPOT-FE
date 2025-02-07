import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import {
  HomePage,
  LandingPage,
  PotDetailPage,
  MyPage,
  NotFound,
  SearchPage,
  SearchResultPage,
  SettingPage,
  PotMain,
  AllPotPage,
  AppliedPotPage,
  MadePotPage,
  SignUpPage,
  CreatePotPage,
  MyPotMainPage,
  MyPotStatusPage,
  MyPotCalendarPage,
  TaskDetailPage,
  WritingPage,
  MyPotPage,
  CallbackPage,
} from "@pages/index";

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
        path: routes.writePost,
        element: <WritingPage />,
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
        path: routes.signUp,
        element: <SignUpPage />,
      },
      {
        path: routes.potDetail,
        element: <PotDetailPage />,
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
        path: routes.callback,
        element: <CallbackPage />,
      },
      {
        path: routes.myPot.potPage,
        element: <MyPotMainPage />,
        children: [
          { index: true, element: <MyPotStatusPage /> },
          { path: routes.myPot.calendar, element: <MyPotCalendarPage /> },
          { path: routes.myPot.detail, element: <TaskDetailPage /> },
        ],
      },
      {
        path: routes.myPot.base,
        element: <MyPotPage />,
      },
    ],
  },
]);

export default router;
