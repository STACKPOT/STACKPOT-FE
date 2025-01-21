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
  myPot: "/my-pot",
  setting: "/setting",
  search: "/search",
  searchResult: "/search-result",
  signUp: "/sign-up"
} as const;

export default routes;
