/* eslint react/prop-types: off */

import React from 'react';

import '@/styles/globals.css';
import '@gouvfr/dsfr/dist/dsfr/dsfr.min.css';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => import('@gouvfr/dsfr/src/main'), []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
