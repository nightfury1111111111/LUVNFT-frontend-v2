export const breakpointMap = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
};

const mediaQueries = {
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (max-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (max-width: ${breakpointMap.lg}px)`,
};

export default mediaQueries;
