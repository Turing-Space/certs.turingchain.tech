// 全局声明svg component定义
declare interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const content: SvgrComponent;
  export default content;
}

type TResponsiveImage = {
  toString: () => string;
  src: string;
  images: Array<{ height: number; path: string; width: number }>;
  srcSet: string;
};
