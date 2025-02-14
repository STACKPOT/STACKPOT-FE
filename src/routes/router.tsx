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
  EditPostPage,
  TaskDetailPage,
  WritingPage,
  EditFinishedPotPage,
  UserPage,
  MyPotPage,
  CallbackPage,
  CreateFinishedPot,
  FeedDetailPage,
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
        path: `${routes.potDetail}/:potId`,
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
        path: routes.myPot.base,
        element: <MyPotPage />,
      },
      {
        path: routes.myPot.base,
        element: <MyPotMainPage />,
        children: [
          { path: `${routes.task}/:potId`, element: <MyPotStatusPage /> },
          {
            path: `${routes.calendar}/:potId`,
            element: <MyPotCalendarPage />,
          },
          {
            path: `${routes.task}/:potId/:taskId`,
            element: <TaskDetailPage />,
          },
        ],
      },
      {
        path: routes.editPost,
        element: <EditPostPage />,
      },
      {
        path: `${routes.editFinishedPot}/:potId`,
        element: <EditFinishedPotPage />,
      },
      {
        path: `${routes.userProfile}/:userId`,
        element: <UserPage />,
      },
      {
        path: routes.createFinishedPot,
        element: <CreateFinishedPot />,
      },
      {
        path: `${routes.feed}/:feedId`,
        element: <FeedDetailPage />,
      },
    ],
  },
]);

export default router;
