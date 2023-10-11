import PropTypes from 'prop-types';

import Image from 'next/image';
import Link from 'next/link';

import DownloadAppStore from '@/public/images/icons/download-appstore.svg';
import DownloadPlayStore from '@/public/images/icons/download-playstore.svg';

export default function DonwloadLinks({ partner, reset }) {
  const { description, playStoreLink, appStoreLink } = partner;

  return (
    <div className="fr-container">
      <h1 className="fr-display-sm">Je clique sur le logo pour télécharger l'application en version iOS ou Android</h1>

      {!playStoreLink && !appStoreLink && <p>{description}</p>}

      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        {appStoreLink && (
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-card fr-enlarge-link">
              <div className="fr-card__body">
                <Link href={appStoreLink}> </Link>
              </div>
              <div className="fr-card__header">
                <div className="fr-card__img">
                  <Image layout="responsive" src={DownloadAppStore} className="fr-responsive-img" alt="Lien de téléchargement App Store" />
                </div>
              </div>
            </div>
          </div>
        )}
        {playStoreLink && (
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-card fr-enlarge-link">
              <div className="fr-card__body">
                <Link href={playStoreLink}> </Link>
              </div>
              <div className="fr-card__header">
                <div className="fr-card__img">
                  <Image layout="responsive" src={DownloadPlayStore} className="fr-responsive-img" alt="Lien de téléchargement Play Store" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="fr-mt-3w">
        <button type="button" onClick={reset} className="fr-btn fr-btn--secondary">Retour au choix du partenaire</button>
      </p>
    </div>
  );
}

DonwloadLinks.propTypes = {
  partner: PropTypes.shape({
    description: PropTypes.node,
    playStoreLink: PropTypes.string,
    appStoreLink: PropTypes.string,
  }).isRequired,
  reset: PropTypes.func.isRequired, /* eslint react/no-unused-prop-types: off */
};
