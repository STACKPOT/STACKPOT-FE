const routes = {
  main: "/",
  myPage: "/my-page",
  home: "/home",
  writePost: "/writing-page",
  pot: {
    base: "/pot",
    applied: "/pot/applied",
    madeByMe: "/pot/created",
  },
  createPot: "/create-pot",
  myPot: {
    base: "/my-pot",
    calendar: "/my-pot/calendar",
    task: "/my-pot/task",
  },
  calendar: "calendar",
  task: "task",
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
  signUp: "/sign-up",
  potDetail: "/pot/:potId",
  callback: "/callback",
  editPost: "/edit-post/:postId",
  editFinishedPot: "/finished-pot/edit/:potId",
  userProfile: "/user/:userId",
  createFinishedPot: "/create-finished-pot",
} as const;

export default routes;
