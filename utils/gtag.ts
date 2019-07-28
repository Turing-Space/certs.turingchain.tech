import { GA_ID } from '@/constants';
import { PRODUCTION } from '@/environment';

export function trackPageView(url: string) {
  if (PRODUCTION) {
    try {
      // @ts-ignore
      window.gtag('config', GA_ID, {
        page_location: url,
      });
    } catch (error) {
      // silences the error in dev mode
      // and/or if gtag fails to load
      console.error('gtag: ', error);
    }
  }
}
