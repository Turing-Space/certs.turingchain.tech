import { getRelativePath } from '@/utils';

/* head meta tag data */
export const SITE_TITLE = 'Turing Chain';
export const SITE_DESC =
  '區塊鏈成就履歷。不可篡改、無國界的優勢，重新定義傳統教育，創造穩定永續的學習旅程追蹤，強化官方證書的最高信任與真實價值。';
export const SITE_URL = 'certs.turingchain.tech';
export const FAVICON_PATH = getRelativePath('/static/favicon-new.ico?ver=2.0');
export const LARGE_ICON_PATH = getRelativePath(
  '/static/large-icon-new.png?ver=2.0',
);
export const NAV_TITLE = 'nav title';

export enum i18nNamespace {
  Common = 'common',
  Home = 'home',
  Demo = 'demo',
  Issuer = 'issuer',
}

export enum PageState {
  RegisterInput = 'REGISTER_INPUT',
  RegisterSignIn = 'REGISTER_SIGNIN',
  RegisterEmail = 'REGISTER_EMAIL',
  RegisterEmailVerify = 'REGISTER_EMAIL_VERIFY',
  RegisterPhone = 'REGISTER_PHONE',
  RegisterPhoneVerify = 'REGISTER_PHONE_VERIFY',
}

export const GA_ID = process.env.GA_ID;

export const API_ENDPOINT = 'https://x1certificate-aqkcbxdduq-uc.a.run.app/v1';
// export const API_ENDPOINT = 'http://localhost:4000/v1';

export const langsMap: { [key: string]: boolean } = {
  'zh-TW': true,
  en: true,
};
