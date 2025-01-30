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
    detail: "/my-pot/:taskId",
    calendar: "/my-pot/calendar",
  },
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
  signUp: "/sign-up",
  potDetail: "/pot/:potId",
} as const;

export default routes;
