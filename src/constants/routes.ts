const routes = {
  main: "/",
  myPage: "/my-page",
  home: "/home",
  writePost: "/writePost",
  pot: {
    base: "/pot",
    applied: "/pot/applied",
    madeByMe: "/pot/created",
  },
  createPot: "/create-pot",
  myPot: "/my-pot",
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
} as const;

export default routes;
