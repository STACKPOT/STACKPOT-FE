const routes = {
  main: "/",
  myPage: "/my-page",
  home: "/home",
  pot: {
    base: "/pot",
    applied: "/pot/applied",
    madeByMe: "/pot/madebyme",
  },
  myPot: "/my-pot",
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
} as const;

export default routes;
