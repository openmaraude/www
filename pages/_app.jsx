/* eslint react/prop-types: off */

import React from 'react';

import Script from 'next/script';

import '@/styles/globals.css';
import '@gouvfr/dsfr/dist/dsfr/dsfr.min.css';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => import('@gouvfr/dsfr/src/main'), []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}";

            CRISP_RUNTIME_CONFIG = {
              locale : "fr"
            };

            // Disable the following console warning:
            //
            //   [WARNING] Crisp found shims of native JavaScript methods. This
            //   can alter the chatbox behavior and break things. Make sure not
            //   to override listed functions to ensure your chatbox works as
            //   expected. You may be looking for other JavaScript libraries in
            //   use on this page.
            window.$crisp.push(["safe", true])
          `,
        }}
      />

      <Script
        src="https://client.crisp.chat/l.js"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />

      {/* Matomo tracking */}
      <Script id="matomo-script" strategy="afterInteractive">
        {`
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(["setExcludedQueryParams", ["simulationId"]]);
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://stats.data.gouv.fr/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '18']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
    </>
  );
}

export default MyApp;
