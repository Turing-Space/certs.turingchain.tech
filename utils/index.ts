import { animateScroll } from 'react-scroll';
import { GITHUB, PROJ_NAME } from '@/environment';

export function getRelativePath(path: string): string {
  if (GITHUB) {
    const valid = /[^\/].*/g.exec(path);
    return valid ? `/${PROJ_NAME}/${valid[0]}` : `/${PROJ_NAME}/`;
  }
  return path;
}

export function scrollToID(id: string) {
  const $el = document.getElementById(id);
  if ($el) {
    const { top } = $el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement!.scrollTop;
    animateScroll.scrollTo(scrollTop + top);
  }
}