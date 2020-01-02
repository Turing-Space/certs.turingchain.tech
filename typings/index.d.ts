// 全局声明svg component定义
declare interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }

declare module '*.svg' {
  const content: SvgrComponent;
  export default content;
}

declare module 'react-lazy-load-image-component';
declare module 'mgr-pdf-viewer-react';

type TResponsiveImage = {
  toString: () => string;
  src: string;
  images: Array<{ height: number; path: string; width: number }>;
  srcSet: string;
};

interface IAPIResponseInterface<T> {
  success: 'true' | 'false' | boolean;
  message: string;
  content: T;
}
