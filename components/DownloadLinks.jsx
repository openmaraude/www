import PropTypes from 'prop-types';

import Image from 'next/image';
import Link from 'next/link';

import DownloadAppStore from '@/public/images/icons/download-appstore.svg';
import DownloadPlayStore from '@/public/images/icons/download-playstore.svg';

export default function DonwloadLinks(selectedPartner, setSelectedPartner) {
  const { playStoreLink, appStoreLink } = selectedPartner;

  return (
    <div className="fr-container">
      <h1 className="fr-display-sm">J'utilise l'application en version iOS ou Android</h1>

      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        {appStoreLink && (
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-card fr-enlarge-link">
              <div className="fr-card__body">
                <Link href={appStoreLink} passHref> </Link>
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
                <Link href={playStoreLink} passHref> </Link>
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

      <p>
        <button type="button" onClick={() => setSelectedPartner(null)} className="fr-btn fr-btn--secondary fr-mt-3w">Retour au choix du partenaire</button>
      </p>
    </div>
  );
}

DonwloadLinks.propTypes = {
  selectedPartner: PropTypes.shape({}).isRequired,
  setSelectedPartner: PropTypes.func.isRequired, /* eslint react/no-unused-prop-types: off */
};
