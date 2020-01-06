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

export function dataURItoBlob(dataURI: string) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  const byteString =
    dataURI.split(',')[0].indexOf('base64') >= 0
      ? atob(dataURI.split(',')[1])
      : unescape(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

export function timeConverter(UNIX_timestamp: number) {
  if (UNIX_timestamp.toString().length < 13) UNIX_timestamp = UNIX_timestamp * 1000; // convert to ms

  var a = new Date(UNIX_timestamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time;

  time = date + ' ' + month + ' ' + year;

  return time;
}