/* eslint-disable jsx-a11y/anchor-is-valid */

import PropTypes from 'prop-types';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink';

function Header() {
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
                  <a href="/">
                    <img src="/images/icons/logo.svg" className="fr-responsive-img" style={{ maxWidth: '9.0625rem' }} alt="Logo le.taxi" />
                  </a>
                </div>
                <div className="fr-header__navbar">
                  <button className="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-menu" aria-haspopup="menu" title="Menu">
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
          <button className="fr-link--close fr-link" aria-controls="modal-menu">Fermer</button>
          <div className="fr-header__menu-links">
          </div>

          <nav className="fr-nav" role="navigation" aria-label="Menu principal" id="header-navigation">
            <ul className="fr-nav__list">
              <li className="fr-nav__item">
                <a href="/taxis_group" className="fr-nav__link">Groupement de taxis</a>
              </li>
              <li className="fr-nav__item">
                <a href="/taxi" className="fr-nav__link">Artisan taxi</a>
              </li>
              <li className="fr-nav__item">
                <a href="/aom" className="fr-nav__link">Mobilité publique</a>
              </li>
              <li className="fr-nav__item">
                <a href="/maas" className="fr-nav__link" >Application de mobilité</a>
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
            <a href="/" title="Retour à l’accueil">
              <p className="fr-logo" title="république française">
                Ministère
                <br />chargé des
                <br />transports
              </p>
            </a>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">
              Le code source est ouvert et les contributions sont bienvenues. <a href="https://www.github.com/openmaraude/www" target="_blank">Voir le code source.</a>
            </p>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://gouvernement.fr" target="_blank">gouvernement.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://service-public.fr" target="_blank">service-public.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://data.gouv.fr" target="_blank">data.gouv.fr</a>
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
            <p>Sauf mention contraire, tous les textes de ce site sont sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank">licence etalab-2.0</a>
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
