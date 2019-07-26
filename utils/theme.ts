export const breakpoints = {
  pad: '530',
  tablet: '790',
  desktop: '1024',
  largeDesktop: '1440',
};

/**
 * @param {string} threshold
 * @param {string} displayWay 'max' or 'min'
 */
export const media = (
  threshold: 'pad' | 'tablet' | 'desktop' | 'largeDesktop',
  displayWay: 'max' | 'min' = 'min',
) => {
  const breakpoint = breakpoints[threshold];
  return `@media (${displayWay}-width: ${breakpoint}px)`;
};
