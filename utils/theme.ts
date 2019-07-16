export const breakpoints = {
  pad: '480',
  desktop: '769',
  largeDesktop: '1440',
};

/**
 * @param {string} threshold
 * @param {string} displayWay 'max' or 'min'
 */
export const media = (
  threshold: 'pad' | 'desktop' | 'largeDesktop',
  displayWay: 'max' | 'min' = 'min',
) => {
  const breakpoint = breakpoints[threshold];
  return `@media (${displayWay}-width: ${breakpoint}px)`;
};