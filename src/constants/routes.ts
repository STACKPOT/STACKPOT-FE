const routes = {
  main: "/",
  myPage: "/my-page",
  home: "/home",
  pot: {
    base: "/pot",
    applied: "/pot/applied",
    madeByMe: "/pot/created",
  },
  createPot: "/create-pot",
  myPot: {
    base: "/my-pot",
    calendar: "/my-pot/calendar",
  },
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
} as const;

export default routes;
