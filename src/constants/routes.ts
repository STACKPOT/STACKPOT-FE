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
  myPot: "/my-pot",
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
} as const;

export default routes;
