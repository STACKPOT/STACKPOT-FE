const breakpoints = {
  1920: 1920,
  1440: 1440,
};

const media = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [
    key,
    `@media (min-width:${value}px)`,
  ])
);

export { media };
