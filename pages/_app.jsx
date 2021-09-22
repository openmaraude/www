/* eslint react/prop-types: off */

import React from 'react';

import '@/styles/globals.css';
import '@gouvfr/dsfr/dist/css/dsfr.min.css';


function MyApp({ Component, pageProps }) {
  React.useEffect(async () => {
    //const resp = await import('@gouvfr/dsfr/dist/js/dsfr.module');
    const resp = await import('@gouvfr/dsfr/src/main');
  });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
