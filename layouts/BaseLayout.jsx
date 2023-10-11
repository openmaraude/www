/* eslint-disable jsx-a11y/anchor-is-valid */

import PropTypes from 'prop-types';

import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SkipLinks() {
  return (
    <div className="fr-skiplinks">
      <nav className="fr-container" role="navigation" aria-label="Accès rapide">
        <ul className="fr-skiplinks__list">
          <li>
            <Link className="fr-link" href="#content">Contenu</Link>
          </li>
          <li>
            <Link className="fr-link" href="#header-navigation">Menu</Link>
          </li>
          <li>
            <Link className="fr-link" href="#footer">Pied de page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  const pathname = usePathname();
  return (
    <header role="banner" className="fr-header" id="header-navigation">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    Ministère
                    <br />chargé des
                    <br />transports
                  </p>
                </div>
                <div className="fr-header__navbar">
                  <button className="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-menu" aria-haspopup="menu" title="Menu" type="button">
                    Menu
                  </button>
                </div>
              </div>
              <div className="fr-header__service">
                <Link href="/" title="Registre de disponibilité des taxis">
                  <p className="fr-header__service-title">60&nbsp;000 taxis à portée de main</p>
                </Link>
                <p className="fr-header__service-tagline">le.taxi, registre de disponibilité des taxis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-header__menu fr-modal" id="modal-menu" aria-labelledby="button-825">
        <div className="fr-container">
          <button className="fr-link--close fr-link" aria-controls="modal-menu" type="button">Fermer</button>
          <div className="fr-header__menu-links" />

          <nav className="fr-nav" role="navigation" aria-label="Menu principal" id="header-navigation">
            <ul className="fr-nav__list">
              <li className="fr-nav__item">
                <Link href="/client" className="fr-nav__link" {...(pathname === "/client" ? { "aria-current": "page" } : {})}>Je recherche un taxi</Link>
              </li>
              <li className="fr-nav__item">
                <Link href="/taxi" className="fr-nav__link" {...(pathname === "/taxi" ? { "aria-current": "page" } : {})}>Je suis un chauffeur taxi</Link>
              </li>
              <li className="fr-nav__item">
                <Link href="/aom" className="fr-nav__link" {...(pathname === "/aom" ? { "aria-current": "page" } : {})}>Je suis un acteur public ou privé</Link>
              </li>
              <li className="fr-nav__item">
                <Link href="/contact" className="fr-nav__link" {...(pathname === "/contact" ? { "aria-current": "page" } : {})}>Autres</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function FollowUs() {
  return (
    <div className="fr-follow">
      <div className="fr-container">
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-8">
            <div className="fr-follow__newsletter">
              <p className="fr-h5">Abonnez-vous à notre lettre d’information</p>
              <div>
                <a className="fr-btn" title="S‘abonner à notre lettre d’information" href="https://4f5c450d.sibforms.com/serve/MUIEAKTQDjfzFCKEawgOwstRv3ndc7jEO5_EoGmnNsURyEvb2MuwyG_pv5TBC0FFOZCrId9AIiFM9vvicsgo9eWBxApkPRKJUA1mro2TqzAAfJds1gzQPxHCU2Yw2We0jlshKHzfnox5o9t_BUPzIR8dUKzA3EYThMO5HGoZ-Pmfdc2Au7SphUj7A2P39skzNLvRwAAl8mcYGFX7" target="_blank" rel="noreferrer">
                  S'abonner
                </a>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-follow__social">
              <p className="fr-h5">Suivez-nous<br />sur les réseaux sociaux
              </p>
              <ul className="fr-links-group">
                <li>
                  <a className="fr-link--facebook fr-link" title="Facebook - nouvelle fenêtre" href="https://www.facebook.com/people/letaxi/100083328183554/" target="_blank" rel="noreferrer">
                    facebook
                  </a>
                </li>
                <li>
                  <a className="fr-link--linkedin fr-link" title="LinkedIn - nouvelle fenêtre" href="https://www.linkedin.com/company/letaxi/?viewAsMember=true" target="_blank" rel="noreferrer">
                    linkedin
                  </a>
                </li>
                <li>
                  <a className="fr-link--instagram fr-link" title="Instagram - nouvelle fenêtre" href="https://www.instagram.com/le.taxi_officiel/" target="_blank" rel="noreferrer">
                    instagram
                  </a>
                </li>
                <li>
                  <a className="fr-link--youtube fr-link" title="YouTube - nouvelle fenêtre" href="https://www.youtube.com/@registrededisponibilitedes424" target="_blank" rel="noreferrer">
                    youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="fr-footer" role="contentinfo" id="footer">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            <Link href="/" title="Retour à l’accueil">
              <p className="fr-logo" title="république française">
                Ministère
                <br />chargé des
                <br />transports
              </p>
            </Link>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">
              Le code source est ouvert et les contributions sont bienvenues. <a href="https://www.github.com/openmaraude/www" rel="noreferrer" target="_blank">Voir le code source.</a>
            </p>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039784232/2020-12-27" rel="noreferrer" target="_blank">legifrance.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://www.ecologie.gouv.fr/direction-generale-des-infrastructures-des-transports-et-mer-dgitm" rel="noreferrer" target="_blank">ecologie.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://service-public.fr" rel="noreferrer" target="_blank">service-public.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://schema.data.gouv.fr/openmaraude/schema-stationstaxi/latest.html" rel="noreferrer" target="_blank">schema.data.gouv.fr</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/assets/documents/CGU.pdf?20220614">Conditions générales d'utilisation de l'API</a>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>Sauf mention contraire, tous les textes de ce site sont sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" rel="noreferrer" target="_blank">licence etalab-2.0</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function BaseLayout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="le.taxi, le service public de la maraude électronique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SkipLinks />

      <Header />

      <main role="main" id="content" className="fr-pt-md-14v">
        {children}
      </main>

      <FollowUs />

      <Footer />
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
