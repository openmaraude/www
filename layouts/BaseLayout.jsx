/* eslint-disable jsx-a11y/anchor-is-valid */

import PropTypes from 'prop-types';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ButtonLink from '@/components/ButtonLink';

function Header() {
  const router = useRouter();
  return (
    <header role="banner" className="fr-header">
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
                <div className="fr-header__operator">
                  <Link href="/" passHref>
                    <a>
                      <img src="/images/icons/logo.svg" className="fr-responsive-img" style={{ maxWidth: '9.0625rem' }} alt="Logo le.taxi" />
                    </a>
                  </Link>
                </div>
                <div className="fr-header__navbar">
                  <button className="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-menu" aria-haspopup="menu" title="Menu" type="button">
                    Menu
                  </button>
                </div>
              </div>
            </div>

            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <ul className="fr-links-group">
                  <li>
                    <Link href="https://api.gouv.fr/les-api/le-taxi/demande-acces" passHref>
                      <ButtonLink>S'inscrire</ButtonLink>
                    </Link>
                  </li>
                </ul>
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
                <Link href="/taxis_group" passHref>
                  <a className="fr-nav__link" {...(router.asPath === "/taxis_group" ? { "aria-current": "page" } : {})}>Groupement de taxis</a>
                </Link>
              </li>
              <li className="fr-nav__item">
                <Link href="/taxi" passHref>
                  <a className="fr-nav__link" {...(router.asPath === "/taxi" ? { "aria-current": "page" } : {})}>Artisan taxi</a>
                </Link>
              </li>
              <li className="fr-nav__item">
                <Link href="/aom" passHref>
                  <a className="fr-nav__link" {...(router.asPath === "/aom" ? { "aria-current": "page" } : {})}>Mobilité publique</a>
                </Link>
              </li>
              <li className="fr-nav__item">
                <Link href="/maas" passHref>
                  <a className="fr-nav__link" {...(router.asPath === "/maas" ? { "aria-current": "page" } : {})}>Application de mobilité</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="fr-footer" role="contentinfo" id="footer">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            <Link href="/" passHref>
              <a title="Retour à l’accueil">
                <p className="fr-logo" title="république française">
                  Ministère
                  <br />chargé des
                  <br />transports
                </p>
              </a>
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
              <a className="fr-footer__bottom-link" href="#">Accessibilité</a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="#">Mentions légales</a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="#">Données personnelles</a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="#">Gestion des cookies</a>
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

export default function BaseLayout({ children }) {
  return (
    <div>
      <Head>
        <title>le.taxi, le registre de disponibilité des taxis</title>
        <meta name="description" content="le.taxi, le service public de la maraude électronique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
