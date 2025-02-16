const routes = {
  main: "/",
  myPage: { base: "/my-page", edit: "/my-page/:feedId" },
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
  potDetail: "/pot",
  callback: "/callback",
  editPost: "/edit-post/:postId",
  editFinishedPot: "/finished-pot/edit",
  userProfile: "/user",
  createFinishedPot: "/create-finished-pot",
  editPot: "/pot/edit",
  feed: "/feed",
} as const;

export default routes;
