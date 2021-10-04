/* eslint react/prop-types: off */

import React from 'react';

import { useRouter } from 'next/router';

import '@/styles/globals.css';
import '@gouvfr/dsfr/dist/css/dsfr.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => import('@gouvfr/dsfr/src/main'), []);

  /*
   * Disable client-side transition.
   *
   * Framework dsfr is broken with SPA. If you attempt to load the page and
   * click on the link, it is not possible to click on the menu on mobile.
   *
   * As a work around, we force a full browser reload on page change.
   */
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      window.location.href = url;
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
