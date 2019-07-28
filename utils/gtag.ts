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

export function trackOutboundLink(url: string) {
  // @ts-ignore
  window.gtag('event', 'click', {
    event_category: 'outbound',
    event_label: url,
    transport_type: 'beacon',
  });
}
