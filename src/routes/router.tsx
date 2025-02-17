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
  EditPotPage,
  FeedDetailPage,
} from "@pages/index";
import EditPost from "@pages/EditPost/EditPost";

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
        path: `${routes.pot.base}/:potId`,
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
        path: `${routes.feed.edit}/:feedId`,
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
        path: `${routes.createFinishedPot}/:potId`,
        element: <CreateFinishedPot />,
      },
      {
        path: `${routes.editPot}/:potId`,
        element: <EditPotPage />,
      },
      {
        path: `${routes.feed.base}/:feedId`,
        element: <FeedDetailPage />,
      },
    ],
  },
]);

export default router;
