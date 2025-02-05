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
    potPage: "/my-pot/:potId",
    detail: "/my-pot/:potId/:taskId",
    calendar: "/my-pot/:potId/calendar",
  },
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
  signUp: "/sign-up",
  potDetail: "/pot/:potId",
  callback: "/callback",
} as const;

export default routes;
